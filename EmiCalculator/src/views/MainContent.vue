<template>
  <div class="flex-1 overflow-auto bg-gray-50">
    <!-- Mobile Header with Menu Button -->
    <div
      class="lg:hidden bg-gradient-to-r from-blue-50 to-indigo-50 shadow-sm border-b border-blue-100 p-4"
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <button
            @click="toggleMobileMenu"
            class="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-200 mr-4"
            aria-label="Toggle navigation"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <div class="flex items-center">
            <div
              class="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-md mr-3"
            >
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <div>
              <h2 class="text-lg font-bold text-gray-800">CalcuFin</h2>
              <p class="text-xs text-gray-600">EMI Calculator</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content Area -->
    <div class="p-4 md:p-6 lg:p-6">
      <div class="max-w-full mx-auto">
        <h1 class="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
          EMI Calculator
        </h1>
        <p class="text-gray-700 mb-6">
          Calculate your Equated Monthly Installment (EMI) for various loans with ease.
        </p>
        <calculate-emi />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue'
import CalculateEmi from '@/components/CalculateEmi/CalculateEmi.vue'

const emit = defineEmits(['toggle-sidebar'])

const toggleMobileMenu = () => {
  // Emit event to parent or use a global state management
  emit('toggle-sidebar')
}
</script>
