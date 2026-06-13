import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'
import { login as apiLogin, getCurrentUser as apiGetCurrentUser } from '../api/auth'
import './login.css'

function Login() {
  const navigate = useNavigate()
  const { user, login: authLogin } = useAuth()
  const emailRef = useRef(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [resetMessage, setResetMessage] = useState('')

  useEffect(() => {
    if (user) {
      navigate(user.role === 'admin' ? '/admin-dashboard' : '/employee-dashboard', { replace: true })
    }
  }, [user, navigate])

  const getErrorMessage = (error) => {
    const data = error?.response?.data
    const detail = data?.detail ?? data?.message

    if (Array.isArray(detail)) {
      return detail
        .map((item) => {
          if (typeof item === 'string') return item
          if (item?.msg) return item.msg
          return JSON.stringify(item)
        })
        .join('; ')
    }

    if (typeof detail === 'string') {
      return detail
    }

    if (typeof detail === 'object' && detail !== null) {
      return JSON.stringify(detail)
    }

    return error?.message || 'Unable to sign in. Please try again.'
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setResetMessage('')

    if (!email || !password) {
      setError('Email and password are required.')
      return
    }

    const normalizedEmail = email.trim().toLowerCase()

    try {
      const tokenResponse = await apiLogin(normalizedEmail, password)

      try {
        window.localStorage.setItem(
          'misAuth',
          JSON.stringify({ token: tokenResponse.access_token, token_type: tokenResponse.token_type || 'Bearer' })
        )
      } catch (storageError) {
        console.warn('Unable to persist token before fetching user', storageError)
      }

      const apiUser = await apiGetCurrentUser()
      const loggedInUser = {
        ...apiUser,
        name: apiUser.username || normalizedEmail.split('@')[0],
        role: apiUser.is_admin ? 'admin' : 'employee',
      }

      authLogin(loggedInUser, tokenResponse)
      navigate(loggedInUser.role === 'admin' ? '/admin-dashboard' : '/employee-dashboard', { replace: true })
    } catch (error) {
      setError(getErrorMessage(error))
    }
  }

  const handleForgotPassword = () => {
    setResetMessage('If this email exists, password reset instructions will be sent.')
  }

  return (
    <div className="login-page-container">
      <div className="login-card">
        <h2>Welcome Back</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              ref={emailRef}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              className="field-input"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="field-input"
              required
            />
          </div>

          <a
            href="#"
            className="forgot-password-link"
            onClick={(e) => {
              e.preventDefault()
              handleForgotPassword()
            }}
          >
            Forgot Password?
          </a>

          {resetMessage && <p className="feedback-text">{resetMessage}</p>}
          {error && <p className="error-text">{error}</p>}

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
