import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'
import './login.css'

function Login() {
  const navigate = useNavigate()
  const { user, setUser } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (user) {
      navigate(user.role === 'admin' ? '/admin-dashboard' : '/employee-dashboard', { replace: true })
    }
  }, [user, navigate])

  const handleSubmit = (event) => {
    event.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Email and password are required.')
      return
    }

    const normalizedEmail = email.trim().toLowerCase()
    const userRole = normalizedEmail.includes('admin') ? 'admin' : 'employee'
    const loggedInUser = {
      name: normalizedEmail.split('@')[0] || 'User',
      email: normalizedEmail,
      role: userRole,
    }

    window.localStorage.setItem('misUser', JSON.stringify(loggedInUser))
    setUser(loggedInUser)
    navigate(userRole === 'admin' ? '/admin-dashboard' : '/employee-dashboard', { replace: true })
  }

  return (
    <div className="login-page-wrapper">
      <div className="login-card-box">
        <div className="login-header-group">
          <h2 className="login-main-title">Employee Management</h2>
          <p className="login-sub-title">Sign in to your account to continue.</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form-element">
          <div className="form-input-field">
            <label className="form-field-label" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              className="form-text-input"
              required
            />
          </div>

          <div className="form-input-field">
            <label className="form-field-label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="form-text-input"
              required
            />
          </div>

          {error && <p className="login-error-text">{error}</p>}

          <button type="submit" className="login-submit-button">
            Sign in
          </button>
        </form>

        <p className="login-footer-note">
          Use an email containing <strong>admin</strong> to sign in as administrator.
        </p>
      </div>
    </div>
  )
}

export default Login
