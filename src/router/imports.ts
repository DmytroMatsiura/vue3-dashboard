// Layouts
export const DefaultLayout = () => import('../layouts/default/DefaultLayout.vue')
export const AuthLayout = () => import('../layouts/auth/AuthLayout.vue')

// Pages
export const TheHome = () => import('../views/admin/home/index.vue')
export const TheDashboard = () => import('../views/admin/dashboard/index.vue')
export const TheCalendar = () => import('../views/admin/calendar/index.vue')
export const TheKanban = () => import('../views/admin/kanban/index.vue')
export const TheAnalytics = () => import('../views/admin/analytics/index.vue')
export const TheLogin = () => import('../views/auth/login/TheLogin.vue')
export const RecoverPassword = () => import('../views/auth/reset-password/ResetPassword.vue')
export const TheSignup = () => import('../views/auth/signup/TheSignup.vue')
