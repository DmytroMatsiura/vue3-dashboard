<template>
  <v-main>
    <v-container
      fluid
      class="flex flex-col justify-center items-center min-h-screen bg-gray-100"
    >
      <div class="flex justify-center items-center mb-10">
        <img
          src="../../assets/images/auth/logo.png"
          alt="logo"
        />
      </div>

      <v-card
        max-width="1010"
        rounded="lg"
        class="w-full"
      >
        <div class="flex flex-row shadow-lg rounded-lg overflow-hidden">
          <!-- Left Image Section -->
          <div
            class="md:w-1/2 bg-cover bg-center"
            :style="{ backgroundImage: `url(${imgUrl})` }"
          />

          <!-- Right Form Section -->
          <div class="md:w-1/2 pa-10">
            <RouterView />
          </div>
        </div>
      </v-card>

      <div class="text-center mt-4">
        <span>Don't have an account? </span>
        <RouterLink
          :to="{ name: 'signup' }"
          class="text-blue-500 hover:underline"
          >Create Account</RouterLink
        >
      </div>
    </v-container>
  </v-main>
</template>

<script setup lang="ts">
  import imgUrl from '@/assets/images/auth/auth-bg.png'
</script>

<style scoped></style>
