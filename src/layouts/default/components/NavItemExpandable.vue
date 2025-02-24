<template>
  <v-list-group
    prepend-icon="mdi-chevron-down"
    :value="item.title"
  >
    <!-- Activator Slot -->
    <template v-slot:activator="{ props }">
      <v-list-item v-bind="props">
        <template #prepend>
          <v-icon>{{ item.icon }}</v-icon>
        </template>

        <v-list-item-title>
          {{ item.title }}
        </v-list-item-title>
      </v-list-item>
    </template>

    <!-- Children -->
    <div
      v-for="(child, index) in item.children"
      :key="index"
    >
      <NavItemExpandable
        v-if="child.children && child.children.length"
        :item="child"
      />
      <NavItem
        v-else
        :item="child"
      />
    </div>
  </v-list-group>
</template>

<script setup lang="ts">
import type { NavItem as INavItem } from './types'

import NavItem from './NavItem.vue'
import NavItemExpandable from './NavItemExpandable.vue'

interface Props {
  item: INavItem
}

defineProps<Props>()
</script>
