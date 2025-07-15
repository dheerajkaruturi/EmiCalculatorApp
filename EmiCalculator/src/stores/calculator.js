import { defineStore } from 'pinia'

export const useCalculatorStore = defineStore('calculator', {
  state: () => {
    return {
      isEmiCalculatorVisible: false,
      isSipCalculatorVisible: false,
      isSwpCalculatorVisible: false,
      isIncomeCalculatorVisible: false,
      isEpfCalculatorVisible: false,
      isPpfCalculatorVisible: false,
    }
  },
})
