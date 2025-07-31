<template>
  <div class="mt-8 bg-white shadow rounded-lg p-6">
    <h3 class="text-xl font-bold text-gray-800 mb-6">How Income Tax Works in India?</h3>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Left Column -->
      <div class="space-y-6">
        <div class="flex items-start space-x-3">
          <div
            class="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"
          >
            <span class="text-sm font-semibold text-blue-600">1</span>
          </div>
          <div>
            <h4 class="font-semibold text-gray-800 mb-2">Calculate Gross Income</h4>
            <p class="text-gray-600 text-sm">
              Include salary, business income, capital gains, and other income sources.
            </p>
          </div>
        </div>

        <div class="flex items-start space-x-3">
          <div
            class="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"
          >
            <span class="text-sm font-semibold text-blue-600">2</span>
          </div>
          <div>
            <h4 class="font-semibold text-gray-800 mb-2">Apply Deductions</h4>
            <p class="text-gray-600 text-sm">
              Subtract eligible deductions like 80C, 80D, home loan interest (old regime only).
            </p>
          </div>
        </div>

        <div class="flex items-start space-x-3">
          <div
            class="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"
          >
            <span class="text-sm font-semibold text-blue-600">3</span>
          </div>
          <div>
            <h4 class="font-semibold text-gray-800 mb-2">Apply Tax Slabs</h4>
            <p class="text-gray-600 text-sm">
              Calculate tax based on applicable slab rates for your chosen regime.
            </p>
          </div>
        </div>

        <div class="flex items-start space-x-3">
          <div
            class="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"
          >
            <span class="text-sm font-semibold text-blue-600">4</span>
          </div>
          <div>
            <h4 class="font-semibold text-gray-800 mb-2">Add Cess</h4>
            <p class="text-gray-600 text-sm">
              Add 4% Health and Education Cess on the calculated income tax.
            </p>
          </div>
        </div>
      </div>

      <!-- Right Column -->
      <div class="space-y-6">
        <div class="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <h4 class="font-semibold text-blue-800 mb-3">Old Tax Regime Benefits</h4>
          <ul class="space-y-2 text-sm text-blue-700">
            <li class="flex items-center">
              <svg class="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Multiple deduction options
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Higher exemption for seniors
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Home loan interest deduction
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Investment-linked savings
            </li>
          </ul>
        </div>

        <div class="bg-green-50 rounded-lg p-4 border border-green-200">
          <h4 class="font-semibold text-green-800 mb-3">New Tax Regime Benefits</h4>
          <ul class="space-y-2 text-sm text-green-700">
            <li class="flex items-center">
              <svg class="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Lower tax rates
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Simplified tax calculation
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              No investment pressure
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              More take-home for many
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Tax Slabs Comparison -->
    <div class="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Old Regime Slabs -->
      <div class="bg-gray-50 rounded-lg p-4">
        <h4 class="font-semibold text-gray-800 mb-4">Old Regime Tax Slabs (FY 2025-26)</h4>
        <div class="space-y-2 text-sm">
          <div class="flex justify-between p-2 bg-white rounded border">
            <span>₹0 - ₹2,50,000</span>
            <span class="font-medium text-green-600">0%</span>
          </div>
          <div class="flex justify-between p-2 bg-white rounded border">
            <span>₹2,50,001 - ₹5,00,000</span>
            <span class="font-medium text-yellow-600">5%</span>
          </div>
          <div class="flex justify-between p-2 bg-white rounded border">
            <span>₹5,00,001 - ₹10,00,000</span>
            <span class="font-medium text-orange-600">20%</span>
          </div>
          <div class="flex justify-between p-2 bg-white rounded border">
            <span>Above ₹10,00,000</span>
            <span class="font-medium text-red-600">30%</span>
          </div>
        </div>
        <p class="text-xs text-gray-500 mt-2">Plus 4% Health & Education Cess on total tax</p>
      </div>

      <!-- New Regime Slabs -->
      <div class="bg-gray-50 rounded-lg p-4">
        <h4 class="font-semibold text-gray-800 mb-4">New Regime Tax Slabs (FY 2025-26)</h4>
        <div class="space-y-2 text-sm">
          <div class="flex justify-between p-2 bg-white rounded border">
            <span>₹0 - ₹3,00,000</span>
            <span class="font-medium text-green-600">0%</span>
          </div>
          <div class="flex justify-between p-2 bg-white rounded border">
            <span>₹3,00,001 - ₹4,50,000</span>
            <span class="font-medium text-green-500">5%</span>
          </div>
          <div class="flex justify-between p-2 bg-white rounded border">
            <span>₹4,50,001 - ₹7,50,000</span>
            <span class="font-medium text-yellow-500">10%</span>
          </div>
          <div class="flex justify-between p-2 bg-white rounded border">
            <span>₹7,50,001 - ₹10,00,000</span>
            <span class="font-medium text-yellow-600">15%</span>
          </div>
          <div class="flex justify-between p-2 bg-white rounded border">
            <span>₹10,00,001 - ₹12,50,000</span>
            <span class="font-medium text-orange-600">20%</span>
          </div>
          <div class="flex justify-between p-2 bg-white rounded border">
            <span>₹12,50,001 - ₹15,00,000</span>
            <span class="font-medium text-red-500">25%</span>
          </div>
          <div class="flex justify-between p-2 bg-white rounded border">
            <span>Above ₹15,00,000</span>
            <span class="font-medium text-red-600">30%</span>
          </div>
        </div>
        <p class="text-xs text-gray-500 mt-2">Plus 4% Health & Education Cess on total tax</p>
        <p class="text-xs text-blue-600 mt-1">Standard Deduction: ₹75,000</p>
      </div>
    </div>

    <!-- Important Notes -->
    <div class="mt-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
      <h4 class="font-semibold text-yellow-800 mb-3">Important Notes</h4>
      <ul class="space-y-2 text-sm text-yellow-700">
        <li class="flex items-start">
          <svg class="w-4 h-4 mr-2 mt-0.5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          You can choose your tax regime annually while filing returns
        </li>
        <li class="flex items-start">
          <svg class="w-4 h-4 mr-2 mt-0.5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Senior citizens (60+) get higher basic exemption in old regime
        </li>
        <li class="flex items-start">
          <svg class="w-4 h-4 mr-2 mt-0.5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          This calculator provides an estimate. Consult a tax professional for complex cases
        </li>
        <li class="flex items-start">
          <svg class="w-4 h-4 mr-2 mt-0.5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Tax rates and slabs may change with budget announcements
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
// This component is purely presentational
</script>
