<template>
  <div class="flex flex-col lg:flex-row h-screen overflow-hidden bg-gray-100">
    <!-- Side Navigation -->
    <side-navigation ref="sideNavigation" class="lg:w-80 lg:flex-shrink-0" />

    <!-- Main Content Area -->
    <div class="flex-1 overflow-auto">
      <main-content @toggle-sidebar="toggleMobileSidebar" />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import SideNavigation from './views/SideNavigation.vue'
import MainContent from './views/MainContent.vue'

const sideNavigation = ref(null)

const toggleMobileSidebar = () => {
  if (sideNavigation.value) {
    sideNavigation.value.toggleSidebar()
  }
}
</script>
