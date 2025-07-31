<template>
  <div class="flex flex-col lg:flex-row gap-8">
    <!-- Left side: Input form -->
    <div class="lg:w-1/2">
      <swp-data-input
        @update-swp-data="handleSwpDataUpdate"
        :initial-investment="initialInvestment"
        :monthly-withdrawal="monthlyWithdrawal"
        :expected-return="expectedReturn"
        :withdrawal-period="withdrawalPeriod"
      />
    </div>

    <!-- Right side: Results and Details -->
    <div class="lg:w-1/2 space-y-6">
      <swp-details
        :show-swp-details="showSwpDetails"
        :initial-investment="initialInvestment"
        :monthly-withdrawal="monthlyWithdrawal"
        :expected-return="expectedReturn"
        :withdrawal-period="withdrawalPeriod"
      />
    </div>
  </div>

  <!-- SWP Schedule Table -->
  <swp-schedule-table
    :show-schedule-table="showSwpDetails"
    :initial-investment="initialInvestment"
    :monthly-withdrawal="monthlyWithdrawal"
    :expected-return="expectedReturn"
    :withdrawal-period="withdrawalPeriod"
  />

  <!-- How This Works Section -->
  <how-swp-works />
</template>

<script setup>
import { ref } from 'vue'
import SwpDataInput from './SwpDataInput.vue'
import SwpDetails from './SwpDetails.vue'
import SwpScheduleTable from './SwpScheduleTable.vue'
import HowSwpWorks from './HowSwpWorks.vue'

const initialInvestment = ref(1000000) // 10 lakhs
const monthlyWithdrawal = ref(10000) // 10k per month
const expectedReturn = ref(12)
const withdrawalPeriod = ref(120) // in months
const showSwpDetails = ref(false)

const handleSwpDataUpdate = (data) => {
  initialInvestment.value = data.initialInvestment
  monthlyWithdrawal.value = data.monthlyWithdrawal
  expectedReturn.value = data.expectedReturn
  withdrawalPeriod.value = data.withdrawalPeriod
  showSwpDetails.value = true
}
</script>
