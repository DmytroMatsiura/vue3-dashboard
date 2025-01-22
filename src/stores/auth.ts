import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

import { API } from '@/services/index'

import { useUserStore } from '@/stores/user'
import type { LoginDTO } from '@/types/request/auth/login'
import type { SignupDTO } from '@/types/request/auth/signup'
import type { ResetPasswordDTO } from '@/types/request/auth/resetPassword'

export const useAuthStore = defineStore('auth', () => {
  const userStore = useUserStore()

  const token = ref<null | string>(null)

  const isAuthenticated = computed(() => !!token.value)

  const login = async (payload: LoginDTO) => {
    try {
      const { data } = await API.auth.login(payload)

      token.value = data.token
      userStore.user = data.user
    } catch (e: unknown) {
      throw new Error('Failed to login ' + (e as Error).message)
    }
  }

  const signup = async (payload: SignupDTO) => {
    try {
      const { data } = await API.auth.signup(payload)

      token.value = data.token
      userStore.user = data.user
    } catch (e: unknown) {
      throw new Error('Failed to signup ' + (e as Error).message)
    }
  }

  const resetPassword = async (payload: ResetPasswordDTO) => {
    try {
      await API.auth.resetPassword(payload)
    } catch (e: unknown) {
      throw new Error('Failed to reset password ' + (e as Error).message)
    }
  }

  const logout = () => {
    token.value = null
  }

  return {
    token,
    isAuthenticated,
    login,
    signup,
    resetPassword,
    logout,
  }
})
