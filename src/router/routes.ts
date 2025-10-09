import { appTitle } from '@/helpers'

export const allRoutes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: appTitle,
    },
    component: () => import('@/views/demos/index-6/index.vue'),
  },
  {
    path: '/demos',
    children: [
      {
        path: 'index-1',
        name: 'demos.index-1',
        meta: {
          title: appTitle,
        },
        component: () => import('@/views/demos/index-1/index.vue'),
      },
      {
        path: 'index-2',
        name: 'demos.index-2',
        meta: {
          title: appTitle,
        },
        component: () => import('@/views/demos/index-2/index.vue'),
      },
      {
        path: 'index-3',
        name: 'demos.index-3',
        meta: {
          title: appTitle,
        },
        component: () => import('@/views/demos/index-3/index.vue'),
      },
      {
        path: 'index-4',
        name: 'demos.index-4',
        meta: {
          title: appTitle,
        },
        component: () => import('@/views/demos/index-4/index.vue'),
      },
      {
        path: 'index-5',
        name: 'demos.index-5',
        meta: {
          title: appTitle,
        },
        component: () => import('@/views/demos/index-5/index.vue'),
      },
      {
        path: 'index-6',
        name: 'demos.index-6',
        meta: {
          title: appTitle,
        },
        component: () => import('@/views/demos/index-6/index.vue'),
      },
      {
        path: 'index-7',
        name: 'demos.index-7',
        meta: {
          title: appTitle,
        },
        component: () => import('@/views/demos/index-7/index.vue'),
      },
    ],
  },
  {
    path: '/blogs/:slug',
    name: 'blogs',
    meta: {
      title: appTitle,
    },
    component: () => import('@/views/blogs/[slug]/index.vue'),
  },
]
