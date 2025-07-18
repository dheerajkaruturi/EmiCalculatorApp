<template>
  <CardLayout>
    <template #card-content>
      <div class="relative p-2">
        <!-- Background gradient overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg opacity-30"
        ></div>

        <!-- Content -->
        <div class="relative z-10">
          <!-- Header with icon -->
          <div class="text-center mb-1">
            <div
              class="inline-flex items-center justify-center w-12 h-12 bg-black rounded-xl shadow-lg mb-4"
            >
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800">EMI Calculator</h3>
          </div>

          <form @submit.prevent="calculateEmi" class="space-y-6">
            <!-- Loan Amount -->
            <div class="group">
              <label
                for="loan-amount"
                class="text-sm font-semibold text-gray-700 mb-2 flex items-center"
              >
                <svg
                  class="w-4 h-4 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  ></path>
                </svg>
                Loan Amount
              </label>
              <div class="relative">
                <span
                  class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium"
                  >₹</span
                >
                <input
                  type="number"
                  id="loan-amount"
                  class="pl-8 pr-4 py-3 w-full border-2 border-gray-200 rounded-xl shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 group-hover:border-gray-300 bg-white"
                  placeholder="10,00,000"
                  v-model="loanAmount"
                />
              </div>
            </div>

            <!-- Interest Rate -->
            <div class="group">
              <label
                for="interest-rate"
                class="text-sm font-semibold text-gray-700 mb-2 flex items-center"
              >
                <svg
                  class="w-4 h-4 mr-2 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  ></path>
                </svg>
                Interest Rate
              </label>
              <div class="relative">
                <input
                  type="number"
                  id="interest-rate"
                  v-model="interestRate"
                  min="0"
                  step="0.1"
                  class="pr-8 pl-4 py-3 w-full border-2 border-gray-200 rounded-xl shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 group-hover:border-gray-300 bg-white"
                  placeholder="8.5"
                />
                <span
                  class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium"
                  >%</span
                >
              </div>
            </div>

            <!-- Loan Tenure -->
            <div class="group">
              <label
                for="loan-tenure"
                class="text-sm font-semibold text-gray-700 mb-2 flex items-center"
              >
                <svg
                  class="w-4 h-4 mr-2 text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
                Loan Tenure
              </label>
              <div class="relative">
                <input
                  type="number"
                  id="loan-tenure"
                  v-model="loanTenure"
                  min="1"
                  class="pr-16 pl-4 py-3 w-full border-2 border-gray-200 rounded-xl shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 group-hover:border-gray-300 bg-white"
                  placeholder="60"
                />
                <span
                  class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium"
                  >months</span
                >
              </div>
            </div>

            <!-- Calculate Button -->
            <div class="pt-4">
              <button
                type="submit"
                class="w-full relative overflow-hidden bg-black text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-200 group"
              >
                <span class="relative z-10 flex items-center justify-center">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    ></path>
                  </svg>
                  Calculate EMI
                </span>
                <!-- Hover effect overlay -->
                <div
                  class="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                ></div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </template>
  </CardLayout>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import CardLayout from '../components/CardLayout.vue'

const emit = defineEmits(['emi-calculated'])

const loanAmount = ref()
const interestRate = ref()
const loanTenure = ref()
const emiResult = ref()
const payableAmount = ref()

const calculateEmi = function () {
  if (!loanAmount.value || !interestRate.value || !loanTenure.value) {
    alert('Please fill all the fields before calculating EMI.')
    return
  }

  /* EMI Calculation Logic
    EMI = [P × R × (1 + R)^N] / [(1 + R)^N – 1]
    where –
    P is the principal amount
    R is the rate of interest
    N is the loan tenure
  */

  let p = parseFloat(loanAmount.value)
  let r = parseFloat(interestRate.value) / 100 / 12 // Monthly interest rate
  let n = parseInt(loanTenure.value)

  emiResult.value = ((p * r * Math.pow(1 + r, n)) / [Math.pow(1 + r, n) - 1]).toFixed()

  console.log('montly emi is: ' + emiResult.value)

  payableAmount.value = (emiResult.value * n).toFixed()

  console.log('total payable amount is:' + payableAmount.value)

  emit('emi-calculated', {
    emi: emiResult.value,
    totalPayable: payableAmount.value,
    principal: loanAmount.value,
    loanTenure: loanTenure.value,
  })
}
</script>
