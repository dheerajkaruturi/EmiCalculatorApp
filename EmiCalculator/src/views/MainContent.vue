<template>
  <div class="flex-1 overflow-auto bg-gray-50">
    <!-- Mobile Header with Menu Button -->
    <div class="lg:hidden bg-white shadow-sm border-b border-gray-200 p-4">
      <button
        @click="toggleMobileMenu"
        class="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
        aria-label="Toggle navigation"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </div>

    <!-- Main Content Area -->
    <div class="p-4 md:p-6 lg:p-8">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Financial Calculator Dashboard
        </h1>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Sample Cards -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-2">EMI Calculator</h3>
            <p class="text-gray-600">Calculate your loan EMI with ease</p>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-2">SIP Calculator</h3>
            <p class="text-gray-600">Plan your systematic investments</p>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-2">Tax Calculator</h3>
            <p class="text-gray-600">Calculate your income tax liability</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['toggle-sidebar'])

const toggleMobileMenu = () => {
  // Emit event to parent or use a global state management
  emit('toggle-sidebar')
}
</script>
