import * as imports from './imports'

export const routes = [
  {
    path: '/',
    component: imports.DefaultLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: imports.TheHome,
      },
    ],
  },
  {
    path: '/auth',
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
