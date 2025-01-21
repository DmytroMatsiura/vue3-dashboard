import type { User } from '@/types/base/user'

export interface LoginRO {
  user: User
  token: string
}
