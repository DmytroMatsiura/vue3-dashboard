<template>
  <v-app>
    <v-layout class="rounded rounded-md">
      <v-navigation-drawer width="280">
        <AppSidebar />
      </v-navigation-drawer>

      <v-app-bar height="72">
        <AppHeader />
      </v-app-bar>

      <v-main>
        <AppMain>
          <RouterView />
        </AppMain>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppSidebar from './components/AppSidebar.vue'
import AppMain from './components/AppMain.vue'
</script>

<style scoped></style>
