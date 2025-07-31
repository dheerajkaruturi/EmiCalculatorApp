<template>
  <div v-if="showScheduleTable" class="mt-8">
    <card-layout>
      <template #title>
        <div class="flex justify-between items-center">
          <h3 class="text-xl font-bold text-slate-800 dark:text-slate-200">EPF Growth Schedule</h3>
          <button
            @click="exportToCSV"
            class="bg-black hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-lg transition duration-200 text-sm"
          >
            Export to CSV
          </button>
        </div>
      </template>

      <template #content>
        <div class="overflow-x-auto -mx-4 sm:mx-0">
          <div class="inline-block min-w-full align-middle">
            <table class="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
              <thead class="bg-slate-50 dark:bg-slate-800">
                <tr>
                  <th
                    class="px-3 sm:px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider"
                  >
                    Year
                  </th>
                  <th
                    class="px-3 sm:px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider"
                  >
                    Age
                  </th>
                  <th
                    class="px-3 sm:px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider"
                  >
                    Opening Balance
                  </th>
                  <th
                    class="px-3 sm:px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider"
                  >
                    Annual Contribution
                  </th>
                  <th
                    class="px-3 sm:px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider"
                  >
                    Interest Earned
                  </th>
                  <th
                    class="px-3 sm:px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider"
                  >
                    Closing Balance
                  </th>
                </tr>
              </thead>
              <tbody
                class="bg-white dark:bg-slate-900 divide-y divide-slate-200 dark:divide-slate-700"
              >
                <tr
                  v-for="row in scheduleData"
                  :key="row.year"
                  class="hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <td
                    class="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-slate-900 dark:text-slate-100"
                  >
                    {{ row.year }}
                  </td>
                  <td
                    class="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-slate-900 dark:text-slate-100"
                  >
                    {{ row.age }}
                  </td>
                  <td
                    class="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-slate-900 dark:text-slate-100"
                  >
                    ₹{{ thousandSeparator(row.openingBalance) }}
                  </td>
                  <td
                    class="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-slate-900 dark:text-slate-100"
                  >
                    ₹{{ thousandSeparator(row.annualContribution) }}
                  </td>
                  <td
                    class="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-slate-900 dark:text-slate-100"
                  >
                    ₹{{ thousandSeparator(row.interestEarned) }}
                  </td>
                  <td
                    class="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-slate-900 dark:text-slate-100"
                  >
                    ₹{{ thousandSeparator(row.closingBalance) }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Summary Row -->
        <div class="mt-6 bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p class="text-sm text-slate-600 dark:text-slate-400">Total Contributions</p>
              <p class="text-lg font-bold text-slate-800 dark:text-slate-200">
                ₹{{ thousandSeparator(Math.round(totalContributions)) }}
              </p>
            </div>
            <div>
              <p class="text-sm text-slate-600 dark:text-slate-400">Total Interest</p>
              <p class="text-lg font-bold text-green-600 dark:text-green-400">
                ₹{{ thousandSeparator(Math.round(totalInterest)) }}
              </p>
            </div>
            <div>
              <p class="text-sm text-slate-600 dark:text-slate-400">Final EPF Corpus</p>
              <p class="text-lg font-bold text-blue-600 dark:text-blue-400">
                ₹{{ thousandSeparator(Math.round(finalAmount)) }}
              </p>
            </div>
            <div>
              <p class="text-sm text-slate-600 dark:text-slate-400">Wealth Multiplier</p>
              <p class="text-lg font-bold text-purple-600 dark:text-purple-400">
                {{ wealthMultiplier }}x
              </p>
            </div>
          </div>
        </div>
      </template>
    </card-layout>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import CardLayout from '../CardLayout.vue'
import { useNumberFormatter } from '../../composables/numberformat.js'
import { useCsvExporter } from '../../composables/useCsvExporter.js'

const { thousandSeparator } = useNumberFormatter()
const { exportScheduleToCSV } = useCsvExporter()

const props = defineProps({
  showScheduleTable: {
    type: Boolean,
    default: false,
  },
  monthlySalary: {
    type: Number,
    required: true,
  },
  employeeContribution: {
    type: Number,
    required: true,
  },
  employerContribution: {
    type: Number,
    required: true,
  },
  currentAge: {
    type: Number,
    required: true,
  },
  retirementAge: {
    type: Number,
    required: true,
  },
  currentEpfBalance: {
    type: Number,
    required: true,
  },
  expectedAnnualReturn: {
    type: Number,
    required: true,
  },
})

// Calculate basic values
const monthlyEmployeeContribution = computed(() => {
  return (props.monthlySalary * props.employeeContribution) / 100
})

const monthlyEmployerContribution = computed(() => {
  return (props.monthlySalary * props.employerContribution) / 100
})

const totalMonthlyContribution = computed(() => {
  return monthlyEmployeeContribution.value + monthlyEmployerContribution.value
})

const annualContribution = computed(() => {
  return totalMonthlyContribution.value * 12
})

const investmentPeriodYears = computed(() => {
  return props.retirementAge - props.currentAge
})

// Generate schedule data
const scheduleData = computed(() => {
  const data = []
  let balance = props.currentEpfBalance
  const annualRate = props.expectedAnnualReturn / 100
  const currentYear = new Date().getFullYear()

  for (let year = 1; year <= investmentPeriodYears.value; year++) {
    const openingBalance = Math.round(balance)
    const contribution = annualContribution.value

    // Interest is calculated on opening balance + (contributions made during the year / 2)
    // This approximates monthly contributions throughout the year
    const averageBalance = balance + contribution / 2
    const interestEarned = Math.round(averageBalance * annualRate)

    balance = balance + contribution + interestEarned
    const closingBalance = Math.round(balance)

    data.push({
      year: currentYear + year,
      age: props.currentAge + year,
      openingBalance: openingBalance,
      annualContribution: Math.round(contribution),
      interestEarned: interestEarned,
      closingBalance: closingBalance,
    })
  }

  return data
})

// Calculate totals
const totalContributions = computed(() => {
  return props.currentEpfBalance + annualContribution.value * investmentPeriodYears.value
})

const totalInterest = computed(() => {
  const lastRow = scheduleData.value[scheduleData.value.length - 1]
  return lastRow ? lastRow.closingBalance - totalContributions.value : 0
})

const finalAmount = computed(() => {
  const lastRow = scheduleData.value[scheduleData.value.length - 1]
  return lastRow ? lastRow.closingBalance : 0
})

const wealthMultiplier = computed(() => {
  return totalContributions.value > 0
    ? (finalAmount.value / totalContributions.value).toFixed(2)
    : '0.00'
})

const exportToCSV = () => {
  const headers = [
    'Year',
    'Age',
    'Opening Balance',
    'Annual Contribution',
    'Interest Earned',
    'Closing Balance',
  ]
  const csvData = scheduleData.value.map((row) => [
    row.year,
    row.age,
    row.openingBalance,
    row.annualContribution,
    row.interestEarned,
    row.closingBalance,
  ])

  exportScheduleToCSV(csvData, headers, 'epf-schedule')
}
</script>
