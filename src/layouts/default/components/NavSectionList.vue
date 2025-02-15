<template>
  <v-list
    class="nav-section-list"
    density="comfortable"
  >
    <div
      v-for="(item, index) in items"
      :key="index"
    >
      <NavItemExpandable
        v-if="item.children && item.children.length"
        :item="item"
      />
      <NavItem
        v-else
        :item="item"
      />
    </div>
  </v-list>
</template>

<script setup lang="ts">
import type { NavItem as INavItem } from './types'

import NavItem from './NavItem.vue'
import NavItemExpandable from './NavItemExpandable.vue'

interface Props {
  items: INavItem[]
}

defineProps<Props>()
</script>

<style scoped>
.nav-section-list {
  padding: 0;
}
</style>
