import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

client.interceptors.request.use((config) => {
  if (!config.headers) {
    config.headers = {}
  }

  try {
    const storedAuth = window.localStorage.getItem('misAuth')
    if (storedAuth) {
      const auth = JSON.parse(storedAuth)
      const token = auth?.token
      const tokenType = auth?.token_type || 'Bearer'
      if (token) {
        config.headers.Authorization = `${tokenType.charAt(0).toUpperCase() + tokenType.slice(1)} ${token}`
      }
    }
  } catch (error) {
    console.warn('Unable to attach auth token', error)
  }

  return config
})

export default client
