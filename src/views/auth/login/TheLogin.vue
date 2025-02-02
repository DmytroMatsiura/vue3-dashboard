<template>
  <div>
    <div class="text-h5 text-center mb-6">Login to your account</div>

    <v-form
      ref="loginForm"
      @submit="login"
    >
      <div class="mb-4">
        <div class="mb-1">
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

      <div class="mb-6">
        <div class="d-flex justify-between mb-1">
          <label for="email">Password</label>
        </div>

        <v-text-field
          id="password"
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          required
          :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
          @click:append-inner="togglePassword"
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
        Login
        <v-icon class="ml-2">mdi-arrow-right</v-icon>
      </v-btn>
    </v-form>

    <v-divider class="mb-4">OR LOGIN WITH</v-divider>

    <div class="d-flex justify-center">
      <v-btn
        icon
        color="primary"
      >
        <v-icon>mdi-google</v-icon>
      </v-btn>
      <v-btn
        icon
        color="black"
      >
        <v-icon>mdi-apple</v-icon>
      </v-btn>
      <v-btn
        icon
        color="blue"
      >
        <v-icon>mdi-facebook</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useAuthStore } from '@/stores/auth'
  import type { LoginDTO } from '@/types/request/auth/login'
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const authStore = useAuthStore()

  const email = ref('')
  const password = ref('')
  const showPassword = ref(false)

  const login = async () => {
    try {
      const payload: LoginDTO = {
        email: email.value,
        password: password.value,
      }

      await authStore.login(payload)

      router.push('/')
    } catch (error) {
      console.error('Invalid email or password ', (error as Error).message)
    }
  }

  const togglePassword = () => {
    showPassword.value = !showPassword.value
  }
</script>
