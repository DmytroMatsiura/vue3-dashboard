// Layouts
export const DefaultLayout = () => import('../layouts/default/DefaultLayout.vue')
export const AuthLayout = () => import('../layouts/auth/AuthLayout.vue')

// Pages
export const TheHome = () => import('../views/admin/home/TheHome.vue')
export const TheLogin = () => import('../views/auth/login/TheLogin.vue')
export const RecoverPassword = () => import('../views/auth/recover-password/RecoverPassword.vue')
export const TheSignup = () => import('../views/auth/signup/TheSignup.vue')
