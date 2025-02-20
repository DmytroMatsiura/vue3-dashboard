<template>
  <v-list-item
    :to="item.to"
    link
    active-class="active"
  >
    <template #prepend>
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

<style scoped lang="scss">
.v-list-item {
  display: flex;
  padding: 10px 24px;
  border-left: 4px solid transparent;

  :deep(.v-list-item-title) {
    font-weight: 500;
    color: rgb(var(--v-theme-gray-600));
  }

  :deep(.v-list-item__prepend) {
    width: 36px;
    color: rgb(var(--v-theme-gray-600));
  }

  &.active {
    border-left-color: rgba(var(--v-theme-primary), 1);

    :deep(.v-list-item__overlay) {
      background-color: rgba(var(--v-theme-primary), 1);
    }

    :deep(.v-list-item-title) svg {
      color: rgb(var(--v-theme-gray-900));
    }

    :deep(.v-list-item__prepend) svg {
      color: rgba(var(--v-theme-primary), 1);
    }
  }
}
</style>
