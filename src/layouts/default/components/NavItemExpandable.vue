<template>
  <v-list-group
    prepend-icon="mdi-chevron-down"
    :value="open"
    @click:prepend="toggleGroup"
    class="nav-item-expandable"
  >
    <!-- Activator Slot -->
    <template #activator>
      <v-list-item-avatar v-if="item.icon">
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-avatar>
      <v-list-item-title>
        {{ item.title }}
      </v-list-item-title>
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
  import { ref } from 'vue'
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
    item: {
      type: Object as PropType<NavItemType>,
      required: true,
    },
  })

  const open = ref(false)

  function toggleGroup() {
    open.value = !open.value
  }
</script>

<style scoped>
  .nav-item-expandable {
  cursor: pointer;
}
</style>
