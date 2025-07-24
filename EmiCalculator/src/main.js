import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'

import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(VueChartkick)

app.mount('#app')
