<template>
  <v-list
    class="nav-list"
    density="comfortable"
  >
    <NavSection
      title="DASHBOARD"
      :items="[{ title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/dashboard' }]"
    />

    <NavSection
      title="PAGES"
      :items="[
        { title: 'Profile', icon: 'mdi-account', to: '/profile' },
        { title: 'Invoice', icon: 'mdi-file-document', to: '/invoice' },
      ]"
    />

    <NavSection
      title="COMPONENTS"
      :items="[
        { title: 'Card', icon: 'mdi-card-outline', to: '/card' },
        { title: 'Table', icon: 'mdi-table', to: '/table' },
      ]"
    />
  </v-list>
</template>

<script setup lang="ts">
  import NavSection from './NavSection.vue'
  // import NavSection from './NavSection.vue'
</script>

<style scoped>
  .nav-list {
  /* Customize spacing, background, etc. */
  padding: 0;
}
</style>
