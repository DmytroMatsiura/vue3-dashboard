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
  import type { PropType } from 'vue'

  interface NavItemType {
    title: string
    icon?: string
    to?: string
  }

  defineProps({
    item: {
      type: Object as PropType<NavItemType>,
      required: true,
    },
  })
</script>

<style scoped>
  .nav-item {
  cursor: pointer;
}
</style>
