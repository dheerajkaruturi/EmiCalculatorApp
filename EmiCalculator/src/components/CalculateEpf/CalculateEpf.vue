<template>
  <div class="space-y-6">
    <!-- Input and Results Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Left side: Input form -->
      <div>
        <epf-data-input
          @update-epf-data="handleEpfDataUpdate"
          :monthly-salary="monthlySalary"
          :employee-contribution="employeeContribution"
          :employer-contribution="employerContribution"
          :current-age="currentAge"
          :retirement-age="retirementAge"
          :current-epf-balance="currentEpfBalance"
          :expected-annual-return="expectedAnnualReturn"
        />
      </div>

      <!-- Right side: Results and Details -->
      <div>
        <epf-details
          :show-epf-details="showEpfDetails"
          :monthly-salary="monthlySalary"
          :employee-contribution="employeeContribution"
          :employer-contribution="employerContribution"
          :current-age="currentAge"
          :retirement-age="retirementAge"
          :current-epf-balance="currentEpfBalance"
          :expected-annual-return="expectedAnnualReturn"
        />
      </div>
    </div>

    <!-- EPF Schedule Table -->
    <epf-schedule-table
      :show-schedule-table="showEpfDetails"
      :monthly-salary="monthlySalary"
      :employee-contribution="employeeContribution"
      :employer-contribution="employerContribution"
      :current-age="currentAge"
      :retirement-age="retirementAge"
      :current-epf-balance="currentEpfBalance"
      :expected-annual-return="expectedAnnualReturn"
    />

    <!-- How EPF Works Section -->
    <how-epf-works />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import EpfDataInput from './EpfDataInput.vue'
import EpfDetails from './EpfDetails.vue'
import EpfScheduleTable from './EpfScheduleTable.vue'
import HowEpfWorks from './HowEpfWorks.vue'

const monthlySalary = ref(50000)
const employeeContribution = ref(12) // 12% of basic salary
const employerContribution = ref(12) // 12% of basic salary
const currentAge = ref(25)
const retirementAge = ref(58) // EPF withdrawal age
const currentEpfBalance = ref(100000)
const expectedAnnualReturn = ref(8.25) // Current EPF interest rate
const showEpfDetails = ref(false)

const handleEpfDataUpdate = (data) => {
  monthlySalary.value = data.monthlySalary
  employeeContribution.value = data.employeeContribution
  employerContribution.value = data.employerContribution
  currentAge.value = data.currentAge
  retirementAge.value = data.retirementAge
  currentEpfBalance.value = data.currentEpfBalance
  expectedAnnualReturn.value = data.expectedAnnualReturn
  showEpfDetails.value = true
}
</script>
