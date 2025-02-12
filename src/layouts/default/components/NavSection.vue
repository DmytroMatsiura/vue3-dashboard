<template>
  <div class="nav-section">
    <!-- Section Title -->
    <div class="nav-section-title text-subtitle-2 px-4 py-2">
      {{ title }}
    </div>

    <!-- Section Items -->
    <NavSectionList :items="items" />
  </div>
</template>

<script setup lang="ts">
  import type { PropType } from 'vue'
  import NavSectionList from './NavSectionList.vue'

  interface NavItem {
    title: string
    icon?: string
    to?: string
    children?: NavItem[]
  }

  defineProps({
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array as PropType<NavItem[]>,
      default: () => [],
    },
  })
</script>

<style scoped>
  .nav-section {
  margin-bottom: 16px;
}

.nav-section-title {
  color: var(--v-theme-on-surface);
  opacity: 0.6;
  text-transform: uppercase;
}
</style>
