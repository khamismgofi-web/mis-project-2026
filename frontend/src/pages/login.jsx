import React, { useState } from 'react'
import axios from 'axios'

const API_BASE_URL = 'http://127.0.0.1:8000'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [isSignup, setIsSignup] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setLoading(true)

    try {
      if (isSignup) {
        await axios.post(`${API_BASE_URL}/auth/register`, {
          username: username.trim(),
          email: email.trim().toLowerCase(),
          password,
        })
      }

      const loginResponse = await axios.post(
        `${API_BASE_URL}/auth/login`,
        new URLSearchParams({
          username: email.trim().toLowerCase(),
          password,
        }).toString(),
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        }
      )

      localStorage.setItem('token', loginResponse.data.access_token)
      localStorage.setItem('user', JSON.stringify(loginResponse.data))
      setError('')
      alert('Connected to backend successfully!')
    } catch (err) {
      setError(err?.response?.data?.detail || err?.message || 'Authentication failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ maxWidth: 420, margin: '40px auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>{isSignup ? 'Sign up' : 'Login'}</h2>

      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 12 }}>
        {isSignup && (
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        )}

        <input
          type="text"
          placeholder="Email or username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? 'Please wait...' : isSignup ? 'Create account' : 'Login'}
        </button>
      </form>

      <p style={{ marginTop: 12 }}>
        <button type="button" onClick={() => setIsSignup(!isSignup)}>
          {isSignup ? 'Already have an account? Login' : 'Create a new account'}
        </button>
      </p>
    </div>
  )
}
