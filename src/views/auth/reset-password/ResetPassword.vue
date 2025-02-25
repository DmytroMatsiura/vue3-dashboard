<template>
  <div>
    <div class="text-h5 text-center mb-6">Reset Password</div>

    <v-form
      ref="resetPasswordForm"
      @submit="resetPassword"
    >
      <div>
        <div class="mb-4">
          <label for="email">Email</label>
        </div>

        <v-text-field
          id="email"
          v-model="email"
          type="email"
          required
          variant="outlined"
          hide-details="auto"
          density="compact"
        />
      </div>

      <v-btn
        type="submit"
        color="primary"
        block
        rounded="xl"
        class="mb-6"
      >
        Reset Password
        <v-icon class="ml-2">mdi-arrow-right</v-icon>
      </v-btn>
    </v-form>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import type { ResetPasswordDTO } from '@/types/request/auth/resetPassword'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const authStore = useAuthStore()

const email = ref('')

const resetPassword = async () => {
  try {
    const payload: ResetPasswordDTO = {
      email: email.value,
    }

    await authStore.resetPassword(payload)

    router.push({ name: 'login' })
  } catch (error) {
    console.error('Invalid email or password ', (error as Error).message)
  }
}
</script>
