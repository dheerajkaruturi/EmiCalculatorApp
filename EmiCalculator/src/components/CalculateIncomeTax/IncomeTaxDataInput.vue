<template>
  <div class="bg-white shadow rounded-lg p-4 md:p-6">
    <h2 class="text-lg md:text-xl font-bold text-gray-800 mb-6">Income Tax Calculator</h2>

    <form @submit.prevent="calculateIncomeTax" class="space-y-6">
      <!-- Annual Income -->
      <div>
        <label for="annualIncome" class="block text-sm font-medium text-gray-700 mb-2">
          Annual Income
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span class="text-gray-500 sm:text-sm">₹</span>
          </div>
          <input
            type="number"
            id="annualIncome"
            v-model.number="formData.annualIncome"
            class="block w-full pl-7 pr-12 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="12,00,000"
            min="0"
            max="100000000"
            step="10000"
            required
          />
        </div>
        <p class="mt-1 text-xs text-gray-500">Enter your total annual income from all sources</p>
      </div>

      <!-- Tax Regime Selection -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Tax Regime</label>
        <div class="grid grid-cols-2 gap-3">
          <label
            class="relative flex cursor-pointer rounded-lg border p-4 focus:outline-none"
            :class="formData.taxRegime === 'old' ? 'border-blue-600 bg-blue-50' : 'border-gray-300'"
          >
            <input type="radio" v-model="formData.taxRegime" value="old" class="sr-only" />
            <div class="flex flex-1">
              <div class="flex flex-col">
                <span class="block text-sm font-medium text-gray-900">Old Regime</span>
                <span class="mt-1 flex items-center text-sm text-gray-500">With deductions</span>
              </div>
            </div>
            <svg
              v-if="formData.taxRegime === 'old'"
              class="h-5 w-5 text-blue-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
          </label>

          <label
            class="relative flex cursor-pointer rounded-lg border p-4 focus:outline-none"
            :class="formData.taxRegime === 'new' ? 'border-blue-600 bg-blue-50' : 'border-gray-300'"
          >
            <input type="radio" v-model="formData.taxRegime" value="new" class="sr-only" />
            <div class="flex flex-1">
              <div class="flex flex-col">
                <span class="block text-sm font-medium text-gray-900">New Regime</span>
                <span class="mt-1 flex items-center text-sm text-gray-500">Lower rates</span>
              </div>
            </div>
            <svg
              v-if="formData.taxRegime === 'new'"
              class="h-5 w-5 text-blue-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
          </label>
        </div>
      </div>

      <!-- Age Category -->
      <div>
        <label for="ageCategory" class="block text-sm font-medium text-gray-700 mb-2">
          Age Category
        </label>
        <select
          id="ageCategory"
          v-model="formData.ageCategory"
          class="block w-full pl-4 pr-10 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
        >
          <option value="below60">Below 60 years</option>
          <option value="60to80">60 to 80 years (Senior Citizen)</option>
          <option value="above80">Above 80 years (Super Senior Citizen)</option>
        </select>
      </div>

      <!-- Deductions (Only for Old Regime) -->
      <div v-if="formData.taxRegime === 'old'" class="space-y-4">
        <h3 class="text-md font-semibold text-gray-800">Deductions</h3>

        <!-- Section 80C -->
        <div>
          <label for="section80C" class="block text-sm font-medium text-gray-700 mb-2">
            Section 80C (PPF, ELSS, Life Insurance, etc.)
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span class="text-gray-500 sm:text-sm">₹</span>
            </div>
            <input
              type="number"
              id="section80C"
              v-model.number="formData.deductions.section80C"
              class="block w-full pl-7 pr-12 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="1,50,000"
              min="0"
              max="150000"
              step="1000"
            />
          </div>
          <p class="mt-1 text-xs text-gray-500">Maximum limit: ₹1,50,000</p>
        </div>

        <!-- Section 80D -->
        <div>
          <label for="section80D" class="block text-sm font-medium text-gray-700 mb-2">
            Section 80D (Health Insurance Premium)
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span class="text-gray-500 sm:text-sm">₹</span>
            </div>
            <input
              type="number"
              id="section80D"
              v-model.number="formData.deductions.section80D"
              class="block w-full pl-7 pr-12 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="25,000"
              min="0"
              max="100000"
              step="1000"
            />
          </div>
          <p class="mt-1 text-xs text-gray-500">Varies based on age and family coverage</p>
        </div>

        <!-- Home Loan Interest (Section 24B) -->
        <div>
          <label for="section24B" class="block text-sm font-medium text-gray-700 mb-2">
            Home Loan Interest (Section 24B)
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span class="text-gray-500 sm:text-sm">₹</span>
            </div>
            <input
              type="number"
              id="section24B"
              v-model.number="formData.deductions.section24B"
              class="block w-full pl-7 pr-12 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="2,00,000"
              min="0"
              max="200000"
              step="5000"
            />
          </div>
          <p class="mt-1 text-xs text-gray-500">Maximum limit: ₹2,00,000</p>
        </div>
      </div>

      <!-- Calculate Button -->
      <button
        type="submit"
        class="w-full bg-black text-white py-3 px-4 rounded-md shadow-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200 font-medium"
      >
        Calculate Income Tax
      </button>
    </form>
  </div>
</template>

<script setup>
import { reactive, defineEmits } from 'vue'

const props = defineProps({
  annualIncome: {
    type: Number,
    default: 1200000,
  },
  taxRegime: {
    type: String,
    default: 'old',
  },
  ageCategory: {
    type: String,
    default: 'below60',
  },
  deductions: {
    type: Object,
    default: () => ({
      section80C: 150000,
      section80D: 25000,
      section80G: 0,
      section24B: 200000,
      professionalTax: 2500,
      standardDeduction: 50000,
    }),
  },
})

const emit = defineEmits(['update-income-tax-data'])

const formData = reactive({
  annualIncome: props.annualIncome,
  taxRegime: props.taxRegime,
  ageCategory: props.ageCategory,
  deductions: { ...props.deductions },
})

const calculateIncomeTax = () => {
  emit('update-income-tax-data', {
    annualIncome: formData.annualIncome,
    taxRegime: formData.taxRegime,
    ageCategory: formData.ageCategory,
    deductions: formData.deductions,
  })
}
</script>
