import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/index.vue'

export const baseRoute = '/blocks'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: baseRoute,
      name: 'blocks',
      component: () => import('@/views/blocks/index.vue'),
      children: [
        {
          path: baseRoute + '/auth/login',
          name: 'login',
          component: () => import('@/views/blocks/auth/login/index.vue'),
          meta: {
            title: '登录',
          },
        },
        {
          path: baseRoute + '/auth/register',
          name: 'register',
          component: () => import('@/views/blocks/auth/register/index.vue'),
          meta: {
            title: '注册',
          },
        },
      ]
    },
  ],
})

export default router
