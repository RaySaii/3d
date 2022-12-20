import { createRouter, createWebHashHistory } from 'vue-router'
import CityView from '../views/CityView.vue'
import FactoryView from '../views/FactoryView.vue'
import FootballView from '../views/FootballView.vue'

const routes = [
  {
    path: '/city',
    name: 'city',
    component: CityView
  },
  {
    path: '/factory',
    name: 'factory',
    component: FactoryView
  },
  {
    path: '/football',
    name: 'football',
    component: FootballView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
