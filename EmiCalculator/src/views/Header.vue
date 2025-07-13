<template>
  <header
    class="bg-white border-b border-gray-200 shadow-sm"
    :class="[
      // Mobile: Full width with left margin for hamburger button
      'ml-0 md:ml-80',
      // Height matches sidebar header (p-6 = 24px top + 24px bottom + content)
      'h-[88px] flex items-center justify-between px-6'
    ]"
  >
    <!-- Left side - Title/Breadcrumb -->
    <div class="flex items-center">
      <h1 class="text-2xl font-bold text-gray-900">
        {{ pageTitle }}
      </h1>
      <div v-if="breadcrumb" class="ml-4 text-sm text-gray-500">
        <span class="mx-2">/</span>
        {{ breadcrumb }}
      </div>
    </div>

    <!-- Right side - Theme toggle -->
    <div class="flex items-center space-x-4">
      <button
        @click="toggleTheme"
        class="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        :title="isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
      >
        <!-- Sun Icon (Light Mode) -->
        <svg
          v-if="isDarkMode"
          class="w-5 h-5 text-yellow-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>

        <!-- Moon Icon (Dark Mode) -->
        <svg
          v-else
          class="w-5 h-5 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </button>
    </div>
  </header>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'AppHeader',
  props: {
    pageTitle: {
      type: String,
      default: 'EMI Calculator'
    },
    breadcrumb: {
      type: String,
      default: null
    }
  },
  emits: ['theme-changed'],
  setup(props, { emit }) {
    const isDarkMode = ref(false)

    const toggleTheme = () => {
      isDarkMode.value = !isDarkMode.value
      emit('theme-changed', isDarkMode.value)

      // You can add logic here to apply theme to document
      if (isDarkMode.value) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }

    return {
      isDarkMode,
      toggleTheme
    }
  }
}
</script>

<style scoped>
/* Additional styles if needed */
</style>
