<template>
  <div v-if="showAmortizationTable" class="mt-8 bg-white shadow rounded-lg p-4 md:p-6">
    <h2 class="text-lg md:text-xl font-bold text-gray-800 mb-4">EMI Payment Schedule</h2>
    <div class="overflow-x-auto">
      <table class="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr class="bg-black text-white">
            <th class="border border-gray-300 px-2 md:px-4 py-2 text-left">Month</th>
            <th class="border border-gray-300 px-2 md:px-4 py-2 text-left">Principal Paid</th>
            <th class="border border-gray-300 px-2 md:px-4 py-2 text-left">Interest Charged</th>
            <th class="border border-gray-300 px-2 md:px-4 py-2 text-left">Total Payment</th>
            <th class="border border-gray-300 px-2 md:px-4 py-2 text-left">Balance Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(payment, index) in paginatedData" :key="index">
            <td class="border border-gray-300 px-2 md:px-4 py-2">{{ payment.month }}</td>
            <td class="border border-gray-300 px-2 md:px-4 py-2">
              ₹{{ formatNumber(payment.principalPaid) }}
            </td>
            <td class="border border-gray-300 px-2 md:px-4 py-2">
              ₹{{ formatNumber(payment.interestCharged) }}
            </td>
            <td class="border border-gray-300 px-2 md:px-4 py-2">
              ₹{{ formatNumber(payment.totalPayment) }}
            </td>
            <td
              class="border px-2 md:px-4 py-2"
              :class="{
                'text-white bg-green-500 border-gray-500': payment.balanceAmount === 0,
                'text-black-500 border-gray-300': payment.balanceAmount !== 0,
              }"
            >
              ₹{{ formatNumber(payment.balanceAmount) }}
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
  </div>
</template>

<script setup>
import { reactive, defineProps, watch, computed, ref } from 'vue'
import { useNumberFormatter } from '@/composables/numberformat'

const props = defineProps({
  showAmortizationTable: {
    type: Boolean,
    default: false,
    required: true,
  },
  principleAmount: {
    type: Number,
    default: 0,
    required: true,
  },
  interestRate: {
    type: Number,
    default: 0,
    required: true,
  },
  loanTenure: {
    type: Number,
    default: 0,
    required: true,
  },
})

const emiScheduleTableData = reactive([])
const currentPage = ref(1)
const itemsPerPage = 10

const { thousandSeparator: formatNumber } = useNumberFormatter()

const totalPages = computed(() => {
  return Math.ceil(emiScheduleTableData.length / itemsPerPage)
})

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return emiScheduleTableData.slice(start, end)
})

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
  [() => props.principleAmount, () => props.interestRate, () => props.loanTenure],
  () => {
    calculateAmortization()
  },
  { immediate: true },
)

function calculateAmortization() {
  if (!props.principleAmount || !props.interestRate || !props.loanTenure) {
    emiScheduleTableData.splice(0, emiScheduleTableData.length) // Clear the array
    return
  }

  const P = props.principleAmount
  const r = props.interestRate / 100 / 12 // Monthly interest rate
  const n = props.loanTenure

  // Calculate EMI
  const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)

  // Generate amortization schedule
  let remainingBalance = P
  emiScheduleTableData.splice(0, emiScheduleTableData.length) // Clear the array before populating

  for (let month = 1; month <= n; month++) {
    const interestPayment = remainingBalance * r
    const principalPayment = emi - interestPayment
    remainingBalance = Math.max(0, remainingBalance - principalPayment)

    emiScheduleTableData.push({
      month: month,
      principalPaid: parseFloat(principalPayment.toFixed(2)),
      interestCharged: parseFloat(interestPayment.toFixed(2)),
      totalPayment: parseFloat(emi.toFixed(2)),
      balanceAmount: parseFloat(remainingBalance.toFixed(2)),
    })

    if (remainingBalance <= 0) break
  }
}
</script>
