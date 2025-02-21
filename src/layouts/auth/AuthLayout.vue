<template>
  <v-main>
    <v-container
      fluid
      class="d-flex flex-column justify-center align-center h-screen bg-gray-100"
    >
      <div class="d-flex justify-center align-center mb-10">
        <img
          src="../../assets/images/auth/logo.png"
          alt="logo"
        />
      </div>

      <v-card
        max-width="1010"
        rounded="lg"
        class="w-100"
      >
        <div class="d-flex elevation-24 rounded-lg overflow-hidden">
          <v-row>
            <!-- Left Image Section -->
            <v-col cols="6">
              <v-img
                class="h-100"
                cover
                :src="imgUrl"
              ></v-img>
            </v-col>

            <!-- Right Form Section -->
            <v-col cols="6">
              <div class="pa-10">
                <RouterView />
              </div>
            </v-col>
          </v-row>
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
