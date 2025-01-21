import http from '../api'

import type { APIResponse } from '@/types/api'
import type { LoginDTO } from '@/types/request/auth/login'
import type { SignupDTO } from '@/types/request/auth/signup'
import type { ResetPasswordDTO } from '@/types/request/auth/resetPassword'

import type { LoginRO } from '@/types/response/auth/login'
import type { SignupRO } from '@/types/response/auth/signup'

export const login = (payload: LoginDTO) => {
  return http.post<APIResponse<LoginRO>>('/api/auth/login', payload)
}

export const signup = (payload: SignupDTO) => {
  return http.post<APIResponse<SignupRO>>('auth/login', payload)
}

export const resetPassword = (payload: ResetPasswordDTO) => {
  return http.post<void>('auth/login', payload)
}

export default {
  login,
  signup,
  resetPassword,
}
