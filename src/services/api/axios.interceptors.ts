import { useAuthStore } from '@/stores/auth'
import axiosInstance from './api'

const setup = () => {
  axiosInstance.interceptors.request.use(
    (config) => {
      const authStore = useAuthStore()
      const token = authStore.token
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    },
  )

  axiosInstance.interceptors.response.use(
    (res) => {
      return res
    },
    async (err) => {
      return Promise.reject(err)
    },
  )
}

export default setup
