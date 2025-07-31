<template>
  <card-layout>
    <template #title>
      <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200">PPF Calculator</h2>
      <p class="text-slate-600 dark:text-slate-400 mt-2">
        Calculate your Public Provident Fund (PPF) growth and maturity amount with detailed
        projections.
      </p>
    </template>

    <template #content>
      <form @submit.prevent="calculatePpf" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Annual Investment -->
          <div>
            <label
              for="annualInvestment"
              class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
            >
              Annual Investment (₹)
            </label>
            <input
              type="number"
              id="annualInvestment"
              v-model="formData.annualInvestment"
              class="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
              placeholder="150000"
              min="500"
              max="150000"
              required
            />
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Minimum ₹500, Maximum ₹1,50,000 per year
            </p>
          </div>

          <!-- Current Age -->
          <div>
            <label
              for="currentAge"
              class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
            >
              Current Age (Years)
            </label>
            <input
              type="number"
              id="currentAge"
              v-model="formData.currentAge"
              class="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
              placeholder="25"
              min="18"
              max="70"
              required
            />
          </div>

          <!-- Investment Period -->
          <div>
            <label
              for="investmentPeriod"
              class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
            >
              Investment Period (Years)
            </label>
            <input
              type="number"
              id="investmentPeriod"
              v-model="formData.investmentPeriod"
              class="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
              placeholder="15"
              min="15"
              max="50"
              required
            />
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Minimum 15 years. Can be extended in blocks of 5 years
            </p>
          </div>

          <!-- Current PPF Balance -->
          <div>
            <label
              for="currentPpfBalance"
              class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
            >
              Current PPF Balance (₹)
            </label>
            <input
              type="number"
              id="currentPpfBalance"
              v-model="formData.currentPpfBalance"
              class="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
              placeholder="50000"
              min="0"
              required
            />
          </div>

          <!-- Expected Annual Return -->
          <div class="md:col-span-2">
            <label
              for="expectedAnnualReturn"
              class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
            >
              Expected Annual Return (%)
            </label>
            <input
              type="number"
              id="expectedAnnualReturn"
              v-model="formData.expectedAnnualReturn"
              class="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
              placeholder="7.1"
              min="0"
              max="15"
              step="0.1"
              required
            />
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Current PPF interest rate is 7.1% (FY 2023-24)
            </p>
          </div>
        </div>

        <!-- Calculate Button -->
        <div class="pt-4">
          <button
            type="submit"
            class="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-lg hover:shadow-xl"
          >
            Calculate PPF Growth
          </button>
        </div>
      </form>
    </template>
  </card-layout>
</template>

<script setup>
import { reactive } from 'vue'
import CardLayout from '../CardLayout.vue'

const emit = defineEmits(['update-ppf-data'])

const props = defineProps({
  annualInvestment: {
    type: Number,
    default: 150000,
  },
  currentAge: {
    type: Number,
    default: 25,
  },
  investmentPeriod: {
    type: Number,
    default: 15,
  },
  currentPpfBalance: {
    type: Number,
    default: 50000,
  },
  expectedAnnualReturn: {
    type: Number,
    default: 7.1,
  },
})

const formData = reactive({
  annualInvestment: props.annualInvestment,
  currentAge: props.currentAge,
  investmentPeriod: props.investmentPeriod,
  currentPpfBalance: props.currentPpfBalance,
  expectedAnnualReturn: props.expectedAnnualReturn,
})

const calculatePpf = () => {
  if (formData.investmentPeriod < 15) {
    alert('PPF investment period should be minimum 15 years')
    return
  }

  if (formData.annualInvestment > 150000) {
    alert('Maximum annual PPF investment is ₹1,50,000')
    return
  }

  if (formData.annualInvestment < 500) {
    alert('Minimum annual PPF investment is ₹500')
    return
  }

  emit('update-ppf-data', formData)
}
</script>
