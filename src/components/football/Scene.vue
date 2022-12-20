<template>
  <div class="scene" ref="sceneDiv"></div>
</template>

<script setup>
import * as CANNON from 'cannon-es';
import * as THREE from 'three';
import { PerspectiveCamera } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { onMounted, ref } from "vue";
import rendererModule from "@/three/factory/renderer";
import animate from "@/three/factory/animate";
import { updateMesh } from "@/three/factory/createMesh";

// 场景元素div
let sceneDiv = ref(null);

//创建物理世界
const world =new  CANNON.World();
world.gravity.set(0, -9.82, 0);

//初始化场景
const scene = new THREE.Scene()
//初始化相机
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

camera.position.set(4, 2, 0)
camera.lookAt(0, 2, 0)
camera.aspect = window.innerWidth / window.innerHeight
camera.updateProjectionMatrix()

//初始化渲染器
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  logarithmicDepthBuffer: true,
  powerPreference: 'high-performance'
})

renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
renderer.outputEncoding = THREE.sRGBEncoding
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 1
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap


//初始化控制器
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.target.set(0, 2, 0)

//添加环境纹理
let rgbeLoader = new RGBELoader()
rgbeLoader.load('/textures/outdoor.hdr', (texture) => {
  texture.mapping = THREE.EquirectangularReflectionMapping
  scene.background = texture
  scene.environment = texture
  scene.backgroundBlurriness = 0.1
})

function render(){
  controls.update();
  requestAnimationFrame(render)
}

onMounted(() => {
  sceneDiv.value.appendChild(renderer.domElement);
  // animate(updateMesh, city);
  render()
});


</script>

<style>
.scene {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
}
</style>
