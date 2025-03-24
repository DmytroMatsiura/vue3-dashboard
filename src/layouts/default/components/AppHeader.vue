<template>
  <div class="w-100 px-10 py-4 d-flex justify-space-between align-center">
    <div class="search-bar">
      <!-- Search -->
      <v-text-field
        density="compact"
        variant="outlined"
        prepend-inner-icon="mdi-magnify"
        placeholder="Search"
        hide-details
      />
    </div>

    <div>
      <!-- Language Selector -->
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            variant="outlined"
            class="text-capitalize"
          >
            <v-icon left>mdi-flag</v-icon> English
            <v-icon right>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(lang, index) in languages"
            :key="index"
            @click="selectLanguage(lang)"
          >
            <v-list-item-title>{{ lang }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- Layout select -->
      <v-btn
        density="comfortable"
        icon
      >
        <v-icon>ph:squares-four</v-icon>
      </v-btn>

      <!-- Notifications -->
      <v-btn
        density="comfortable"
        icon
      >
        <v-badge
          dot
          color="red"
        >
          <v-icon>ph:bell</v-icon>
        </v-badge>
      </v-btn>

      <!-- User Avatar -->
      <v-avatar color="orange">
        <v-icon>mdi-emoticon</v-icon>
      </v-avatar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const languages = ref(['English', 'Українська'])

const selectLanguage = (lang: string) => {
  console.log('Selected language:', lang)
}
</script>

<style scoped>
.search-bar {
  width: 100%;
  max-width: 250px;
}
</style>
