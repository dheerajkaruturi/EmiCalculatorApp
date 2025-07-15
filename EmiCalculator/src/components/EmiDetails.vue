<template>
  <CardLayout>
    <template #card-content>
      <div class="relative">
        <!-- Background gradient overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg opacity-50"
        ></div>

        <!-- Content -->
        <div class="relative z-10 text-center p-6">
          <!-- Header with icon -->
          <div class="flex justify-center mb-6">
            <div
              class="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
            >
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          <!-- Monthly EMI Display -->
          <div class="mb-8">
            <p class="text-lg font-semibold text-gray-600 mb-3 uppercase tracking-wide">
              Your Monthly EMI is
            </p>

            <!-- EMI Amount with fancy styling -->
            <div class="relative">
              <h2
                class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4"
              >
                ₹23,000
              </h2>
              <br />
            </div>

            <!-- Total payment info with enhanced styling -->
            <div class="bg-white bg-opacity-80 rounded-lg p-4 shadow-inner border border-gray-100">
              <p class="text-base text-gray-700 font-medium">
                <span class="text-gray-500">For</span>
                <span class="text-blue-600 font-bold mx-1">60 months</span>
                <span class="text-gray-500">you will pay</span>
              </p>
              <p class="text-xl font-bold text-gray-800 mt-1">₹13,80,000</p>
            </div>
          </div>

          <!-- Additional info cards -->
          <div class="grid grid-cols-2 gap-4 mt-6">
            <div class="bg-white bg-opacity-60 rounded-lg p-3 border border-gray-100">
              <p class="text-sm text-gray-500 font-medium">Interest Amount</p>
              <p class="text-lg font-bold text-red-600">₹3,80,000</p>
            </div>
            <div class="bg-white bg-opacity-60 rounded-lg p-3 border border-gray-100">
              <p class="text-sm text-gray-500 font-medium">Principal Amount</p>
              <p class="text-lg font-bold text-green-600">₹10,00,000</p>
            </div>
          </div>
        </div>
      </div>
    </template>
  </CardLayout>
</template>

<script setup>
import CardLayout from '../components/CardLayout.vue'
</script>
