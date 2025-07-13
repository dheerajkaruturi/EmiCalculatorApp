<template>
  <div class="h-screen">
    <!-- Mobile Menu Button -->
    <button
      v-if="!isSidebarOpen"
      @click="toggleSidebar"
      class="fixed top-4 left-4 z-50 p-2 rounded-md bg-blue-600 text-white shadow-lg lg:hidden"
      aria-label="Toggle navigation"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
    </button>

    <!-- Overlay for mobile -->
    <div
      v-if="isSidebarOpen"
      @click="closeSidebar"
      class="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
    ></div>

    <!-- Sidebar -->
    <div
      :class="[
        'bg-white shadow-xl transition-transform duration-300 ease-in-out flex flex-col h-full',
        // Mobile: Fixed overlay when open, hidden when closed
        'fixed inset-y-0 left-0 z-50 w-full transform lg:transform-none',
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full',
        // Desktop: Always visible with fixed width, relative positioning
        'lg:translate-x-0 lg:w-80 lg:relative lg:shadow-none lg:border-r lg:border-gray-200 lg:z-auto',
      ]"
    >
      <!-- Header -->
      <div class="p-6 border-b border-gray-200 bg-gray-900 flex-shrink-0">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              ></path>
            </svg>
            <h1 class="text-xl font-bold text-white">CalcuFin</h1>
          </div>
          <button
            @click="closeSidebar"
            class="p-1 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 lg:hidden"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <p class="text-gray-300 text-sm mt-2">Choose your calculator</p>
      </div>

      <!-- Navigation Items -->
      <nav class="flex-1 overflow-y-auto py-4">
        <div class="px-4 space-y-2">
          <a
            v-for="item in navigationItems"
            :key="item.id"
            @click="selectCalculator(item)"
            :class="[
              'flex items-center px-4 py-3 text-gray-700 rounded-lg transition-colors duration-200 cursor-pointer group',
              activeCalculator === item.id
                ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600'
                : 'hover:bg-gray-50 hover:text-gray-900',
            ]"
          >
            <component :is="item.icon" class="w-5 h-5 mr-3 flex-shrink-0" />
            <div class="flex-1">
              <div class="font-medium">{{ item.name }}</div>
              <div class="text-sm text-gray-500 group-hover:text-gray-900">
                {{ item.description }}
              </div>
            </div>
            <svg
              v-if="activeCalculator === item.id"
              class="w-4 h-4 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </nav>

      <!-- Footer -->
      <div class="p-4 border-t border-gray-200 bg-gray-50 flex-shrink-0">
        <div class="text-xs text-gray-500 text-center">
          <p>Made with ❤️</p>
          <p class="mt-1">© {{ currentYear }} Financial Calculator App - CalcuFin ✌🏼</p>
          <p class="mt-1">v1.0.0</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'SideNavigation',
  setup() {
    const isSidebarOpen = ref(false)
    const activeCalculator = ref('emi')

    const navigationItems = ref([
      {
        id: 'emi',
        name: 'EMI Calculator',
        description: 'Calculate your Loan EMI',
        icon: 'CreditCardIcon',
      },
      {
        id: 'sip',
        name: 'SIP Calculator',
        description: 'Systematic Investment Plan',
        icon: 'TrendingUpIcon',
      },
      {
        id: 'swp',
        name: 'SWP Calculator',
        description: 'Systematic Withdrawal Plan',
        icon: 'ArrowDownIcon',
      },
      {
        id: 'income-tax',
        name: 'Income Tax Calculator',
        description: 'Calculate tax liability',
        icon: 'ReceiptTaxIcon',
      },
      {
        id: 'epf',
        name: 'EPF Calculator',
        description: 'Employee Provident Fund',
        icon: 'ShieldCheckIcon',
      },
      {
        id: 'ppf',
        name: 'PPF Calculator',
        description: 'Public Provident Fund',
        icon: 'LockClosedIcon',
      },
    ])

    const toggleSidebar = () => {
      isSidebarOpen.value = !isSidebarOpen.value
    }

    const closeSidebar = () => {
      isSidebarOpen.value = false
    }

    const selectCalculator = (item) => {
      activeCalculator.value = item.id
      // Close sidebar on mobile after selection
      if (window.innerWidth <= 768) {
        closeSidebar()
      }
      // Emit event for parent component
      console.log('Selected calculator:', item.name)
    }

    const currentYear = computed(() => {
      return new Date().getFullYear()
    })

    return {
      isSidebarOpen,
      activeCalculator,
      navigationItems,
      toggleSidebar,
      closeSidebar,
      selectCalculator,
      currentYear,
    }
  },
  components: {
    CreditCardIcon: {
      template: `
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
        </svg>
      `,
    },
    TrendingUpIcon: {
      template: `
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
        </svg>
      `,
    },
    ReceiptTaxIcon: {
      template: `
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      `,
    },
    ShieldCheckIcon: {
      template: `
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      `,
    },
    LockClosedIcon: {
      template: `
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
        </svg>
      `,
    },
    ArrowDownIcon: {
      template: `
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      `,
    },
  },
}
</script>

<style scoped>
.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>
