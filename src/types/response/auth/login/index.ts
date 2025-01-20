import type { User } from '@/types/base/user'

export interface AuthResponse {
  user: User
  token: string
}
