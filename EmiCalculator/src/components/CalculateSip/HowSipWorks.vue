<template>
  <div class="px-4 py-8 space-y-4 text-gray-800 w-full max-w-screen-lg mx-auto">
    <!-- Accordion: What is SIP -->
    <details class="group border border-gray-200 rounded-md overflow-hidden">
      <summary
        class="cursor-pointer text-lg font-semibold text-black px-4 py-2 bg-gray-100 transition-all duration-300 group-open:bg-gray-200 group-open:shadow-md"
      >
        What is SIP (Systematic Investment Plan)?
      </summary>
      <div
        class="px-4 py-2 transition-all duration-300 group-open:max-h-screen max-h-0 overflow-hidden"
      >
        <p class="text-base leading-relaxed mb-4">
          SIP is a disciplined way of investing in mutual funds where you invest a fixed amount
          regularly at predetermined intervals (monthly, quarterly, etc.). It helps in:
        </p>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong class="text-gray-900">Rupee Cost Averaging:</strong> Buy more units when prices
            are low and fewer when prices are high.
          </li>
          <li>
            <strong class="text-gray-900">Power of Compounding:</strong> Your returns generate
            further returns over time.
          </li>
          <li>
            <strong class="text-gray-900">Disciplined Investing:</strong> Develops a regular saving
            and investing habit.
          </li>
          <li>
            <strong class="text-gray-900">Flexibility:</strong> Start with as low as ₹500 per month
            and can be modified anytime.
          </li>
        </ul>
      </div>
    </details>

    <!-- Accordion: Benefits of SIP -->
    <details class="group border border-gray-200 rounded-md overflow-hidden">
      <summary
        class="cursor-pointer text-lg font-semibold text-black px-4 py-2 bg-gray-100 transition-all duration-300 group-open:bg-gray-200 group-open:shadow-md"
      >
        Benefits of SIP Investment
      </summary>
      <div
        class="px-4 py-2 transition-all duration-300 group-open:max-h-screen max-h-0 overflow-hidden"
      >
        <p class="text-base leading-relaxed mb-4">
          SIP offers multiple advantages for long-term wealth creation:
        </p>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li>Start investing with a small amount (minimum ₹500)</li>
          <li>No need to time the market - invest regularly regardless of market conditions</li>
          <li>Reduces the impact of market volatility through rupee cost averaging</li>
          <li>Builds long-term wealth through the power of compounding</li>
          <li>
            Tax benefits under <strong class="text-gray-900">Section 80C</strong> for ELSS SIPs
          </li>
          <li>Easy to start, modify, or stop through online platforms</li>
          <li>Professional fund management by experienced fund managers</li>
        </ul>
      </div>
    </details>

    <!-- Accordion: SIP Calculation Formula -->
    <details class="group border border-gray-200 rounded-md overflow-hidden">
      <summary
        class="cursor-pointer text-lg font-semibold text-black px-4 py-2 bg-gray-100 transition-all duration-300 group-open:bg-gray-200 group-open:shadow-md"
      >
        How SIP Returns are Calculated
      </summary>
      <div
        class="px-4 py-2 transition-all duration-300 group-open:max-h-screen max-h-0 overflow-hidden"
      >
        <p class="text-base leading-relaxed mb-4">
          SIP returns are calculated using the future value of annuity formula:
        </p>
        <div class="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 mb-4">
          FV = PMT × [((1 + r)<sup>n</sup> - 1) / r] × (1 + r)
        </div>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li><strong class="text-gray-900">FV</strong> = Future Value (Maturity Amount)</li>
          <li><strong class="text-gray-900">PMT</strong> = Monthly SIP Amount</li>
          <li>
            <strong class="text-gray-900">r</strong> = Monthly Rate of Return (Annual Rate ÷ 12)
          </li>
          <li><strong class="text-gray-900">n</strong> = Total Number of Payments (Months)</li>
        </ul>
        <p class="mt-4 text-base text-gray-700">
          This formula assumes that returns are compounded monthly and helps estimate the potential
          growth of your SIP investments.
        </p>
      </div>
    </details>

    <!-- Accordion: SIP Investment Tips -->
    <details class="group border border-gray-200 rounded-md overflow-hidden">
      <summary
        class="cursor-pointer text-lg font-semibold text-black px-4 py-2 bg-gray-100 transition-all duration-300 group-open:bg-gray-200 group-open:shadow-md"
      >
        SIP Investment Tips & Best Practices
      </summary>
      <div
        class="px-4 py-2 transition-all duration-300 group-open:max-h-screen max-h-0 overflow-hidden"
      >
        <p class="text-base leading-relaxed mb-4">
          Follow these best practices to maximize your SIP returns:
        </p>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong class="text-gray-900">Start Early:</strong> The earlier you start, the more you
            benefit from compounding.
          </li>
          <li>
            <strong class="text-gray-900">Stay Consistent:</strong> Continue your SIP even during
            market downturns.
          </li>
          <li>
            <strong class="text-gray-900">Increase SIP Amount:</strong> Step up your SIP annually
            with salary increments.
          </li>
          <li>
            <strong class="text-gray-900">Choose Right Funds:</strong> Select funds based on your
            risk tolerance and goals.
          </li>
          <li>
            <strong class="text-gray-900">Long-term Horizon:</strong> Invest for at least 5-7 years
            to see significant results.
          </li>
          <li>
            <strong class="text-gray-900">Review Regularly:</strong> Monitor fund performance
            annually and make changes if needed.
          </li>
        </ul>
      </div>
    </details>
  </div>
</template>
