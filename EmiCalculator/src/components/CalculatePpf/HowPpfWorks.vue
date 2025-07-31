<template>
  <div class="mt-8">
    <card-layout>
      <template #title>
        <h3 class="text-xl font-bold text-slate-800 dark:text-slate-200">How PPF Works</h3>
      </template>

      <template #content>
        <div class="prose prose-slate dark:prose-invert max-w-none">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Left Column -->
            <div class="space-y-6">
              <div>
                <h4 class="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">
                  What is PPF?
                </h4>
                <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Public Provident Fund (PPF) is a long-term investment scheme backed by the
                  Government of India. It offers attractive returns with complete tax benefits and
                  is one of the best investment options for building long-term wealth while saving
                  taxes.
                </p>
              </div>

              <div>
                <h4 class="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">
                  Key Features
                </h4>
                <ul class="space-y-2 text-slate-600 dark:text-slate-400">
                  <li class="flex items-start">
                    <span class="text-blue-500 mr-2">•</span>
                    <span>Minimum investment: ₹500 per year, Maximum: ₹1,50,000 per year</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-500 mr-2">•</span>
                    <span>Lock-in period: 15 years (extendable in blocks of 5 years)</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-500 mr-2">•</span>
                    <span>Triple tax benefit: EEE (Exempt-Exempt-Exempt)</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-500 mr-2">•</span>
                    <span>Current interest rate: 7.1% per annum (FY 2023-24)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 class="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">
                  Investment Limits
                </h4>
                <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <div class="space-y-2 text-sm">
                    <div class="flex justify-between">
                      <span class="text-slate-600 dark:text-slate-400"
                        >Minimum Annual Investment:</span
                      >
                      <span class="font-medium text-slate-800 dark:text-slate-200">₹500</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-slate-600 dark:text-slate-400"
                        >Maximum Annual Investment:</span
                      >
                      <span class="font-medium text-slate-800 dark:text-slate-200">₹1,50,000</span>
                    </div>
                    <div class="border-t border-blue-200 dark:border-blue-700 pt-2">
                      <div class="flex justify-between font-semibold">
                        <span class="text-slate-700 dark:text-slate-300">Minimum Tenure:</span>
                        <span class="text-blue-600 dark:text-blue-400">15 Years</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Column -->
            <div class="space-y-6">
              <div>
                <h4 class="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">
                  Triple Tax Benefits
                </h4>
                <ul class="space-y-2 text-slate-600 dark:text-slate-400">
                  <li class="flex items-start">
                    <span class="text-green-500 mr-2">✓</span>
                    <span
                      ><strong>Investment:</strong> Tax deduction under Section 80C up to ₹1.5
                      lakh</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="text-green-500 mr-2">✓</span>
                    <span
                      ><strong>Interest:</strong> Annual interest earned is completely
                      tax-free</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="text-green-500 mr-2">✓</span>
                    <span><strong>Maturity:</strong> Entire maturity amount is tax-free</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 class="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">
                  Withdrawal & Loan Rules
                </h4>
                <div class="space-y-3">
                  <div class="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                    <h5 class="font-medium text-green-700 dark:text-green-300 mb-1">
                      Partial Withdrawal
                    </h5>
                    <p class="text-sm text-green-600 dark:text-green-400">
                      After 7 years: Up to 50% of balance for specific purposes
                    </p>
                  </div>
                  <div class="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                    <h5 class="font-medium text-blue-700 dark:text-blue-300 mb-1">Loan Facility</h5>
                    <p class="text-sm text-blue-600 dark:text-blue-400">
                      From 3rd to 6th year: Up to 25% of balance at 1% interest
                    </p>
                  </div>
                  <div class="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                    <h5 class="font-medium text-purple-700 dark:text-purple-300 mb-1">
                      Full Withdrawal
                    </h5>
                    <p class="text-sm text-purple-600 dark:text-purple-400">
                      After 15 years: Complete amount is tax-free
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 class="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">
                  Important Notes
                </h4>
                <div class="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                  <ul class="space-y-2 text-sm text-amber-700 dark:text-amber-300">
                    <li class="flex items-start">
                      <span class="text-amber-500 mr-2">⚠</span>
                      <span>PPF interest rates are reviewed annually by the government</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-amber-500 mr-2">⚠</span>
                      <span>Only one PPF account per individual is allowed</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-amber-500 mr-2">⚠</span>
                      <span
                        >Premature closure allowed only in specific circumstances with penalty</span
                      >
                    </li>
                    <li class="flex items-start">
                      <span class="text-amber-500 mr-2">⚠</span>
                      <span>This calculator provides estimates. Actual returns may vary</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </card-layout>
  </div>
</template>

<script setup>
import CardLayout from '../CardLayout.vue'
</script>
