<template>
  <card-layout>
    <template #title>
      <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200">EPF Calculator</h2>
      <p class="text-slate-600 dark:text-slate-400 mt-2">
        Calculate your Employee Provident Fund (EPF) growth and maturity amount with detailed
        projections.
      </p>
    </template>

    <template #content>
      <form @submit.prevent="calculateEpf" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Monthly Salary -->
          <div>
            <label
              for="monthlySalary"
              class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
            >
              Monthly Basic Salary (₹)
            </label>
            <input
              type="number"
              id="monthlySalary"
              v-model="formData.monthlySalary"
              class="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
              placeholder="50000"
              min="1"
              required
            />
          </div>

          <!-- Employee Contribution Rate -->
          <div>
            <label
              for="employeeContribution"
              class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
            >
              Employee Contribution (%)
            </label>
            <input
              type="number"
              id="employeeContribution"
              v-model="formData.employeeContribution"
              class="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
              placeholder="12"
              min="0"
              max="12"
              step="0.1"
              required
            />
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Maximum 12% of basic salary
            </p>
          </div>

          <!-- Employer Contribution Rate -->
          <div>
            <label
              for="employerContribution"
              class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
            >
              Employer Contribution (%)
            </label>
            <input
              type="number"
              id="employerContribution"
              v-model="formData.employerContribution"
              class="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
              placeholder="12"
              min="0"
              max="12"
              step="0.1"
              required
            />
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Typically 12% of basic salary
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
              max="58"
              required
            />
          </div>

          <!-- Retirement Age -->
          <div>
            <label
              for="retirementAge"
              class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
            >
              Retirement Age (Years)
            </label>
            <input
              type="number"
              id="retirementAge"
              v-model="formData.retirementAge"
              class="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
              placeholder="58"
              min="50"
              max="65"
              required
            />
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
              EPF can be withdrawn at age 58
            </p>
          </div>

          <!-- Current EPF Balance -->
          <div>
            <label
              for="currentEpfBalance"
              class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
            >
              Current EPF Balance (₹)
            </label>
            <input
              type="number"
              id="currentEpfBalance"
              v-model="formData.currentEpfBalance"
              class="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
              placeholder="100000"
              min="0"
              required
            />
          </div>

          <!-- Expected Annual Return -->
          <div>
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
              placeholder="8.25"
              min="0"
              max="15"
              step="0.25"
              required
            />
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Current EPF interest rate is 8.25%
            </p>
          </div>
        </div>

        <!-- Calculate Button -->
        <div class="pt-4">
          <button
            type="submit"
            class="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-lg hover:shadow-xl"
          >
            Calculate EPF Growth
          </button>
        </div>
      </form>
    </template>
  </card-layout>
</template>

<script setup>
import { reactive } from 'vue'
import CardLayout from '../CardLayout.vue'

const emit = defineEmits(['update-epf-data'])

const props = defineProps({
  monthlySalary: {
    type: Number,
    default: 50000,
  },
  employeeContribution: {
    type: Number,
    default: 12,
  },
  employerContribution: {
    type: Number,
    default: 12,
  },
  currentAge: {
    type: Number,
    default: 25,
  },
  retirementAge: {
    type: Number,
    default: 58,
  },
  currentEpfBalance: {
    type: Number,
    default: 100000,
  },
  expectedAnnualReturn: {
    type: Number,
    default: 8.25,
  },
})

const formData = reactive({
  monthlySalary: props.monthlySalary,
  employeeContribution: props.employeeContribution,
  employerContribution: props.employerContribution,
  currentAge: props.currentAge,
  retirementAge: props.retirementAge,
  currentEpfBalance: props.currentEpfBalance,
  expectedAnnualReturn: props.expectedAnnualReturn,
})

const calculateEpf = () => {
  if (formData.currentAge >= formData.retirementAge) {
    alert('Current age should be less than retirement age')
    return
  }

  emit('update-epf-data', formData)
}
</script>
