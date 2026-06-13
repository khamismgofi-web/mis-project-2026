import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const AuthContext = createContext(undefined)
const STORAGE_KEY = 'misAuth'

const createUserFromEmail = (email) => {
  const normalizedEmail = email?.trim().toLowerCase() || ''
  const name = normalizedEmail.split('@')[0] || 'User'
  const role = normalizedEmail.includes('admin') ? 'admin' : 'employee'
  return { name, email: normalizedEmail, role }
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [tokenType, setTokenType] = useState('Bearer')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedAuth = window.localStorage.getItem(STORAGE_KEY) || window.localStorage.getItem('misUser')
    if (storedAuth) {
      try {
        const parsed = JSON.parse(storedAuth)

        if (parsed?.token && parsed?.token_type && parsed?.user) {
          setUser(parsed.user)
          setToken(parsed.token)
          setTokenType(parsed.token_type)
        } else if (parsed?.email) {
          setUser(createUserFromEmail(parsed.email))
        }
      } catch (error) {
        console.warn('Failed to parse stored auth', error)
      }
    }

    setLoading(false)
  }, [])

  const login = (userData, authToken) => {
    setUser(userData)
    setToken(authToken.access_token)
    setTokenType(authToken.token_type || 'Bearer')

    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        user: userData,
        token: authToken.access_token,
        token_type: authToken.token_type || 'Bearer',
      })
    )
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    setTokenType('Bearer')
    window.localStorage.removeItem(STORAGE_KEY)
    window.localStorage.removeItem('misUser')
  }

  const value = useMemo(
    () => ({ user, token, tokenType, loading, login, logout }),
    [user, token, tokenType, loading]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
