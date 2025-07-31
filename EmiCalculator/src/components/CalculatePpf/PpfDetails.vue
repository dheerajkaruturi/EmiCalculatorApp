<template>
  <div v-if="showPpfDetails" class="space-y-6">
    <!-- PPF Summary Card -->
    <card-layout>
      <template #title>
        <h3 class="text-xl font-bold text-slate-800 dark:text-slate-200">
          PPF Calculation Summary
        </h3>
      </template>

      <template #content>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Key Metrics -->
          <div class="space-y-4">
            <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p class="text-sm text-blue-600 dark:text-blue-400 font-medium">
                Total PPF Corpus at Maturity
              </p>
              <p class="text-2xl font-bold text-blue-700 dark:text-blue-300">
                ₹{{ thousandSeparator(Math.round(totalMaturityAmount)) }}
              </p>
            </div>

            <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <p class="text-sm text-green-600 dark:text-green-400 font-medium">
                Total Investments
              </p>
              <p class="text-xl font-bold text-green-700 dark:text-green-300">
                ₹{{ thousandSeparator(Math.round(totalInvestments)) }}
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
                Annual Investment
              </p>
              <p class="text-lg font-semibold text-slate-800 dark:text-slate-200">
                ₹{{ thousandSeparator(Math.round(annualInvestment)) }}
              </p>
            </div>

            <div class="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
              <p class="text-sm text-slate-600 dark:text-slate-400 font-medium">
                Monthly Investment
              </p>
              <p class="text-lg font-semibold text-slate-800 dark:text-slate-200">
                ₹{{ thousandSeparator(Math.round(monthlyInvestment)) }}
              </p>
            </div>

            <div class="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
              <p class="text-sm text-slate-600 dark:text-slate-400 font-medium">
                Investment Period
              </p>
              <p class="text-lg font-semibold text-slate-800 dark:text-slate-200">
                {{ investmentPeriod }} years
              </p>
            </div>

            <div class="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
              <p class="text-sm text-slate-600 dark:text-slate-400 font-medium">
                Wealth Multiplier
              </p>
              <p class="text-lg font-semibold text-slate-800 dark:text-slate-200">
                {{ wealthMultiplier }}x
              </p>
            </div>
          </div>
        </div>

        <!-- Chart -->
        <div class="mt-8">
          <h4 class="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">
            PPF Growth Over Time
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
  showPpfDetails: {
    type: Boolean,
    default: false,
  },
  annualInvestment: {
    type: Number,
    required: true,
  },
  currentAge: {
    type: Number,
    required: true,
  },
  investmentPeriod: {
    type: Number,
    required: true,
  },
  currentPpfBalance: {
    type: Number,
    required: true,
  },
  expectedAnnualReturn: {
    type: Number,
    required: true,
  },
})

// Calculate basic values
const monthlyInvestment = computed(() => {
  return props.annualInvestment / 12
})

// Calculate PPF maturity using compound interest formula
const totalMaturityAmount = computed(() => {
  const annualRate = props.expectedAnnualReturn / 100
  const periods = props.investmentPeriod

  // Future value of current balance
  const futureValueOfCurrentBalance = props.currentPpfBalance * Math.pow(1 + annualRate, periods)

  // Future value of annual investments (annuity)
  const futureValueOfInvestments =
    props.annualInvestment * ((Math.pow(1 + annualRate, periods) - 1) / annualRate)

  return futureValueOfCurrentBalance + futureValueOfInvestments
})

const totalInvestments = computed(() => {
  return props.currentPpfBalance + props.annualInvestment * props.investmentPeriod
})

const totalInterest = computed(() => {
  return totalMaturityAmount.value - totalInvestments.value
})

const wealthMultiplier = computed(() => {
  return totalInvestments.value > 0
    ? (totalMaturityAmount.value / totalInvestments.value).toFixed(2)
    : '0.00'
})

// Generate chart data
const chartData = computed(() => {
  const data = {}
  const annualRate = props.expectedAnnualReturn / 100
  let currentBalance = props.currentPpfBalance

  // Add current year
  data[`Year ${new Date().getFullYear()}`] = Math.round(currentBalance)

  for (let year = 1; year <= props.investmentPeriod; year++) {
    // Add annual investment and calculate interest
    currentBalance = (currentBalance + props.annualInvestment) * (1 + annualRate)

    const displayYear = new Date().getFullYear() + year
    data[`Year ${displayYear}`] = Math.round(currentBalance)
  }

  return data
})
</script>
