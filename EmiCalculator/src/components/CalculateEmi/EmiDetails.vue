<template>
  <CardLayout>
    <template #title>
      <div class="text-center">
        <div class="flex justify-center mb-4">
          <div
            class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
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
        <h3 class="text-xl font-bold text-gray-800">EMI Calculation Results</h3>
      </div>
    </template>

    <template #content>
      <div class="text-center">
        <!-- Monthly EMI Display -->
        <div class="mb-8">
          <p class="text-lg font-semibold text-gray-600 mb-3 uppercase tracking-wide">
            Your Monthly EMI is
          </p>

          <!-- EMI Amount with fancy styling -->
          <div class="relative">
            <h2
              class="text-4xl md:text-5xl font-bold bg-black bg-clip-text text-transparent mb-4"
            >
              {{ emi ? `₹${formatedEmi}` : '₹0' }}
            </h2>
              <br />
            </div>

            <!-- Total payment info with enhanced styling -->
            <div class="bg-white bg-opacity-80 rounded-lg p-4 shadow-inner border border-gray-100">
              <p class="text-base text-gray-700 font-medium">
                <span class="text-gray-500">For</span>
                <span class="text-yellow-600 font-bold mx-1">{{ loanTenure }} months</span>
                <span class="text-gray-500">you will pay</span>
              </p>
              <p class="text-xl font-bold text-gray-800 mt-1">₹{{ formatedTotalAmount }}</p>
            </div>
          </div>

          <!-- Additional info cards -->
          <div class="grid grid-cols-2 gap-4 mt-6">
            <div class="bg-white bg-opacity-60 rounded-lg p-3 border border-gray-100">
              <p class="text-sm text-gray-500 font-medium">Interest Amount</p>
              <p class="text-lg font-bold text-red-600">₹{{ interestAmount }}</p>
            </div>
            <div class="bg-white bg-opacity-60 rounded-lg p-3 border border-gray-100">
              <p class="text-sm text-gray-500 font-medium">Principal Amount</p>
              <p class="text-lg font-bold text-green-600">₹{{ formatedPrincipalAmount }}</p>
            </div>
          </div>
        </div>
    </template>
  </CardLayout>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import CardLayout from '@/components/CardLayout.vue'
import { useNumberFormatter } from '../../composables/numberformat'

const { thousandSeparator: formatNumber } = useNumberFormatter()

const emiDataInput = defineProps({
  emi: {
    type: Number,
    default: 0,
    required: true,
  },
  loanTenure: {
    type: Number,
    default: 0,
    required: true,
  },
  principleAmount: {
    type: Number,
    default: 0,
    required: true,
  },
  totalAmount: {
    type: Number,
    default: 0,
    required: true,
  },
})

const interestAmount = computed(() => {
  if (emiDataInput.totalAmount && emiDataInput.principleAmount) {
    return formatNumber(emiDataInput.totalAmount - emiDataInput.principleAmount, false)
  }
  return 0
})
const formatedEmi = computed(() => {
  return formatNumber(emiDataInput.emi, false)
})

const formatedPrincipalAmount = computed(() => {
  return formatNumber(emiDataInput.principleAmount, false)
})

const formatedTotalAmount = computed(() => {
  return formatNumber(emiDataInput.totalAmount, false)
})
  </script>
