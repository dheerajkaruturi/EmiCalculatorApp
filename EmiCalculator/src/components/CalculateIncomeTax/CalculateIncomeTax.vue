<template>
  <div class="flex flex-col lg:flex-row gap-8">
    <!-- Left side: Input form -->
    <div class="lg:w-1/2">
      <income-tax-data-input
        @update-income-tax-data="handleIncomeTaxDataUpdate"
        :annual-income="annualIncome"
        :tax-regime="taxRegime"
        :age-category="ageCategory"
        :deductions="deductions"
      />
    </div>

    <!-- Right side: Results and Details -->
    <div class="lg:w-1/2 space-y-6">
      <income-tax-details
        :show-tax-details="showTaxDetails"
        :annual-income="annualIncome"
        :tax-regime="taxRegime"
        :age-category="ageCategory"
        :deductions="deductions"
      />
    </div>
  </div>

  <!-- Tax Breakdown Table -->
  <income-tax-breakdown-table
    :show-breakdown-table="showTaxDetails"
    :annual-income="annualIncome"
    :tax-regime="taxRegime"
    :age-category="ageCategory"
    :deductions="deductions"
  />

  <!-- How Income Tax Works Section -->
  <how-income-tax-works />
</template>

<script setup>
import { ref } from 'vue'
import IncomeTaxDataInput from './IncomeTaxDataInput.vue'
import IncomeTaxDetails from './IncomeTaxDetails.vue'
import IncomeTaxBreakdownTable from './IncomeTaxBreakdownTable.vue'
import HowIncomeTaxWorks from './HowIncomeTaxWorks.vue'

const annualIncome = ref(1200000) // 12 lakhs
const taxRegime = ref('old') // 'old' or 'new'
const ageCategory = ref('below60') // 'below60', '60to80', 'above80'
const deductions = ref({
  section80C: 150000,
  section80D: 25000,
  section80G: 0,
  section24B: 200000,
  professionalTax: 2500,
  standardDeduction: 50000,
})
const showTaxDetails = ref(false)

const handleIncomeTaxDataUpdate = (data) => {
  annualIncome.value = data.annualIncome
  taxRegime.value = data.taxRegime
  ageCategory.value = data.ageCategory
  deductions.value = data.deductions
  showTaxDetails.value = true
}
</script>
