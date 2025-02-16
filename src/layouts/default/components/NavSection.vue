<template>
  <div class="nav-section">
    <!-- Section Title -->
    <div class="nav-section-title text-subtitle-2 px-6 mb-2">
      {{ title }}
    </div>

    <!-- Section Items -->
    <NavSectionList :items="items" />
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'

  import type { SidebarSection } from './types'

  import NavSectionList from './NavSectionList.vue'

  interface Props {
    section: SidebarSection
  }

  const props = defineProps<Props>()

  const title = computed(() => props.section.title)
  const items = computed(() => props.section.items)
</script>

<style scoped>
  .nav-section {
  margin-bottom: 24px;
}

.nav-section-title {
  color: var(--v-theme-on-surface);
  opacity: 0.6;
  text-transform: uppercase;
}
</style>
