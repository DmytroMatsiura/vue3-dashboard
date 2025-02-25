<template>
  <div>
    <div class="text-h5 text-center mb-6">Create account in Relik</div>

    <v-form
      ref="signupForm"
      @submit="signup"
    >
      <v-row class="mb-4">
        <v-col cols="6">
          <div>
            <div class="mb-1">
              <label for="name">Name</label>
            </div>

            <v-text-field
              id="name"
              v-model="name"
              type="name"
              required
              variant="outlined"
              hide-details="auto"
              density="compact"
            />
          </div>
        </v-col>

        <v-col cols="6">
          <div>
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
        </v-col>
      </v-row>

      <div class="mb-4">
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

      <div class="mb-4">
        <div class="d-flex justify-between mb-1">
          <label for="email">Confirm Password</label>
        </div>

        <v-text-field
          id="password"
          v-model="confirmPassword"
          :type="showConfirmPassword ? 'text' : 'password'"
          required
          :append-inner-icon="showConfirmPassword ? 'mdi-eye-off' : 'mdi-eye'"
          @click:append-inner="toggleConfirmPassword"
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
        Sign up
        <v-icon class="ml-2">mdi-arrow-right</v-icon>
      </v-btn>
    </v-form>

    <v-divider class="mb-4">OR SIGNUP WITH</v-divider>

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
import type { SignupDTO } from '@/types/request/auth/signup'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const authStore = useAuthStore()

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const showPassword = ref(false)
const showConfirmPassword = ref(false)

const signup = async () => {
  try {
    const payload: SignupDTO = {
      email: email.value,
      password: password.value,
    }

    await authStore.signup(payload)

    router.push('/')
  } catch (error) {
    console.error('Invalid email or password ', (error as Error).message)
  }
}

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const toggleConfirmPassword = () => {
  showPassword.value = !showPassword.value
}
</script>
