<template>
  <v-list-item
    :to="item.to"
    link
    class="nav-item"
  >
    <!-- Icon -->
    <v-list-item-avatar v-if="item.icon">
      <v-icon>{{ item.icon }}</v-icon>
    </v-list-item-avatar>

    <!-- Title -->
    <v-list-item-title>
      {{ item.title }}
    </v-list-item-title>
  </v-list-item>
</template>

<script setup lang="ts">
import type { NavItem } from './types'

interface Props {
  item: NavItem
}

defineProps<Props>()
</script>

<style scoped>
.nav-item {
  cursor: pointer;
}
</style>
