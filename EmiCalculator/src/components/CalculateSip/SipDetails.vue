<template>
  <div v-if="showSipDetails" class="bg-white shadow rounded-lg p-4 md:p-6">
    <h2 class="text-lg md:text-xl font-bold text-gray-800 mb-6">SIP Investment Details</h2>

    <div class="space-y-4">
      <!-- Total Investment -->
      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100">
        <div class="flex justify-between items-center">
          <span class="text-sm font-medium text-gray-600">Total Investment</span>
          <span class="text-lg font-bold text-blue-700">₹{{ formatNumber(totalInvestment) }}</span>
        </div>
      </div>

      <!-- Expected Returns -->
      <div
        class="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-100"
      >
        <div class="flex justify-between items-center">
          <span class="text-sm font-medium text-gray-600">Expected Returns</span>
          <span class="text-lg font-bold text-green-700">₹{{ formatNumber(expectedReturns) }}</span>
        </div>
      </div>

      <!-- Maturity Amount -->
      <div
        class="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-100"
      >
        <div class="flex justify-between items-center">
          <span class="text-sm font-medium text-gray-600">Maturity Amount</span>
          <span class="text-xl font-bold text-purple-700">₹{{ formatNumber(maturityAmount) }}</span>
        </div>
      </div>

      <!-- Investment Summary -->
      <div class="mt-6 bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <svg
            class="w-5 h-5 mr-2 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            ></path>
          </svg>
          Investment Summary
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Monthly Investment Card -->
          <div class="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-gray-500 text-xs uppercase tracking-wide font-medium">
                  Monthly Investment
                </p>
                <p class="text-gray-900 text-lg font-bold mt-1">
                  ₹{{ formatNumber(monthlyInvestment) }}
                </p>
              </div>
              <div class="p-2 bg-blue-100 rounded-lg">
                <svg
                  class="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <!-- Annual Return Card -->
          <div class="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-gray-500 text-xs uppercase tracking-wide font-medium">
                  Annual Return
                </p>
                <p class="text-gray-900 text-lg font-bold mt-1">{{ expectedReturn }}%</p>
              </div>
              <div class="p-2 bg-green-100 rounded-lg">
                <svg
                  class="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <!-- Investment Period Card -->
          <div class="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-gray-500 text-xs uppercase tracking-wide font-medium">
                  Investment Period
                </p>
                <p class="text-gray-900 text-lg font-bold mt-1">
                  {{ Math.floor(investmentPeriod / 12) }}Y {{ investmentPeriod % 12 }}M
                </p>
              </div>
              <div class="p-2 bg-purple-100 rounded-lg">
                <svg
                  class="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <!-- Wealth Multiplier Card -->
          <div class="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-gray-500 text-xs uppercase tracking-wide font-medium">
                  Wealth Multiplier
                </p>
                <p class="text-gray-900 text-lg font-bold mt-1">{{ wealthMultiplier }}x</p>
              </div>
              <div class="p-2 bg-yellow-100 rounded-lg">
                <svg
                  class="w-6 h-6 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useNumberFormatter } from '@/composables/numberformat'

const props = defineProps({
  showSipDetails: {
    type: Boolean,
    default: false,
  },
  monthlyInvestment: {
    type: Number,
    required: true,
  },
  expectedReturn: {
    type: Number,
    required: true,
  },
  investmentPeriod: {
    type: Number,
    required: true,
  },
})

const { thousandSeparator: formatNumber } = useNumberFormatter()

// SIP calculation formulas
const totalInvestment = computed(() => {
  return props.monthlyInvestment * props.investmentPeriod
})

const maturityAmount = computed(() => {
  const monthlyRate = props.expectedReturn / 100 / 12
  const months = props.investmentPeriod

  if (monthlyRate === 0) {
    return totalInvestment.value
  }

  // SIP Future Value formula: PMT × [((1 + r)^n - 1) / r] × (1 + r)
  const futureValue =
    props.monthlyInvestment *
    (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate))

  return Math.round(futureValue)
})

const expectedReturns = computed(() => {
  return maturityAmount.value - totalInvestment.value
})

const wealthMultiplier = computed(() => {
  return (maturityAmount.value / totalInvestment.value).toFixed(1)
})
</script>
