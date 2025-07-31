<template>
  <div v-if="showBreakdownTable" class="mt-8 bg-white shadow rounded-lg overflow-hidden">
    <div class="p-4 md:p-6 border-b border-gray-200">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between">
        <h3 class="text-lg font-semibold text-gray-800 mb-4 md:mb-0">Tax Breakdown & Comparison</h3>
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
            Download Breakdown
          </button>
        </div>
      </div>
    </div>

    <!-- Charts Section -->
    <div class="p-4 md:p-6 bg-gray-50 border-b border-gray-200">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Tax Slab Breakdown Chart -->
        <div class="bg-white p-4 rounded-lg shadow-sm">
          <h4 class="text-sm font-semibold text-gray-700 mb-3">Tax Slab Breakdown</h4>
          <pie-chart
            :data="chartData.taxSlabChart"
            :colors="['#10B981', '#F59E0B', '#EF4444', '#8B5CF6']"
            :height="'300px'"
            :download="true"
          />
        </div>

        <!-- Regime Comparison Chart -->
        <div class="bg-white p-4 rounded-lg shadow-sm">
          <h4 class="text-sm font-semibold text-gray-700 mb-3">Tax Regime Comparison</h4>
          <column-chart
            :data="chartData.regimeComparison"
            :colors="['#3B82F6', '#10B981']"
            :height="'300px'"
            :download="true"
          />
        </div>
      </div>
    </div>

    <!-- Tax Slab Breakdown Table -->
    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th
              class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Tax Slab
            </th>
            <th
              class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Tax Rate
            </th>
            <th
              class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Taxable Amount
            </th>
            <th
              class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Tax Amount
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr
            v-for="(slab, index) in taxSlabBreakdown"
            :key="index"
            :class="index % 2 === 0 ? 'bg-white' : 'bg-gray-50'"
          >
            <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
              {{ slab.range }}
            </td>
            <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{{ slab.rate }}%</td>
            <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
              ₹{{ formatNumber(slab.taxableAmount) }}
            </td>
            <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-green-600">
              ₹{{ formatNumber(slab.taxAmount) }}
            </td>
          </tr>
        </tbody>
        <tfoot class="bg-gray-50">
          <tr>
            <td colspan="3" class="px-4 py-3 text-sm font-medium text-gray-900">
              Total Income Tax
            </td>
            <td class="px-4 py-3 whitespace-nowrap text-sm font-bold text-red-600">
              ₹{{ formatNumber(totalIncomeTax) }}
            </td>
          </tr>
          <tr>
            <td colspan="3" class="px-4 py-3 text-sm font-medium text-gray-900">
              Health & Education Cess (4%)
            </td>
            <td class="px-4 py-3 whitespace-nowrap text-sm font-bold text-red-600">
              ₹{{ formatNumber(healthEducationCess) }}
            </td>
          </tr>
          <tr class="border-t-2 border-gray-300">
            <td colspan="3" class="px-4 py-3 text-sm font-bold text-gray-900">
              Total Tax Liability
            </td>
            <td class="px-4 py-3 whitespace-nowrap text-lg font-bold text-red-700">
              ₹{{ formatNumber(totalTaxLiability) }}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>

    <!-- Regime Comparison Table -->
    <div class="p-4 md:p-6 bg-gray-50 border-t border-gray-200">
      <h4 class="text-lg font-semibold text-gray-800 mb-4">Tax Regime Comparison</h4>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200 bg-white rounded-lg shadow">
          <thead class="bg-gray-50">
            <tr>
              <th
                class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Particulars
              </th>
              <th
                class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Old Regime
              </th>
              <th
                class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                New Regime
              </th>
              <th
                class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Difference
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr>
              <td class="px-4 py-3 text-sm font-medium text-gray-900">Gross Income</td>
              <td class="px-4 py-3 text-sm text-gray-500">₹{{ formatNumber(annualIncome) }}</td>
              <td class="px-4 py-3 text-sm text-gray-500">₹{{ formatNumber(annualIncome) }}</td>
              <td class="px-4 py-3 text-sm text-gray-500">₹0</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="px-4 py-3 text-sm font-medium text-gray-900">Total Deductions</td>
              <td class="px-4 py-3 text-sm text-gray-500">
                ₹{{ formatNumber(oldRegimeDeductions) }}
              </td>
              <td class="px-4 py-3 text-sm text-gray-500">
                ₹{{ formatNumber(newRegimeDeductions) }}
              </td>
              <td class="px-4 py-3 text-sm text-gray-500">
                ₹{{ formatNumber(oldRegimeDeductions - newRegimeDeductions) }}
              </td>
            </tr>
            <tr>
              <td class="px-4 py-3 text-sm font-medium text-gray-900">Taxable Income</td>
              <td class="px-4 py-3 text-sm text-gray-500">
                ₹{{ formatNumber(oldRegimeTaxableIncome) }}
              </td>
              <td class="px-4 py-3 text-sm text-gray-500">
                ₹{{ formatNumber(newRegimeTaxableIncome) }}
              </td>
              <td class="px-4 py-3 text-sm text-gray-500">
                ₹{{ formatNumber(oldRegimeTaxableIncome - newRegimeTaxableIncome) }}
              </td>
            </tr>
            <tr class="bg-gray-50">
              <td class="px-4 py-3 text-sm font-medium text-gray-900">Income Tax</td>
              <td class="px-4 py-3 text-sm text-gray-500">₹{{ formatNumber(oldRegimeTax) }}</td>
              <td class="px-4 py-3 text-sm text-gray-500">₹{{ formatNumber(newRegimeTax) }}</td>
              <td
                class="px-4 py-3 text-sm"
                :class="taxDifference >= 0 ? 'text-red-600' : 'text-green-600'"
              >
                ₹{{ formatNumber(Math.abs(taxDifference)) }}
                {{ taxDifference >= 0 ? '(Higher)' : '(Lower)' }}
              </td>
            </tr>
            <tr>
              <td class="px-4 py-3 text-sm font-medium text-gray-900">Total Tax Liability</td>
              <td class="px-4 py-3 text-sm font-semibold text-gray-900">
                ₹{{ formatNumber(oldRegimeTotalTax) }}
              </td>
              <td class="px-4 py-3 text-sm font-semibold text-gray-900">
                ₹{{ formatNumber(newRegimeTotalTax) }}
              </td>
              <td
                class="px-4 py-3 text-sm font-bold"
                :class="totalTaxDifference >= 0 ? 'text-red-600' : 'text-green-600'"
              >
                ₹{{ formatNumber(Math.abs(totalTaxDifference)) }}
                {{ totalTaxDifference >= 0 ? '(Higher)' : '(Lower)' }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        class="mt-4 p-4 rounded-lg"
        :class="
          recommendedRegime === 'old'
            ? 'bg-blue-50 border border-blue-200'
            : 'bg-green-50 border border-green-200'
        "
      >
        <h5
          class="font-semibold mb-2"
          :class="recommendedRegime === 'old' ? 'text-blue-800' : 'text-green-800'"
        >
          Recommendation: {{ recommendedRegime === 'old' ? 'Old Regime' : 'New Regime' }}
        </h5>
        <p
          class="text-sm"
          :class="recommendedRegime === 'old' ? 'text-blue-700' : 'text-green-700'"
        >
          {{ recommendationText }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useNumberFormatter } from '../../composables/numberformat'
import { useCsvExporter } from '../../composables/useCsvExporter'

const props = defineProps({
  showBreakdownTable: {
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
const { exportToCsv } = useCsvExporter()

// Helper function to calculate tax for a given regime
const calculateTaxForRegime = (regime, income, deductions, ageCategory) => {
  const basicExemption =
    regime === 'new'
      ? 300000
      : ageCategory === 'below60'
        ? 250000
        : ageCategory === '60to80'
          ? 300000
          : 500000

  const totalDeductions =
    regime === 'old' ? Object.values(deductions).reduce((sum, d) => sum + d, 0) : 75000

  const taxableIncome = Math.max(0, income - totalDeductions - basicExemption)

  let tax = 0

  if (regime === 'old') {
    // Old regime calculation
    if (taxableIncome > 1000000) {
      tax += (taxableIncome - 1000000) * 0.3
      tax += 250000 * 0.2
      tax += 250000 * 0.05
    } else if (taxableIncome > 500000) {
      tax += (taxableIncome - 500000) * 0.2
      tax += 250000 * 0.05
    } else if (taxableIncome > 250000) {
      tax += (taxableIncome - 250000) * 0.05
    }
  } else {
    // New regime calculation (FY 2025-26)
    if (taxableIncome > 1500000) {
      tax += (taxableIncome - 1500000) * 0.3
      tax += 500000 * 0.25
      tax += 250000 * 0.2
      tax += 300000 * 0.15
      tax += 300000 * 0.1
      tax += 300000 * 0.05
    } else if (taxableIncome > 1000000) {
      tax += (taxableIncome - 1000000) * 0.25
      tax += 250000 * 0.2
      tax += 300000 * 0.15
      tax += 300000 * 0.1
      tax += 300000 * 0.05
    } else if (taxableIncome > 750000) {
      tax += (taxableIncome - 750000) * 0.2
      tax += 300000 * 0.15
      tax += 300000 * 0.1
      tax += 300000 * 0.05
    } else if (taxableIncome > 450000) {
      tax += (taxableIncome - 450000) * 0.15
      tax += 300000 * 0.1
      tax += 300000 * 0.05
    } else if (taxableIncome > 150000) {
      tax += (taxableIncome - 150000) * 0.1
      tax += 300000 * 0.05
    } else if (taxableIncome > 0) {
      tax += taxableIncome * 0.05
    }
  }

  return {
    taxableIncome,
    incomeTax: Math.round(tax),
    totalTax: Math.round(tax * 1.04), // Including 4% cess
    totalDeductions,
  }
}

// Current regime calculations
const currentRegimeData = computed(() =>
  calculateTaxForRegime(props.taxRegime, props.annualIncome, props.deductions, props.ageCategory),
)

// Old regime calculations
const oldRegimeData = computed(() =>
  calculateTaxForRegime('old', props.annualIncome, props.deductions, props.ageCategory),
)

// New regime calculations
const newRegimeData = computed(() =>
  calculateTaxForRegime('new', props.annualIncome, props.deductions, props.ageCategory),
)

const totalIncomeTax = computed(() => currentRegimeData.value.incomeTax)
const healthEducationCess = computed(() => Math.round(totalIncomeTax.value * 0.04))
const totalTaxLiability = computed(() => currentRegimeData.value.totalTax)

// Regime comparison data
const oldRegimeDeductions = computed(() => oldRegimeData.value.totalDeductions)
const newRegimeDeductions = computed(() => newRegimeData.value.totalDeductions)
const oldRegimeTaxableIncome = computed(() => oldRegimeData.value.taxableIncome)
const newRegimeTaxableIncome = computed(() => newRegimeData.value.taxableIncome)
const oldRegimeTax = computed(() => oldRegimeData.value.incomeTax)
const newRegimeTax = computed(() => newRegimeData.value.incomeTax)
const oldRegimeTotalTax = computed(() => oldRegimeData.value.totalTax)
const newRegimeTotalTax = computed(() => newRegimeData.value.totalTax)

const taxDifference = computed(() => oldRegimeTax.value - newRegimeTax.value)
const totalTaxDifference = computed(() => oldRegimeTotalTax.value - newRegimeTotalTax.value)

const recommendedRegime = computed(() =>
  oldRegimeTotalTax.value <= newRegimeTotalTax.value ? 'old' : 'new',
)

const recommendationText = computed(() => {
  const savings = Math.abs(totalTaxDifference.value)
  return recommendedRegime.value === 'old'
    ? `Old regime saves you ₹${formatNumber(savings)} in taxes due to available deductions.`
    : `New regime saves you ₹${formatNumber(savings)} in taxes with lower tax rates.`
})

// Tax slab breakdown
const taxSlabBreakdown = computed(() => {
  const taxableIncome = currentRegimeData.value.taxableIncome
  const slabs = []

  if (props.taxRegime === 'old') {
    // Old regime slabs
    if (taxableIncome > 0) {
      const slab1 = Math.min(taxableIncome, 250000)
      if (slab1 > 0) {
        slabs.push({
          range: '₹0 - ₹2,50,000',
          rate: 5,
          taxableAmount: slab1,
          taxAmount: slab1 * 0.05,
        })
      }
    }

    if (taxableIncome > 250000) {
      const slab2 = Math.min(taxableIncome - 250000, 250000)
      slabs.push({
        range: '₹2,50,001 - ₹5,00,000',
        rate: 20,
        taxableAmount: slab2,
        taxAmount: slab2 * 0.2,
      })
    }

    if (taxableIncome > 500000) {
      const slab3 = taxableIncome - 500000
      slabs.push({
        range: '₹5,00,001 & above',
        rate: 30,
        taxableAmount: slab3,
        taxAmount: slab3 * 0.3,
      })
    }
  } else {
    // New regime slabs
    const slabRanges = [
      { min: 0, max: 250000, rate: 5, label: '₹0 - ₹2,50,000' },
      { min: 250000, max: 500000, rate: 10, label: '₹2,50,001 - ₹5,00,000' },
      { min: 500000, max: 750000, rate: 15, label: '₹5,00,001 - ₹7,50,000' },
      { min: 750000, max: 1000000, rate: 20, label: '₹7,50,001 - ₹10,00,000' },
      { min: 1000000, max: 1500000, rate: 25, label: '₹10,00,001 - ₹15,00,000' },
      { min: 1500000, max: Infinity, rate: 30, label: '₹15,00,001 & above' },
    ]

    slabRanges.forEach((slab) => {
      if (taxableIncome > slab.min) {
        const amount = Math.min(taxableIncome, slab.max) - slab.min
        if (amount > 0) {
          slabs.push({
            range: slab.label,
            rate: slab.rate,
            taxableAmount: amount,
            taxAmount: amount * (slab.rate / 100),
          })
        }
      }
    })
  }

  return slabs
})

// Chart data
const chartData = computed(() => {
  const taxSlabChart = {}
  taxSlabBreakdown.value.forEach((slab) => {
    taxSlabChart[slab.range] = Math.round(slab.taxAmount)
  })

  const regimeComparison = {
    'Old Regime': oldRegimeTotalTax.value,
    'New Regime': newRegimeTotalTax.value,
  }

  return {
    taxSlabChart,
    regimeComparison,
  }
})

// CSV Export
const downloadCsv = () => {
  const csvData = [
    {
      Particulars: 'Gross Income',
      'Old Regime': props.annualIncome,
      'New Regime': props.annualIncome,
      Difference: 0,
    },
    {
      Particulars: 'Total Deductions',
      'Old Regime': oldRegimeDeductions.value,
      'New Regime': newRegimeDeductions.value,
      Difference: oldRegimeDeductions.value - newRegimeDeductions.value,
    },
    {
      Particulars: 'Taxable Income',
      'Old Regime': oldRegimeTaxableIncome.value,
      'New Regime': newRegimeTaxableIncome.value,
      Difference: oldRegimeTaxableIncome.value - newRegimeTaxableIncome.value,
    },
    {
      Particulars: 'Income Tax',
      'Old Regime': oldRegimeTax.value,
      'New Regime': newRegimeTax.value,
      Difference: taxDifference.value,
    },
    {
      Particulars: 'Total Tax Liability',
      'Old Regime': oldRegimeTotalTax.value,
      'New Regime': newRegimeTotalTax.value,
      Difference: totalTaxDifference.value,
    },
  ]

  exportToCsv(csvData, 'income-tax-breakdown.csv')
}
</script>
