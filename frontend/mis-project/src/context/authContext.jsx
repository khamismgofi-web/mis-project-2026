import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const AuthContext = createContext(undefined)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedUser = window.localStorage.getItem('misUser')
    let parsedUser = null

    try {
      parsedUser = storedUser ? JSON.parse(storedUser) : null
    } catch (error) {
      parsedUser = null
    }

    setUser(parsedUser)
    setLoading(false)
  }, [])

  const value = useMemo(() => ({ user, setUser, loading }), [user, loading])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
