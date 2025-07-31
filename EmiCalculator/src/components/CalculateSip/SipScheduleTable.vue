<template>
  <div v-if="showScheduleTable" class="mt-8 bg-white shadow rounded-lg p-4 md:p-6">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-lg md:text-xl font-bold text-gray-800 mb-4">SIP Investment Schedule</h2>
      <button
        @click="downloadExcel"
        class="flex items-center px-4 py-2 bg-black text-white rounded"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 16.5v-9m0 9l-3-3m3 3l3-3m6 6.75H6a2.25 2.25 0 01-2.25-2.25V6A2.25 2.25 0 016 3.75h12A2.25 2.25 0 0120.25 6v12a2.25 2.25 0 01-2.25 2.25z"
          />
        </svg>
        Download to Excel
      </button>
    </div>
    <div class="overflow-x-auto">
      <table class="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr class="bg-black text-white">
            <th class="border border-gray-300 px-2 md:px-4 py-2 text-left">Month</th>
            <th class="border border-gray-300 px-2 md:px-4 py-2 text-left">Investment (A)</th>
            <th class="border border-gray-300 px-2 md:px-4 py-2 text-left">Returns (B)</th>
            <th class="border border-gray-300 px-2 md:px-4 py-2 text-left">Total Value (A + B)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(investment, index) in paginatedData" :key="index">
            <td class="border border-gray-300 px-2 md:px-4 py-2">{{ investment.month }}</td>
            <td class="border border-gray-300 px-2 md:px-4 py-2">
              ₹{{ formatNumber(investment.totalInvestment) }}
            </td>
            <td class="border border-gray-300 px-2 md:px-4 py-2">
              ₹{{ formatNumber(investment.totalReturns) }}
            </td>
            <td class="border border-gray-300 px-2 md:px-4 py-2">
              ₹{{ formatNumber(investment.totalValue) }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination Controls -->
    <div class="flex flex-col md:flex-row justify-between items-center mt-4 space-y-2 md:space-y-0">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
      >
        Previous
      </button>
      <span class="text-sm md:text-base">Page {{ currentPage }} of {{ totalPages }}</span>
      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="px-4 py-2 bg-black text-white rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>

    <!-- SIP Chart -->
    <div class="mt-8 bg-white shadow rounded-lg p-4 md:p-6">
      <h2 class="text-lg md:text-xl font-bold text-gray-800 mb-4">SIP Growth Chart</h2>
      <div class="chart-container" style="height: 400px">
        <line-chart
          :data="chartData"
          :colors="['#4285F4', '#34A853']"
          :legend="true"
          :download="true"
          :points="true"
          :curve="false"
          :library="chartOptions"
          ytitle="Amount (₹)"
          xtitle="Month"
        ></line-chart>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, defineProps, watch, computed, ref } from 'vue'
import { useNumberFormatter } from '@/composables/numberformat'
import { useCsvExporter } from '@/composables/useCsvExporter'

const props = defineProps({
  showScheduleTable: {
    type: Boolean,
    default: false,
    required: true,
  },
  monthlyInvestment: {
    type: Number,
    default: 0,
    required: true,
  },
  expectedReturn: {
    type: Number,
    default: 0,
    required: true,
  },
  investmentPeriod: {
    type: Number,
    default: 0,
    required: true,
  },
})

const sipScheduleTableData = reactive([])
const currentPage = ref(1)
const itemsPerPage = 10

const { thousandSeparator: formatNumber } = useNumberFormatter()
const { exportToCsv } = useCsvExporter()

const totalPages = computed(() => {
  return Math.ceil(sipScheduleTableData.length / itemsPerPage)
})

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return sipScheduleTableData.slice(start, end)
})

const chartData = computed(() => {
  return [
    {
      name: 'Total Investment',
      data: sipScheduleTableData.reduce((acc, investment) => {
        const monthKey = 'Month ' + investment.month
        acc[monthKey] = investment.totalInvestment
        return acc
      }, {}),
    },
    {
      name: 'Total Value',
      data: sipScheduleTableData.reduce((acc, investment) => {
        const monthKey = 'Month ' + investment.month
        acc[monthKey] = investment.totalValue
        return acc
      }, {}),
    },
  ]
})

const chartOptions = {
  animation: {
    duration: 1000,
  },
  elements: {
    line: {
      tension: 0.2,
    },
    point: {
      radius: 4,
      hoverRadius: 6,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(0, 0, 0, 0.05)',
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    tooltip: {
      mode: 'index',
      intersect: false,
      callbacks: {
        label: function (context) {
          return context.dataset.label + ': ₹' + formatNumber(context.raw)
        },
      },
    },
    legend: {
      position: 'top',
      labels: {
        usePointStyle: true,
        padding: 20,
      },
    },
  },
  responsive: true,
  maintainAspectRatio: false,
}

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

watch(
  [() => props.monthlyInvestment, () => props.expectedReturn, () => props.investmentPeriod],
  () => {
    calculateSipSchedule()
  },
  { immediate: true },
)

function calculateSipSchedule() {
  if (!props.monthlyInvestment || !props.expectedReturn || !props.investmentPeriod) {
    sipScheduleTableData.splice(0, sipScheduleTableData.length)
    return
  }

  const monthlyRate = props.expectedReturn / 100 / 12
  const monthlyInvestment = props.monthlyInvestment
  let totalInvestment = 0
  let totalValue = 0

  sipScheduleTableData.splice(0, sipScheduleTableData.length)

  for (let month = 1; month <= props.investmentPeriod; month++) {
    totalInvestment += monthlyInvestment

    // Calculate compound growth for each month's investment
    totalValue = 0
    for (let i = 1; i <= month; i++) {
      const monthsInvested = month - i + 1
      totalValue += monthlyInvestment * Math.pow(1 + monthlyRate, monthsInvested - 1)
    }

    const totalReturns = totalValue - totalInvestment

    sipScheduleTableData.push({
      month: month,
      totalInvestment: Math.round(totalInvestment),
      totalReturns: Math.round(totalReturns),
      totalValue: Math.round(totalValue),
    })
  }
}

const csvData = computed(() => {
  return sipScheduleTableData.map((investment) => ({
    Month: investment.month,
    'Total Investment': investment.totalInvestment,
    'Total Returns': investment.totalReturns,
    'Total Value': investment.totalValue,
  }))
})

function downloadExcel() {
  exportToCsv(csvData.value, 'sip_investment_schedule.csv')
}
</script>
