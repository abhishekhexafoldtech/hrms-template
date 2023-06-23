import { createRouter, createWebHistory } from 'vue-router'


/* Layout */
import Layout from "@/layout/Layout.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/views/credential/Login.vue')
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('@/views/credential/Registration.vue')
    },
    {
      path: '/dashboard',
      component: Layout,
      redirect: '/dashboard',
      name: 'dashboard',
      children: [
        {
          path: '',
          component: () => import('@/views/dashboard/Dashboard.vue'),
          name: 'dashboard'
        },
        {
          path: '/about',
          component: () => import('@/views/about/About.vue'),
          name: 'about'
        },
        {
          path: '/blank-page',
          component: () => import('@/views/blank-page/BlankPage.vue'),
          name: 'blank-page'
        },
      ]
    },
  ]
})

export default router
