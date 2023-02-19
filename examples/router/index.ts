import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home/home.vue'),
    },
    {
      path: '/guide',
      name: 'guide',
      component: () => import('../views/guide/index.vue'),
      children: [
        { path: '/guide', component: () => import('../views/guide/home.vue') },
        // { path: '/guide/button', component: () => import('../views/components/button.vue'), }
      ],
    },
    {
      path: '/components',
      name: 'components',
      component: () => import('../views/components/index.vue'),
      children: [
        {
          path: '/components',
          component: () => import('../views/components/home.vue'),
        },
        {
          path: '/components/button',
          component: () => import('../views/components/button.vue'),
        },
        {
          path: '/components/link',
          component: () => import('../views/components/link.vue'),
        },
        {
          path: '/components/icon',
          component: () => import('../views/components/icon.vue'),
        },
        {
          path: '/components/input',
          component: () => import('../views/components/input.vue'),
        },
        {
          path: '/components/table',
          component: () => import('../views/components/table.vue'),
        },
        {
          path: '/components/aside-nav',
          component: () => import('../views/components/aside-nav.vue'),
        },
        {
          path: '/components/dialog',
          component: () => import('../views/components/dialog.vue'),
        },
        {
          path: '/components/avatar',
          component: () => import('../views/components/avatar.vue'),
        },
        {
          path: '/components/collapse',
          component: () => import('../views/components/collapse.vue'),
        },
        {
          path: '/components/pagination',
          component: () => import('../views/components/pagination.vue'),
        },
        {
          path: '/components/tooltip',
          component: () => import('../views/components/tooltip.vue'),
        },
        {
          path: '/components/badge',
          component: () => import('../views/components/badge.vue'),
        },
        {
          path: '/components/radio',
          component: () => import('../views/components/radio.vue'),
        },
        {
          path: '/components/select',
          component: () => import('../views/components/select.vue'),
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/home/not_found.vue'),
    },
  ],
})

export default router
