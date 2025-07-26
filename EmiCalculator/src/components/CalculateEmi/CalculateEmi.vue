<template>
  <div class="grid grid-cols-1 md:grid-cols-8 gap-4 md:gap-8">
    <div class="col-span-1 md:col-span-5 bg-white shadow rounded-lg p-4 md:p-6">
      <emi-data-input @emi-calculated="calculatedEmi"></emi-data-input>
    </div>
    <div
      v-if="showDetailsComponent"
      class="col-span-1 md:col-span-3 bg-white shadow rounded-lg p-4 md:p-6"
    >
      <emi-details
        :emi="calculatedEmiFromChild.emi"
        :loan-tenure="calculatedEmiFromChild.loanTenure"
        :total-amount="calculatedEmiFromChild.totalAmount"
        :principle-amount="calculatedEmiFromChild.principleAmount"
      ></emi-details>
    </div>
  </div>

  <!-- EMI Payment Table -->
  <emi-amortization-table
    v-if="showDetailsComponent"
    :show-amortization-table="showAmortizationSchedule"
    :principle-amount="calculatedEmiFromChild.principleAmount"
    :interest-rate="calculatedEmiFromChild.interestRate"
    :loan-tenure="calculatedEmiFromChild.loanTenure"
  />

  <div v-if="showDetailsComponent" class="mt-8 bg-white shawdow rounder-lg p-4 md:p-6">
    <h2 class="text-lg md:text-xl font-bold text-gray-800 mb-4">Total Payment Breakdown</h2>
    <pie-chart
      :data="[
        ['Principle Amount', calculatedEmiFromChild.principleAmount],
        [
          'Interest Amount',
          calculatedEmiFromChild.totalAmount - calculatedEmiFromChild.principleAmount,
        ],
      ]"
    ></pie-chart>
  </div>

  <how-this-works v-if="showDetailsComponent" class="mt-8"></how-this-works>
</template>

<script setup>
import { reactive, ref } from 'vue'
import EmiDataInput from './EmiDataInput.vue'
import EmiDetails from './EmiDetails.vue'
import EmiAmortizationTable from './EmiAmortizationTable.vue'
import HowThisWorks from './HowThisWorks.vue'

const calculatedEmiFromChild = reactive({
  emi: 0,
  totalAmount: 0,
  principleAmount: 0,
  loanTenure: 0,
  interestRate: 0, // Added interestRate
})

const showDetailsComponent = ref(false)
const showAmortizationSchedule = ref(false)

const calculatedEmi = (data) => {
  // Handle the calculated EMI data
  console.log('Coming from parent component, Calculated EMI:', data)

  calculatedEmiFromChild.emi = +data.emi
  calculatedEmiFromChild.totalAmount = +data.totalPayable
  calculatedEmiFromChild.principleAmount = +data.principal
  calculatedEmiFromChild.loanTenure = +data.loanTenure
  calculatedEmiFromChild.interestRate = +data.interestRate

  showDetailsComponent.value = true
  showAmortizationSchedule.value = true

  console.log('Coming from parent component, Updated calculated EMI:', calculatedEmiFromChild)
}
</script>
