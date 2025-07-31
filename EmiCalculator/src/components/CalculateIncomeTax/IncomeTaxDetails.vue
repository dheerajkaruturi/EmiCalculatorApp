<template>
  <div v-if="showTaxDetails" class="bg-white shadow rounded-lg p-4 md:p-6">
    <!-- Main Results Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <!-- Total Tax Liability -->
      <div class="text-center p-4 bg-red-50 rounded-lg border border-red-200">
        <h3 class="text-sm font-medium text-red-600 mb-2">Total Tax Liability</h3>
        <p class="text-2xl font-bold text-red-800">₹{{ formatNumber(totalTaxLiability) }}</p>
      </div>

      <!-- Take Home Income -->
      <div class="text-center p-4 bg-green-50 rounded-lg border border-green-200">
        <h3 class="text-sm font-medium text-green-600 mb-2">Take Home Income</h3>
        <p class="text-2xl font-bold text-green-800">₹{{ formatNumber(takeHomeIncome) }}</p>
      </div>
    </div>

    <!-- Tax Breakdown -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div class="text-center p-3 bg-gray-50 rounded-lg">
        <p class="text-sm text-gray-500">Income Tax</p>
        <p class="text-lg font-semibold text-gray-800">₹{{ formatNumber(incomeTax) }}</p>
      </div>
      <div class="text-center p-3 bg-gray-50 rounded-lg">
        <p class="text-sm text-gray-500">Health & Education Cess</p>
        <p class="text-lg font-semibold text-gray-800">₹{{ formatNumber(healthEducationCess) }}</p>
      </div>
      <div class="text-center p-3 bg-gray-50 rounded-lg">
        <p class="text-sm text-gray-500">Effective Tax Rate</p>
        <p class="text-lg font-semibold text-gray-800">{{ effectiveTaxRate.toFixed(2) }}%</p>
      </div>
    </div>

    <!-- Monthly Breakdown -->
    <div class="grid grid-cols-2 gap-4 mb-6">
      <div class="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
        <p class="text-sm text-blue-600">Monthly Gross Income</p>
        <p class="text-lg font-semibold text-blue-800">₹{{ formatNumber(monthlyGrossIncome) }}</p>
      </div>
      <div class="text-center p-3 bg-purple-50 rounded-lg border border-purple-200">
        <p class="text-sm text-purple-600">Monthly Tax Deduction</p>
        <p class="text-lg font-semibold text-purple-800">
          ₹{{ formatNumber(monthlyTaxDeduction) }}
        </p>
      </div>
    </div>

    <!-- Tax Summary -->
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
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          ></path>
        </svg>
        Tax Calculation Summary
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Gross Income Card -->
        <div class="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-500 text-xs uppercase tracking-wide font-medium">
                Annual Gross Income
              </p>
              <p class="text-gray-900 text-lg font-bold mt-1">₹{{ formatNumber(annualIncome) }}</p>
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

        <!-- Tax Regime Card -->
        <div class="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-500 text-xs uppercase tracking-wide font-medium">Tax Regime</p>
              <p class="text-gray-900 text-lg font-bold mt-1">
                {{ taxRegime === 'old' ? 'Old Regime' : 'New Regime' }}
              </p>
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <!-- Taxable Income Card -->
        <div class="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-500 text-xs uppercase tracking-wide font-medium">
                Taxable Income
              </p>
              <p class="text-gray-900 text-lg font-bold mt-1">₹{{ formatNumber(taxableIncome) }}</p>
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
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <!-- Age Category Card -->
        <div class="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-500 text-xs uppercase tracking-wide font-medium">Age Category</p>
              <p class="text-gray-900 text-lg font-bold mt-1">
                {{ getAgeCategoryLabel(ageCategory) }}
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Deductions Summary (Old Regime Only) -->
      <div v-if="taxRegime === 'old'" class="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h4 class="font-semibold text-blue-800 mb-3">
          Total Deductions: ₹{{ formatNumber(totalDeductions) }}
        </h4>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
          <div class="text-blue-700">
            <span class="font-medium">Section 80C:</span> ₹{{ formatNumber(deductions.section80C) }}
          </div>
          <div class="text-blue-700">
            <span class="font-medium">Section 80D:</span> ₹{{ formatNumber(deductions.section80D) }}
          </div>
          <div class="text-blue-700">
            <span class="font-medium">Home Loan:</span> ₹{{ formatNumber(deductions.section24B) }}
          </div>
          <div class="text-blue-700">
            <span class="font-medium">Standard:</span> ₹{{
              formatNumber(deductions.standardDeduction)
            }}
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
  showTaxDetails: {
    type: Boolean,
    default: false,
  },
  annualIncome: {
    type: Number,
    required: true,
  },
  taxRegime: {
    type: String,
    required: true,
  },
  ageCategory: {
    type: String,
    required: true,
  },
  deductions: {
    type: Object,
    required: true,
  },
})

const { thousandSeparator: formatNumber } = useNumberFormatter()

// Tax calculation logic
const basicExemptionLimit = computed(() => {
  if (props.taxRegime === 'new') {
    return 300000 // New regime basic exemption
  }

  // Old regime exemption based on age
  switch (props.ageCategory) {
    case 'below60':
      return 250000
    case '60to80':
      return 300000
    case 'above80':
      return 500000
    default:
      return 250000
  }
})

const totalDeductions = computed(() => {
  if (props.taxRegime === 'new') {
    return 0 // No deductions in new regime except standard deduction
  }

  return Object.values(props.deductions).reduce((sum, deduction) => sum + deduction, 0)
})

const taxableIncome = computed(() => {
  let income = props.annualIncome

  if (props.taxRegime === 'old') {
    income -= totalDeductions.value
  } else {
    income -= 75000 // Increased standard deduction in new regime for FY 2025-26
  }

  return Math.max(0, income - basicExemptionLimit.value)
})

const incomeTax = computed(() => {
  const income = taxableIncome.value
  let tax = 0

  if (props.taxRegime === 'old') {
    // Old regime tax slabs
    if (income > 1000000) {
      tax += (income - 1000000) * 0.3
      tax += 250000 * 0.2
      tax += 250000 * 0.05
    } else if (income > 500000) {
      tax += (income - 500000) * 0.2
      tax += 250000 * 0.05
    } else if (income > 250000) {
      tax += (income - 250000) * 0.05
    }
  } else {
    // New regime tax slabs (FY 2025-26)
    if (income > 1500000) {
      tax += (income - 1500000) * 0.3
      tax += 500000 * 0.25
      tax += 250000 * 0.2
      tax += 300000 * 0.15
      tax += 300000 * 0.1
      tax += 300000 * 0.05
    } else if (income > 1000000) {
      tax += (income - 1000000) * 0.25
      tax += 250000 * 0.2
      tax += 300000 * 0.15
      tax += 300000 * 0.1
      tax += 300000 * 0.05
    } else if (income > 750000) {
      tax += (income - 750000) * 0.2
      tax += 300000 * 0.15
      tax += 300000 * 0.1
      tax += 300000 * 0.05
    } else if (income > 450000) {
      tax += (income - 450000) * 0.15
      tax += 300000 * 0.1
      tax += 300000 * 0.05
    } else if (income > 150000) {
      tax += (income - 150000) * 0.1
      tax += 300000 * 0.05
    } else if (income > 0) {
      tax += income * 0.05
    }
  }

  return Math.round(tax)
})

const healthEducationCess = computed(() => {
  return Math.round(incomeTax.value * 0.04) // 4% cess on income tax
})

const totalTaxLiability = computed(() => {
  return incomeTax.value + healthEducationCess.value
})

const takeHomeIncome = computed(() => {
  return props.annualIncome - totalTaxLiability.value
})

const effectiveTaxRate = computed(() => {
  return props.annualIncome > 0 ? (totalTaxLiability.value / props.annualIncome) * 100 : 0
})

const monthlyGrossIncome = computed(() => {
  return Math.round(props.annualIncome / 12)
})

const monthlyTaxDeduction = computed(() => {
  return Math.round(totalTaxLiability.value / 12)
})

const getAgeCategoryLabel = (category) => {
  switch (category) {
    case 'below60':
      return 'Below 60'
    case '60to80':
      return 'Senior Citizen'
    case 'above80':
      return 'Super Senior'
    default:
      return 'Below 60'
  }
}
</script>
