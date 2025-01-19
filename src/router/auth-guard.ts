import { useAuthStore } from '../stores/user'
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export const authGuard = (to: RouteLocationNormalized, _from: RouteLocationNormalized, next: NavigationGuardNext) => {
  const authStore = useAuthStore()

  if (!authStore.isAuthenticated && to.name !== 'auth') {
    next({ name: 'Auth' })
  } else {
    next()
  }
}
