<template>
  <v-app>
    <v-layout class="rounded rounded-md">
      <v-navigation-drawer width="280">
        <AppSidebar />
      </v-navigation-drawer>

      <v-app-bar>
        <AppHeader />
      </v-app-bar>

      <v-main
        class="d-flex align-center justify-center"
        style="min-height: 300px"
      >
        <RouterView />
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppSidebar from './components/AppSidebar.vue'
</script>

<style scoped></style>
