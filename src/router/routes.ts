import * as imports from './imports'

export const routes = [
  {
    path: '/',
    name: 'admin',
    component: imports.DefaultLayout,
    redirect: { name: 'dashboard' },
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: imports.TheDashboard,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: '/calendar',
        name: 'calendar',
        component: imports.TheCalendar,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: '/kanban',
        name: 'kanban',
        component: imports.TheKanban,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: '/file-manager',
        name: 'file-manager',
        component: imports.TheFileManager,
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
  {
    path: '/auth',
    name: 'auth',
    redirect: { name: 'login' },
    component: imports.AuthLayout,
    children: [
      {
        name: 'login',
        path: 'login',
        component: imports.TheLogin,
      },
      {
        name: 'signup',
        path: 'signup',
        component: imports.TheSignup,
      },
      {
        name: 'recover-password',
        path: 'recover-password',
        component: imports.RecoverPassword,
      },
    ],
  },
]
