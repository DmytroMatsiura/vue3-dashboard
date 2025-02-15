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
      { title: 'Home', icon: 'mdi-home', to: '/dashboard/home' },
      { title: 'Analytics', icon: 'mdi-chart-bar', to: '/dashboard/analytics' },
    ],
  },
  {
    title: 'PAGES',
    items: [
      { title: 'Profile', icon: 'mdi-account', to: '/pages/profile' },
      {
        title: 'Authentication',
        icon: 'mdi-lock',
        children: [
          { title: 'Login', icon: 'mdi-login', to: '/pages/auth/login' },
          { title: 'Register', icon: 'mdi-account-plus', to: '/pages/auth/register' },
          { title: 'Forgot Password', icon: 'mdi-lock-reset', to: '/pages/auth/forgot' },
        ],
      },
      { title: 'Invoice', icon: 'mdi-file-document', to: '/pages/invoice' },
    ],
  },
  {
    title: 'COMPONENTS',
    items: [
      {
        title: 'UI Elements',
        icon: 'mdi-widgets',
        children: [
          { title: 'Buttons', icon: 'mdi-gesture-tap-button', to: '/components/buttons' },
          { title: 'Cards', icon: 'mdi-card', to: '/components/cards' },
          { title: 'Alerts', icon: 'mdi-alert-circle', to: '/components/alerts' },
        ],
      },
      { title: 'Forms', icon: 'mdi-form-select', to: '/components/forms' },
      {
        title: 'Tables',
        icon: 'mdi-table',
        children: [
          { title: 'Simple Table', icon: 'mdi-table-simple', to: '/components/tables/simple' },
          { title: 'Data Table', icon: 'mdi-table-large', to: '/components/tables/data' },
        ],
      },
    ],
  },
])
</script>

<style scoped></style>
