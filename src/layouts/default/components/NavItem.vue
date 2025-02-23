<template>
  <v-list-item
    :to="item.to"
    link
    active-class="active"
  >
    <template
      v-if="item.icon"
      #prepend
    >
      <v-icon>{{ item.icon }}</v-icon>
    </template>

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
