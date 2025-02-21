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
        path: '/analytics',
        name: 'analytics',
        component: imports.TheAnalytics,
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
