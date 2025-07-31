<template>
  <div v-if="showSwpDetails" class="bg-white shadow rounded-lg p-4 md:p-6">
    <!-- Main Results Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <!-- Total Withdrawal -->
      <div class="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h3 class="text-sm font-medium text-blue-600 mb-2">Total Withdrawal</h3>
        <p class="text-2xl font-bold text-blue-800">₹{{ formatNumber(totalWithdrawal) }}</p>
      </div>

      <!-- Remaining Amount -->
      <div class="text-center p-4 bg-green-50 rounded-lg border border-green-200">
        <h3 class="text-sm font-medium text-green-600 mb-2">Remaining Amount</h3>
        <p class="text-2xl font-bold text-green-800">₹{{ formatNumber(remainingAmount) }}</p>
      </div>

      <!-- Total Returns -->
      <div class="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
        <h3 class="text-sm font-medium text-purple-600 mb-2">Total Returns</h3>
        <p class="text-2xl font-bold text-purple-800">₹{{ formatNumber(totalReturns) }}</p>
      </div>
    </div>

    <!-- Key Metrics -->
    <div class="grid grid-cols-2 gap-4 mb-6">
      <div class="text-center p-3 bg-gray-50 rounded-lg">
        <p class="text-sm text-gray-500">Corpus Sustainability</p>
        <p class="text-lg font-semibold text-gray-800">
          {{
            corpusSustainability > withdrawalPeriod ? withdrawalPeriod + '+' : corpusSustainability
          }}
          months
        </p>
      </div>
      <div class="text-center p-3 bg-gray-50 rounded-lg">
        <p class="text-sm text-gray-500">Monthly Yield Required</p>
        <p class="text-lg font-semibold text-gray-800">{{ monthlyYieldRequired.toFixed(2) }}%</p>
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
        Withdrawal Summary
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Initial Investment Card -->
        <div class="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-500 text-xs uppercase tracking-wide font-medium">
                Initial Investment
              </p>
              <p class="text-gray-900 text-lg font-bold mt-1">
                ₹{{ formatNumber(initialInvestment) }}
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

        <!-- Monthly Withdrawal Card -->
        <div class="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-500 text-xs uppercase tracking-wide font-medium">
                Monthly Withdrawal
              </p>
              <p class="text-gray-900 text-lg font-bold mt-1">
                ₹{{ formatNumber(monthlyWithdrawal) }}
              </p>
            </div>
            <div class="p-2 bg-red-100 rounded-lg">
              <svg
                class="w-6 h-6 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <!-- Annual Return Card -->
        <div class="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-500 text-xs uppercase tracking-wide font-medium">Annual Return</p>
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

        <!-- Withdrawal Period Card -->
        <div class="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-500 text-xs uppercase tracking-wide font-medium">
                Withdrawal Period
              </p>
              <p class="text-gray-900 text-lg font-bold mt-1">
                {{ Math.floor(withdrawalPeriod / 12) }}Y {{ withdrawalPeriod % 12 }}M
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
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useNumberFormatter } from '../../composables/numberformat'

const props = defineProps({
  showSwpDetails: {
    type: Boolean,
    default: false,
  },
  initialInvestment: {
    type: Number,
    required: true,
  },
  monthlyWithdrawal: {
    type: Number,
    required: true,
  },
  expectedReturn: {
    type: Number,
    required: true,
  },
  withdrawalPeriod: {
    type: Number,
    required: true,
  },
})

const { thousandSeparator: formatNumber } = useNumberFormatter()

// SWP calculation logic
const monthlyReturn = computed(() => props.expectedReturn / 100 / 12)

const swpCalculation = computed(() => {
  let balance = props.initialInvestment
  let totalWithdrawn = 0
  let month = 0

  for (month = 1; month <= props.withdrawalPeriod; month++) {
    // Add monthly returns
    balance = balance * (1 + monthlyReturn.value)

    // Check if withdrawal is possible
    if (balance < props.monthlyWithdrawal) {
      break
    }

    // Withdraw amount
    balance -= props.monthlyWithdrawal
    totalWithdrawn += props.monthlyWithdrawal
  }

  return {
    totalWithdrawn,
    remainingBalance: Math.max(0, balance),
    monthsSustained: month - 1,
  }
})

const totalWithdrawal = computed(() => swpCalculation.value.totalWithdrawn)
const remainingAmount = computed(() => swpCalculation.value.remainingBalance)
const corpusSustainability = computed(() => swpCalculation.value.monthsSustained)

const totalReturns = computed(() => {
  return Math.max(0, totalWithdrawal.value + remainingAmount.value - props.initialInvestment)
})

const monthlyYieldRequired = computed(() => {
  return (props.monthlyWithdrawal / props.initialInvestment) * 100
})
</script>
