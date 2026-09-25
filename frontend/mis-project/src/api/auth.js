import client from './client'

export const login = async (email, password) => {
  const response = await client.post('/auth/login', { email, password })
  return response.data
}

export const register = async (payload) => {
  const response = await client.post('/auth/register', payload)
  return response.data
}

export const getCurrentUser = async () => {
  const response = await client.get('/auth/me')
  return response.data
}
