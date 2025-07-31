<template>
  <div v-if="showEpfDetails" class="space-y-6">
    <!-- EPF Summary Card -->
    <card-layout>
      <template #title>
        <h3 class="text-xl font-bold text-slate-800 dark:text-slate-200">
          EPF Calculation Summary
        </h3>
      </template>

      <template #content>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Key Metrics -->
          <div class="space-y-4">
            <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p class="text-sm text-blue-600 dark:text-blue-400 font-medium">
                Total EPF Corpus at Retirement
              </p>
              <p class="text-2xl font-bold text-blue-700 dark:text-blue-300">
                ₹{{ thousandSeparator(Math.round(totalMaturityAmount)) }}
              </p>
            </div>

            <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <p class="text-sm text-green-600 dark:text-green-400 font-medium">
                Total Contributions
              </p>
              <p class="text-xl font-bold text-green-700 dark:text-green-300">
                ₹{{ thousandSeparator(Math.round(totalContributions)) }}
              </p>
            </div>

            <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <p class="text-sm text-purple-600 dark:text-purple-400 font-medium">
                Interest Earned
              </p>
              <p class="text-xl font-bold text-purple-700 dark:text-purple-300">
                ₹{{ thousandSeparator(Math.round(totalInterest)) }}
              </p>
            </div>
          </div>

          <!-- Breakdown -->
          <div class="space-y-4">
            <div class="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
              <p class="text-sm text-slate-600 dark:text-slate-400 font-medium">
                Monthly Employee Contribution
              </p>
              <p class="text-lg font-semibold text-slate-800 dark:text-slate-200">
                ₹{{ thousandSeparator(Math.round(monthlyEmployeeContribution)) }}
              </p>
            </div>

            <div class="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
              <p class="text-sm text-slate-600 dark:text-slate-400 font-medium">
                Monthly Employer Contribution
              </p>
              <p class="text-lg font-semibold text-slate-800 dark:text-slate-200">
                ₹{{ thousandSeparator(Math.round(monthlyEmployerContribution)) }}
              </p>
            </div>

            <div class="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
              <p class="text-sm text-slate-600 dark:text-slate-400 font-medium">
                Total Monthly Contribution
              </p>
              <p class="text-lg font-semibold text-slate-800 dark:text-slate-200">
                ₹{{ thousandSeparator(Math.round(totalMonthlyContribution)) }}
              </p>
            </div>

            <div class="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
              <p class="text-sm text-slate-600 dark:text-slate-400 font-medium">
                Investment Period
              </p>
              <p class="text-lg font-semibold text-slate-800 dark:text-slate-200">
                {{ investmentPeriodYears }} years ({{ investmentPeriodMonths }} months)
              </p>
            </div>
          </div>
        </div>

        <!-- Chart -->
        <div class="mt-8">
          <h4 class="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">
            EPF Growth Over Time
          </h4>
          <div
            class="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700"
          >
            <line-chart
              :data="chartData"
              :colors="['#3B82F6', '#10B981', '#8B5CF6']"
              :height="300"
              suffix="₹"
              thousands=","
              precision="0"
            />
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

const { thousandSeparator } = useNumberFormatter()

const props = defineProps({
  showEpfDetails: {
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

const investmentPeriodYears = computed(() => {
  return props.retirementAge - props.currentAge
})

const investmentPeriodMonths = computed(() => {
  return investmentPeriodYears.value * 12
})

// Calculate EPF maturity using compound interest formula
const totalMaturityAmount = computed(() => {
  const monthlyRate = props.expectedAnnualReturn / 100 / 12
  const totalMonths = investmentPeriodMonths.value

  // Future value of current balance
  const futureValueOfCurrentBalance =
    props.currentEpfBalance * Math.pow(1 + monthlyRate, totalMonths)

  // Future value of monthly contributions (annuity)
  const futureValueOfContributions =
    totalMonthlyContribution.value * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate)

  return futureValueOfCurrentBalance + futureValueOfContributions
})

const totalContributions = computed(() => {
  return props.currentEpfBalance + totalMonthlyContribution.value * investmentPeriodMonths.value
})

const totalInterest = computed(() => {
  return totalMaturityAmount.value - totalContributions.value
})

// Generate chart data
const chartData = computed(() => {
  const data = {}
  const monthlyRate = props.expectedAnnualReturn / 100 / 12
  let currentBalance = props.currentEpfBalance

  // Add current year
  data[`Year ${new Date().getFullYear()}`] = Math.round(currentBalance)

  for (let year = 1; year <= investmentPeriodYears.value; year++) {
    // Calculate balance after 12 months of contributions and interest
    for (let month = 1; month <= 12; month++) {
      currentBalance = (currentBalance + totalMonthlyContribution.value) * (1 + monthlyRate)
    }

    const displayYear = new Date().getFullYear() + year
    data[`Year ${displayYear}`] = Math.round(currentBalance)
  }

  return data
})
</script>
