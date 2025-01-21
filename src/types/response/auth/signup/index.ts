import type { User } from '@/types/base/user'

export interface SignupRO {
  user: User
  token: string
}
