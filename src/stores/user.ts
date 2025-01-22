import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { User } from '@/types/base/user'

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null)

  return {
    user,
  }
})
