<template>
  <div class="flex h-screen overflow-hidden">
    <!-- Side Navigation - Hidden on md and below, visible on lg and above -->
    <div class="hidden lg:flex lg:flex-shrink-0">
      <side-navigation />
    </div>

    <!-- Main Content - Full width on md and below, remaining space on lg and above -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <main-content @toggle-sidebar="toggleMobileSidebar" />
    </div>

    <!-- Mobile Side Navigation - Overlay on md and below -->
    <div class="lg:hidden">
      <side-navigation ref="mobileSidebar" />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import SideNavigation from './views/SideNavigation.vue'
import MainContent from './views/MainContent.vue'

const mobileSidebar = ref(null)

const toggleMobileSidebar = () => {
  if (mobileSidebar.value) {
    mobileSidebar.value.toggleSidebar()
  }
}
</script>
