<template>
  <div v-if="showScheduleTable" class="mt-8 bg-white shadow rounded-lg overflow-hidden">
    <div class="p-4 md:p-6 border-b border-gray-200">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between">
        <h3 class="text-lg font-semibold text-gray-800 mb-4 md:mb-0">SWP Withdrawal Schedule</h3>
        <div class="flex flex-col sm:flex-row gap-2">
          <button
            @click="downloadCsv"
            class="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm font-medium transition-colors"
          >
            <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>
            Download CSV
          </button>
        </div>
      </div>
    </div>

    <!-- Charts Section -->
    <div class="p-4 md:p-6 bg-gray-50 border-b border-gray-200">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Corpus Balance Chart -->
        <div class="bg-white p-4 rounded-lg shadow-sm">
          <h4 class="text-sm font-semibold text-gray-700 mb-3">Corpus Balance Over Time</h4>
          <line-chart
            :data="chartData.balanceChart"
            :colors="['#3B82F6']"
            :height="'300px'"
            :curve="false"
            :download="true"
          />
        </div>

        <!-- Monthly Withdrawal Chart -->
        <div class="bg-white p-4 rounded-lg shadow-sm">
          <h4 class="text-sm font-semibold text-gray-700 mb-3">Monthly Withdrawal Trend</h4>
          <column-chart
            :data="chartData.withdrawalChart"
            :colors="['#EF4444']"
            :height="'300px'"
            :download="true"
          />
        </div>
      </div>
    </div>

    <!-- Table Section -->
    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th
              class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Month
            </th>
            <th
              class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Opening Balance
            </th>
            <th
              class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Monthly Return
            </th>
            <th
              class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Withdrawal
            </th>
            <th
              class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Closing Balance
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr
            v-for="(row, index) in paginatedData"
            :key="index"
            :class="index % 2 === 0 ? 'bg-white' : 'bg-gray-50'"
          >
            <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
              {{ row.month }}
            </td>
            <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
              ₹{{ formatNumber(row.openingBalance) }}
            </td>
            <td class="px-4 py-3 whitespace-nowrap text-sm text-green-600">
              ₹{{ formatNumber(row.monthlyReturn) }}
            </td>
            <td class="px-4 py-3 whitespace-nowrap text-sm text-red-600">
              ₹{{ formatNumber(row.withdrawal) }}
            </td>
            <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
              ₹{{ formatNumber(row.closingBalance) }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div class="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
      <div class="flex items-center justify-between">
        <div class="text-sm text-gray-700">
          Showing {{ (currentPage - 1) * itemsPerPage + 1 }} to
          {{ Math.min(currentPage * itemsPerPage, scheduleData.length) }} of
          {{ scheduleData.length }} results
        </div>
        <div class="flex space-x-2">
          <button
            @click="currentPage--"
            :disabled="currentPage === 1"
            class="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <span
            class="px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md"
          >
            {{ currentPage }} of {{ totalPages }}
          </span>
          <button
            @click="currentPage++"
            :disabled="currentPage === totalPages"
            class="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useNumberFormatter } from '../../composables/numberformat'
import { useCsvExporter } from '../../composables/useCsvExporter'

const props = defineProps({
  showScheduleTable: {
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
const { exportToCsv } = useCsvExporter()

const currentPage = ref(1)
const itemsPerPage = 12

// Calculate monthly return rate
const monthlyReturn = computed(() => props.expectedReturn / 100 / 12)

// Generate SWP schedule data
const scheduleData = computed(() => {
  const data = []
  let balance = props.initialInvestment

  for (let month = 1; month <= props.withdrawalPeriod; month++) {
    const openingBalance = balance
    const monthlyReturnAmount = balance * monthlyReturn.value
    balance = balance + monthlyReturnAmount

    const withdrawal = balance >= props.monthlyWithdrawal ? props.monthlyWithdrawal : balance
    balance = Math.max(0, balance - withdrawal)

    data.push({
      month,
      openingBalance,
      monthlyReturn: monthlyReturnAmount,
      withdrawal,
      closingBalance: balance,
    })

    // If balance becomes 0, break the loop
    if (balance === 0) break
  }

  return data
})

// Chart data
const chartData = computed(() => {
  const balanceChart = {}
  const withdrawalChart = {}

  scheduleData.value.forEach((row) => {
    balanceChart[`Month ${row.month}`] = Math.round(row.closingBalance)
    withdrawalChart[`Month ${row.month}`] = Math.round(row.withdrawal)
  })

  return {
    balanceChart,
    withdrawalChart,
  }
})

// Pagination
const totalPages = computed(() => Math.ceil(scheduleData.value.length / itemsPerPage))

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return scheduleData.value.slice(start, end)
})

// CSV Export
const downloadCsv = () => {
  const csvData = scheduleData.value.map((row) => ({
    Month: row.month,
    'Opening Balance': row.openingBalance,
    'Monthly Return': row.monthlyReturn,
    Withdrawal: row.withdrawal,
    'Closing Balance': row.closingBalance,
  }))

  exportToCsv(csvData, 'swp-schedule.csv')
}
</script>
