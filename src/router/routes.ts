import * as imports from './imports'

export const routes = [
  {
    path: '/',
    name: 'admin',
    component: imports.DefaultLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: imports.TheHome,
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
