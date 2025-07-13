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
        <h1 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">EMI Calculator</h1>

        <CardLayout>
          <template #card-content>
            <div class="space-y-6">
              <form @submit.prevent="calculateEmi">
                <div class="grid gap-6">
                  <div>
                    <label for="loan-amount" class="block text-sm font-medium text-gray-700"
                      >Loan Amount</label
                    >
                    <input
                      type="number"
                      id="loan-amount"
                      class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Enter loan amount"
                    />
                  </div>
                  <div>
                    <label for="interest-rate" class="block text-sm font-medium text-gray-700"
                      >Interest Rate (%)</label
                    >
                    <input
                      type="number"
                      id="interest-rate"
                      class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Enter interest rate"
                    />
                  </div>
                  <div>
                    <label for="loan-tenure" class="block text-sm font-medium text-gray-700"
                      >Loan Tenure (Months)</label
                    >
                    <input
                      type="number"
                      id="loan-tenure"
                      class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Enter loan tenure"
                    />
                  </div>
                  <div>
                    <label for="emi" class="block text-sm font-medium text-gray-700"
                      >EMI Amount</label
                    >
                    <input
                      type="text"
                      id="emi"
                      class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Calculated EMI will appear here"
                      readonly
                    />
                  </div>
                </div>
                <div class="mt-6">
                  <button
                    type="submit"
                    class="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    Calculate EMI
                  </button>
                </div>
              </form>
            </div>
          </template>
        </CardLayout>
      </div>
    </div>
  </div>
</template>

<script setup>
import CardLayout from '@/components/CardLayout.vue'
import { defineEmits } from 'vue'

const emit = defineEmits(['toggle-sidebar'])

const toggleMobileMenu = () => {
  // Emit event to parent or use a global state management
  emit('toggle-sidebar')
}

const calculateEmi = () => {
  // Logic to calculate EMI based on input values
  // This is a placeholder function; actual implementation will depend on your requirements
  console.log('Calculating EMI...')
}
</script>
