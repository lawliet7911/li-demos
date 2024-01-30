import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@views/AppView.vue'),
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@views/AppHome.vue')
      },
      {
        path: '/layout',
        name: 'Layout',
        component: () => import('@views/Layout/LayoutIndex.vue')
      },
      {
        path: '/other',
        name: 'Other',
        component: () => import('@views/Other/OtherIndex.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
