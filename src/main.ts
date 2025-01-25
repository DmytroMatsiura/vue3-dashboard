import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'
import vuetify from '@/plugins/vuetify'
import setupInterceptors from '@/services/api/axios.interceptors'

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

app.mount('#app')
