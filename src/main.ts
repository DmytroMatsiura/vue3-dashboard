import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'
import vuetify from '@/plugins/vuetify'
import setupInterceptors from '@/services/api/axios.interceptors'

import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify'

import '@/assets/scss/main.scss'

import { makeServer } from '@/server'
if (import.meta.env.DEV) {
  makeServer()
}

setupInterceptors()

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(vuetify)
app.use(Vue3Toastify, {
  autoClose: 3000,
} as ToastContainerOptions)

app.mount('#app')
