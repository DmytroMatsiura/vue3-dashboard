import { useAuthStore } from '../stores/auth'
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export const authGuard = (to: RouteLocationNormalized, _from: RouteLocationNormalized, next: NavigationGuardNext) => {
  const authStore = useAuthStore()

  if (to.meta.requiresAuth) {
    if (authStore.isAuthenticated) {
      next()
    } else {
      const token = authStore.token

      if (token) {
        // try to login with token and fetch user data
      } else {
        next({ name: 'login' })
      }
    }
  } else {
    next()
  }
}
