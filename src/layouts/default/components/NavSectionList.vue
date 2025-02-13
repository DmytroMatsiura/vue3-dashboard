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
  import type { PropType } from 'vue'
  import NavItem from './NavItem.vue'
  import NavItemExpandable from './NavItemExpandable.vue'

  interface NavItemType {
    title: string
    icon?: string
    to?: string
    children?: NavItemType[]
  }

  defineProps({
    items: {
      type: Array as PropType<NavItemType[]>,
      default: () => [],
    },
  })
</script>

<style scoped>
  .nav-section-list {
  /* Adjust styles as needed */
  padding: 0;
}
</style>
