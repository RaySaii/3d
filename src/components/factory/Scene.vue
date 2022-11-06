<template>
  <div class="scene" ref="sceneDiv"></div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import * as THREE from "three";
import gsap from "gsap";

// 导入gui对象
import gui from "@/three/city/gui";
// 导入场景
import scene from "@/three/factory/scene";

import cameraModule from "@/three/factory/camera";
// 导入控制器
import controlModule from "@/three/factory/controls";
// 导入辅助坐标轴
import axesHelper from "@/three/factory/axesHelper";
// 导入渲染器
import rendererModule from "@/three/factory/renderer";
// 初始化调整屏幕
import "@/three/factory/init";
// 导入添加物体函数
import createMesh from "@/three/factory/createMesh";
import { updateMesh } from "@/three/factory/createMesh";
// 导入每一帧的执行函数
import animate from "@/three/factory/animate";

import eventHub from "@/utils/eventHub";

console.log(controlModule);
// 场景元素div
let sceneDiv = ref(null);
// 添加相机
scene.add(cameraModule.activeCamera);
// 添加辅助坐标轴
scene.add(axesHelper);
// 创建物体
let city = createMesh();

// 创建事件的问题
const props = defineProps(["eventList"]);

let arrEventMesh = [];

onMounted(() => {
  sceneDiv.value.appendChild(rendererModule.renderer.domElement);
  animate(updateMesh, city);
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
