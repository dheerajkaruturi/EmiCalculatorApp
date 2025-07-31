<template>
  <div class="space-y-6">
    <!-- Input and Results Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Left side: Input form -->
      <div>
        <ppf-data-input
          @update-ppf-data="handlePpfDataUpdate"
          :annual-investment="annualInvestment"
          :current-age="currentAge"
          :investment-period="investmentPeriod"
          :current-ppf-balance="currentPpfBalance"
          :expected-annual-return="expectedAnnualReturn"
        />
      </div>

      <!-- Right side: Results and Details -->
      <div>
        <ppf-details
          :show-ppf-details="showPpfDetails"
          :annual-investment="annualInvestment"
          :current-age="currentAge"
          :investment-period="investmentPeriod"
          :current-ppf-balance="currentPpfBalance"
          :expected-annual-return="expectedAnnualReturn"
        />
      </div>
    </div>

    <!-- PPF Schedule Table -->
    <ppf-schedule-table
      :show-schedule-table="showPpfDetails"
      :annual-investment="annualInvestment"
      :current-age="currentAge"
      :investment-period="investmentPeriod"
      :current-ppf-balance="currentPpfBalance"
      :expected-annual-return="expectedAnnualReturn"
    />

    <!-- How PPF Works Section -->
    <how-ppf-works />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PpfDataInput from './PpfDataInput.vue'
import PpfDetails from './PpfDetails.vue'
import PpfScheduleTable from './PpfScheduleTable.vue'
import HowPpfWorks from './HowPpfWorks.vue'

const annualInvestment = ref(150000) // Maximum PPF investment per year
const currentAge = ref(25)
const investmentPeriod = ref(15) // Minimum 15 years for PPF
const currentPpfBalance = ref(50000)
const expectedAnnualReturn = ref(7.1) // Current PPF interest rate
const showPpfDetails = ref(false)

const handlePpfDataUpdate = (data) => {
  annualInvestment.value = data.annualInvestment
  currentAge.value = data.currentAge
  investmentPeriod.value = data.investmentPeriod
  currentPpfBalance.value = data.currentPpfBalance
  expectedAnnualReturn.value = data.expectedAnnualReturn
  showPpfDetails.value = true
}
</script>
