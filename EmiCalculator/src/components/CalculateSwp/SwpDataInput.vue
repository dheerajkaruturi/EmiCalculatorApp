<template>
  <div class="bg-white shadow rounded-lg p-4 md:p-6">
    <h2 class="text-lg md:text-xl font-bold text-gray-800 mb-6">SWP Calculator</h2>

    <form @submit.prevent="calculateSwp" class="space-y-6">
      <!-- Initial Investment Amount -->
      <div>
        <label for="initialInvestment" class="block text-sm font-medium text-gray-700 mb-2">
          Initial Investment Amount
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span class="text-gray-500 sm:text-sm">₹</span>
          </div>
          <input
            type="number"
            id="initialInvestment"
            v-model.number="formData.initialInvestment"
            class="block w-full pl-7 pr-12 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="10,00,000"
            min="100000"
            max="100000000"
            step="10000"
            required
          />
        </div>
        <p class="mt-1 text-xs text-gray-500">Minimum: ₹1,00,000, Maximum: ₹10,00,00,000</p>
      </div>

      <!-- Monthly Withdrawal Amount -->
      <div>
        <label for="monthlyWithdrawal" class="block text-sm font-medium text-gray-700 mb-2">
          Monthly Withdrawal Amount
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span class="text-gray-500 sm:text-sm">₹</span>
          </div>
          <input
            type="number"
            id="monthlyWithdrawal"
            v-model.number="formData.monthlyWithdrawal"
            class="block w-full pl-7 pr-12 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="10,000"
            min="1000"
            max="500000"
            step="1000"
            required
          />
        </div>
        <p class="mt-1 text-xs text-gray-500">Minimum: ₹1,000, Maximum: ₹5,00,000</p>
      </div>

      <!-- Expected Annual Return -->
      <div>
        <label for="expectedReturn" class="block text-sm font-medium text-gray-700 mb-2">
          Expected Annual Return
        </label>
        <div class="relative">
          <input
            type="number"
            id="expectedReturn"
            v-model.number="formData.expectedReturn"
            class="block w-full pr-12 pl-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="12"
            min="1"
            max="30"
            step="0.1"
            required
          />
          <div class="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
            <span class="text-gray-500 sm:text-sm">%</span>
          </div>
        </div>
        <p class="mt-1 text-xs text-gray-500">Range: 1% to 30% per annum</p>
      </div>

      <!-- Withdrawal Period -->
      <div>
        <label for="withdrawalPeriod" class="block text-sm font-medium text-gray-700 mb-2">
          Withdrawal Period
        </label>
        <div class="relative">
          <input
            type="number"
            id="withdrawalPeriod"
            v-model.number="formData.withdrawalPeriod"
            class="block w-full pr-20 pl-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="120"
            min="12"
            max="600"
            step="1"
            required
          />
          <div class="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
            <span class="text-gray-500 sm:text-sm">Months</span>
          </div>
        </div>
        <p class="mt-1 text-xs text-gray-500">
          {{ Math.floor(formData.withdrawalPeriod / 12) }} years
          {{ formData.withdrawalPeriod % 12 }} months
        </p>
      </div>

      <!-- Calculate Button -->
      <button
        type="submit"
        class="w-full bg-black text-white py-3 px-4 rounded-md shadow-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200 font-medium"
      >
        Calculate SWP
      </button>
    </form>
  </div>
</template>

<script setup>
import { reactive, defineEmits } from 'vue'

const props = defineProps({
  initialInvestment: {
    type: Number,
    default: 1000000,
  },
  monthlyWithdrawal: {
    type: Number,
    default: 10000,
  },
  expectedReturn: {
    type: Number,
    default: 12,
  },
  withdrawalPeriod: {
    type: Number,
    default: 120,
  },
})

const emit = defineEmits(['update-swp-data'])

const formData = reactive({
  initialInvestment: props.initialInvestment,
  monthlyWithdrawal: props.monthlyWithdrawal,
  expectedReturn: props.expectedReturn,
  withdrawalPeriod: props.withdrawalPeriod,
})

const calculateSwp = () => {
  emit('update-swp-data', {
    initialInvestment: formData.initialInvestment,
    monthlyWithdrawal: formData.monthlyWithdrawal,
    expectedReturn: formData.expectedReturn,
    withdrawalPeriod: formData.withdrawalPeriod,
  })
}
</script>
