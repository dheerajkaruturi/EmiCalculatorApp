<template>
  <div class="flex flex-col lg:flex-row gap-8">
    <!-- Left side: Input form -->
    <div class="lg:w-1/2">
      <sip-data-input
        @update-sip-data="handleSipDataUpdate"
        :monthly-investment="monthlyInvestment"
        :expected-return="expectedReturn"
        :investment-period="investmentPeriod"
      />
    </div>

    <!-- Right side: Results and Details -->
    <div class="lg:w-1/2 space-y-6">
      <sip-details
        :show-sip-details="showSipDetails"
        :monthly-investment="monthlyInvestment"
        :expected-return="expectedReturn"
        :investment-period="investmentPeriod"
      />
    </div>
  </div>

  <!-- SIP Schedule Table -->
  <sip-schedule-table
    :show-schedule-table="showSipDetails"
    :monthly-investment="monthlyInvestment"
    :expected-return="expectedReturn"
    :investment-period="investmentPeriod"
  />

  <!-- How This Works Section -->
  <how-sip-works />
</template>

<script setup>
import { ref } from 'vue'
import SipDataInput from './SipDataInput.vue'
import SipDetails from './SipDetails.vue'
import SipScheduleTable from './SipScheduleTable.vue'
import HowSipWorks from './HowSipWorks.vue'

const monthlyInvestment = ref(5000)
const expectedReturn = ref(12)
const investmentPeriod = ref(120) // in months
const showSipDetails = ref(false)

const handleSipDataUpdate = (data) => {
  monthlyInvestment.value = data.monthlyInvestment
  expectedReturn.value = data.expectedReturn
  investmentPeriod.value = data.investmentPeriod
  showSipDetails.value = true
}
</script>
