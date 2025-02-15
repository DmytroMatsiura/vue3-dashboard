<template>
  <v-list
    class="nav-list"
    density="comfortable"
  >
    <NavSection
      v-for="(section, idx) in sections"
      :key="idx"
      :section="section"
    />
  </v-list>
</template>

<script setup lang="ts">
import type { SidebarSection } from './types'

import NavSection from './NavSection.vue'

interface Props {
  sections: SidebarSection[]
}

defineProps<Props>()
</script>

<style scoped>
.nav-list {
  padding: 0;
}
</style>
