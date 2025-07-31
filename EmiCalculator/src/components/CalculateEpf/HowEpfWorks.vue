<template>
  <div class="mt-8">
    <card-layout>
      <template #title>
        <h3 class="text-xl font-bold text-slate-800 dark:text-slate-200">How EPF Works</h3>
      </template>

      <template #content>
        <div class="prose prose-slate dark:prose-invert max-w-none">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Left Column -->
            <div class="space-y-6">
              <div>
                <h4 class="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">
                  What is EPF?
                </h4>
                <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Employee Provident Fund (EPF) is a retirement savings scheme managed by the
                  Employees' Provident Fund Organisation (EPFO). It's mandatory for organizations
                  with 20 or more employees and provides financial security for employees after
                  retirement.
                </p>
              </div>

              <div>
                <h4 class="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">
                  Key Features
                </h4>
                <ul class="space-y-2 text-slate-600 dark:text-slate-400">
                  <li class="flex items-start">
                    <span class="text-blue-500 mr-2">•</span>
                    <span
                      >Mandatory contribution: 12% of basic salary from both employee and
                      employer</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-500 mr-2">•</span>
                    <span>Tax-exempt under Section 80C (up to ₹1.5 lakh per year)</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-500 mr-2">•</span>
                    <span
                      >Interest rate is declared annually by EPFO (currently 8.25% for FY
                      2023-24)</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-500 mr-2">•</span>
                    <span>Withdrawal allowed after age 58 or in specific circumstances</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 class="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">
                  Contribution Structure
                </h4>
                <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <div class="space-y-2 text-sm">
                    <div class="flex justify-between">
                      <span class="text-slate-600 dark:text-slate-400">Employee Contribution:</span>
                      <span class="font-medium text-slate-800 dark:text-slate-200"
                        >12% of Basic Salary</span
                      >
                    </div>
                    <div class="flex justify-between">
                      <span class="text-slate-600 dark:text-slate-400">Employer Contribution:</span>
                      <span class="font-medium text-slate-800 dark:text-slate-200"
                        >12% of Basic Salary</span
                      >
                    </div>
                    <div class="border-t border-blue-200 dark:border-blue-700 pt-2">
                      <div class="flex justify-between font-semibold">
                        <span class="text-slate-700 dark:text-slate-300"
                          >Total Monthly Contribution:</span
                        >
                        <span class="text-blue-600 dark:text-blue-400">24% of Basic Salary</span>
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
                  Benefits of EPF
                </h4>
                <ul class="space-y-2 text-slate-600 dark:text-slate-400">
                  <li class="flex items-start">
                    <span class="text-green-500 mr-2">✓</span>
                    <span>Guaranteed returns with government backing</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-green-500 mr-2">✓</span>
                    <span>Tax benefits on contributions and maturity amount</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-green-500 mr-2">✓</span>
                    <span>Employer contribution doubles your savings</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-green-500 mr-2">✓</span>
                    <span>Partial withdrawal allowed for specific purposes</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-green-500 mr-2">✓</span>
                    <span>Nominee facility available for beneficiaries</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 class="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">
                  Withdrawal Rules
                </h4>
                <div class="space-y-3">
                  <div class="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                    <h5 class="font-medium text-green-700 dark:text-green-300 mb-1">
                      Full Withdrawal
                    </h5>
                    <p class="text-sm text-green-600 dark:text-green-400">
                      After age 58, unemployment for 60+ days, or retirement
                    </p>
                  </div>
                  <div class="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg">
                    <h5 class="font-medium text-yellow-700 dark:text-yellow-300 mb-1">
                      Partial Withdrawal
                    </h5>
                    <p class="text-sm text-yellow-600 dark:text-yellow-400">
                      For home purchase, medical emergencies, marriage, education
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
                      <span>EPF interest rates are subject to change annually</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-amber-500 mr-2">⚠</span>
                      <span
                        >Contribution ceiling: ₹15,000 per month (on salary up to ₹1,25,000)</span
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
