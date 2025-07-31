<template>
  <div class="bg-white shadow rounded-lg p-4 md:p-6">
    <h2 class="text-lg md:text-xl font-bold text-gray-800 mb-6">SIP Calculator</h2>

    <form @submit.prevent="calculateSip" class="space-y-6">
      <!-- Monthly Investment Amount -->
      <div>
        <label for="monthlyInvestment" class="block text-sm font-medium text-gray-700 mb-2">
          Monthly Investment Amount
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span class="text-gray-500 sm:text-sm">₹</span>
          </div>
          <input
            type="number"
            id="monthlyInvestment"
            v-model.number="formData.monthlyInvestment"
            class="block w-full pl-7 pr-12 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="5,000"
            min="500"
            max="1000000"
            step="500"
            required
          />
        </div>
        <p class="mt-1 text-xs text-gray-500">Minimum: ₹500, Maximum: ₹10,00,000</p>
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

      <!-- Investment Period -->
      <div>
        <label for="investmentPeriod" class="block text-sm font-medium text-gray-700 mb-2">
          Investment Period
        </label>
        <div class="relative">
          <input
            type="number"
            id="investmentPeriod"
            v-model.number="formData.investmentPeriod"
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
          {{ Math.floor(formData.investmentPeriod / 12) }} years
          {{ formData.investmentPeriod % 12 }} months
        </p>
      </div>

      <!-- Calculate Button -->
      <button
        type="submit"
        class="w-full bg-black text-white py-3 px-4 rounded-md shadow-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200 font-medium"
      >
        Calculate SIP
      </button>
    </form>
  </div>
</template>

<script setup>
import { reactive, defineEmits } from 'vue'

const props = defineProps({
  monthlyInvestment: {
    type: Number,
    default: 5000,
  },
  expectedReturn: {
    type: Number,
    default: 12,
  },
  investmentPeriod: {
    type: Number,
    default: 120,
  },
})

const emit = defineEmits(['update-sip-data'])

const formData = reactive({
  monthlyInvestment: props.monthlyInvestment,
  expectedReturn: props.expectedReturn,
  investmentPeriod: props.investmentPeriod,
})

const calculateSip = () => {
  emit('update-sip-data', {
    monthlyInvestment: formData.monthlyInvestment,
    expectedReturn: formData.expectedReturn,
    investmentPeriod: formData.investmentPeriod,
  })
}
</script>
