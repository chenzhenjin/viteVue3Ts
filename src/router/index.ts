import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '首页',
      keepalive: true
    },
    component: () => import('../views/home.vue')
  },
  {
    path: '/test',
    name: 'Test',
    meta: {
      title: '测试',
      keepalive: true
    },
    component: () => import('../views/test.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router