import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'

import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'

import App from './App.vue'
import CalculateEmi from './components/CalculateEmi/CalculateEmi.vue'

// Define routes
const routes = [
  {
    path: '/',
    redirect: '/emi',
  },
  {
    path: '/emi',
    name: 'EMI Calculator',
    component: CalculateEmi,
  },
  {
    path: '/sip',
    name: 'SIP Calculator',
    component: () => import('./components/CalculateSip/SipCalculator.vue'),
  },
  {
    path: '/swp',
    name: 'SWP Calculator',
    component: () => import('./components/CalculateSwp/SwpCalculator.vue'),
  },
  {
    path: '/income-tax',
    name: 'Income Tax Calculator',
    component: () => import('./components/CalculateIncomeTax/IncomeTaxCalculator.vue'),
  },
  {
    path: '/epf',
    name: 'EPF Calculator',
    component: () => import('./components/CalculateEpf/EpfCalculator.vue'),
  },
  {
    path: '/ppf',
    name: 'PPF Calculator',
    component: () => import('./components/CalculatePpf/PpfCalculator.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/emi',
  },
]

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)

app.use(createPinia())
app.use(VueChartkick)
app.use(router)

app.mount('#app')
