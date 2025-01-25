import { useAuthStore } from '../stores/auth'
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export const authGuard = (to: RouteLocationNormalized, _from: RouteLocationNormalized, next: NavigationGuardNext) => {
  const authStore = useAuthStore()

  // TODO: update implementation of authMiddleware
  if (!authStore.isAuthenticated && to.name !== 'auth') {
    next({ name: 'auth' })
  } else {
    next()
  }

  // if (to.meta.requiresAuth) {
  //   // Apply authMiddleware to protected routes
  //   authMiddleware(to, from, next);
  // } else {
  //     // For non-protected routes, proceed to the next route
  //     next();
  // }

  // authMiddleware
  // const token = localStorage.getItem("token"); // Get token from local storage
  // if (!token && to.path !== '/login') {
  //   // No token present and not on the login page, redirect to login
  //   next('/login');
  // } else {
  //   // Token present or on the login page, allow access
  //   next();
  // }
}
