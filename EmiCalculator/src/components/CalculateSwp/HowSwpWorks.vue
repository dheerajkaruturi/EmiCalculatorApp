<template>
  <div class="mt-8 bg-white shadow rounded-lg p-6">
    <h3 class="text-xl font-bold text-gray-800 mb-6">How SWP Works?</h3>

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
            <h4 class="font-semibold text-gray-800 mb-2">Initial Investment</h4>
            <p class="text-gray-600 text-sm">
              You invest a lump sum amount in mutual funds or other investment instruments.
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
            <h4 class="font-semibold text-gray-800 mb-2">Regular Withdrawals</h4>
            <p class="text-gray-600 text-sm">
              You withdraw a fixed amount regularly (monthly/quarterly) from your investment.
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
            <h4 class="font-semibold text-gray-800 mb-2">Remaining Amount Grows</h4>
            <p class="text-gray-600 text-sm">
              The remaining investment continues to generate returns at the expected rate.
            </p>
          </div>
        </div>
      </div>

      <!-- Right Column -->
      <div class="space-y-6">
        <div class="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <h4 class="font-semibold text-blue-800 mb-3">Key Benefits</h4>
          <ul class="space-y-2 text-sm text-blue-700">
            <li class="flex items-center">
              <svg class="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Regular income stream
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Capital appreciation potential
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Flexibility to change withdrawal amount
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Tax efficiency compared to dividends
            </li>
          </ul>
        </div>

        <div class="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
          <h4 class="font-semibold text-yellow-800 mb-3">Important Considerations</h4>
          <ul class="space-y-2 text-sm text-yellow-700">
            <li class="flex items-start">
              <svg
                class="w-4 h-4 mr-2 mt-0.5 text-yellow-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Monitor corpus sustainability regularly
            </li>
            <li class="flex items-start">
              <svg
                class="w-4 h-4 mr-2 mt-0.5 text-yellow-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Market volatility affects returns
            </li>
            <li class="flex items-start">
              <svg
                class="w-4 h-4 mr-2 mt-0.5 text-yellow-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Withdraw only sustainable amounts
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="mt-8 p-4 bg-gray-50 rounded-lg">
      <h4 class="font-semibold text-gray-800 mb-3">SWP Formula</h4>
      <div class="text-sm text-gray-600 space-y-2">
        <p><strong>Monthly Return:</strong> (Annual Return Rate / 12) × Current Balance</p>
        <p><strong>New Balance:</strong> (Current Balance + Monthly Return) - Withdrawal Amount</p>
        <p>
          <strong>Corpus Sustainability:</strong> Number of months the corpus can sustain
          withdrawals
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// This component is purely presentational
</script>
