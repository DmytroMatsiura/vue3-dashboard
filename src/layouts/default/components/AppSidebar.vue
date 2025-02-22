<template>
  <div class="py-5">
    <div class="px-6 mb-6">
      <img
        src="../../../assets/images/auth/logo.png"
        alt="Analytix logo"
        height="32px"
      />
    </div>

    <NavList :sections="navSections" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { SidebarSection } from './types'

import NavList from './NavList.vue'

const navSections = ref<SidebarSection[]>([
  {
    title: 'DASHBOARD',
    items: [
      { title: 'Dashboard', icon: 'ph:house-line', to: '/dashboard' },
      { title: 'Calendar', icon: 'ph:calendar', to: '/calendar' },
      {
        title: 'Kanban Board',
        icon: 'ph:calendar-blank',
        children: [
          { title: 'Kanban Board', to: '/kanban' },
          { title: 'Card Details', to: '/kanban-details' },
          { title: 'Create New Card', to: '/kanban/new' },
        ],
      },
      {
        title: 'File Manager',
        icon: 'ph:folder-open',
        children: [
          { title: 'File Manager', to: '/file-manager' },
          { title: 'Upload New File', to: '/file-manager/new ' },
        ],
      },
    ],
  },
  {
    title: 'PAGES',
    items: [
      {
        title: 'Profile',
        icon: 'ph:user',
        children: [
          { title: 'Profile', to: '/profile' },
          { title: 'Settings', to: '/settings ' },
        ],
      },
      {
        title: 'Invoice',
        icon: 'ph:notebook',
        children: [
          { title: 'Invoice', to: '/invoice' },
          { title: 'Invoice Details', to: '/invoice/id' },
        ],
      },
      {
        title: 'Billing',
        icon: 'ph:credit-card',
        to: '/billing',
      },
      {
        title: 'Pricing Plans',
        icon: 'ph:lightning',
        to: '/plans',
      },
      {
        title: 'FAQs',
        icon: 'ph:question',
        to: '/faq',
      },
      {
        title: 'Blank Page',
        icon: 'ph:note-blank',
        to: '/blank-page',
      },
    ],
  },
])
</script>

<style scoped></style>
