<template>
  <div class="px-4 py-8 space-y-4 text-gray-800 w-full max-w-screen-lg mx-auto">
    <!-- Accordion: Factors Affecting Due Amount -->
    <details class="group border border-gray-200 rounded-md overflow-hidden">
      <summary
        class="cursor-pointer text-lg font-semibold text-black px-4 py-2 bg-gray-100 transition-all duration-300 group-open:bg-gray-200 group-open:shadow-md"
      >
        Factors Affecting Your Loan Due Amount
      </summary>
      <div
        class="px-4 py-2 transition-all duration-300 group-open:max-h-screen max-h-0 overflow-hidden"
      >
        <p class="text-base leading-relaxed mb-4">
          Before applying for a loan, it’s important to understand what impacts your EMI (Equated
          Monthly Installment). Here's what to consider:
        </p>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong class="text-gray-900">Loan Tenure:</strong> Longer tenures reduce EMI but
            increase total interest. Shorter tenures do the opposite.
          </li>
          <li>
            <strong class="text-gray-900">Rate of Interest:</strong> Lower interest rates reduce
            your EMI. Compare loans and pick the most favorable rate.
          </li>
          <li>
            <strong class="text-gray-900">Loan Amount:</strong> Higher loan amounts result in higher
            EMIs. Choose an amount that fits your repayment capacity.
          </li>
        </ul>
      </div>
    </details>

    <!-- Accordion: EMI Calculator Benefits -->
    <details class="group border border-gray-200 rounded-md overflow-hidden">
      <summary
        class="cursor-pointer text-lg font-semibold text-black px-4 py-2 bg-gray-100 transition-all duration-300 group-open:bg-gray-200 group-open:shadow-md"
      >
        How an Online EMI Calculator Can Help
      </summary>
      <div
        class="px-4 py-2 transition-all duration-300 group-open:max-h-screen max-h-0 overflow-hidden"
      >
        <p class="text-base leading-relaxed mb-4">
          With over 107 million credit accounts by FY18 and growing fast, it’s essential to plan
          your EMI using a calculator.
        </p>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li>Quickly estimate your EMI with precision.</li>
          <li>Eliminates manual calculation errors.</li>
          <li>Saves time with instant results.</li>
          <li>Specific for different loan types like home, personal, or vehicle loans.</li>
          <li>
            Helps maintain a
            <strong class="text-gray-900">debt-to-income ratio below 50%</strong>, which improves
            loan approval chances.
          </li>
        </ul>
      </div>
    </details>

    <!-- Accordion: EMI Formula -->
    <details class="group border border-gray-200 rounded-md overflow-hidden">
      <summary
        class="cursor-pointer text-lg font-semibold text-black px-4 py-2 bg-gray-100 transition-all duration-300 group-open:bg-gray-200 group-open:shadow-md"
      >
        EMI Calculation Formula
      </summary>
      <div
        class="px-4 py-2 transition-all duration-300 group-open:max-h-screen max-h-0 overflow-hidden"
      >
        <p class="text-base leading-relaxed mb-4">
          Online calculators (like Groww) use the following standard formula:
        </p>
        <div class="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 mb-4">
          EMI = [P × R × (1+R)<sup>N</sup>] / [(1+R)<sup>N</sup> - 1]
        </div>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li><strong class="text-gray-900">P</strong> = Principal Loan Amount</li>
          <li><strong class="text-gray-900">R</strong> = Rate of Interest (monthly)</li>
          <li><strong class="text-gray-900">N</strong> = Loan Tenure (in months)</li>
        </ul>
        <p class="mt-4 text-base text-gray-700">
          This formula gives you a clear view of your repayment structure and how each factor
          contributes to your EMI.
        </p>
      </div>
    </details>
  </div>
</template>
