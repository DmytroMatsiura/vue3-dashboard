import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import { authGuard } from './auth-guard'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_API_ENDPOINT),
  routes,
})

router.beforeEach(authGuard)

export default router
