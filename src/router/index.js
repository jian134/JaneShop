import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// 定义路由规则
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // 可以后续添加更多路由，如关于页、博客列表等
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
