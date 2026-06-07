import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'
import './login.css'
import bgImage from '../assets/login-bg.jpg'

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

  const customBgStyle = {
    backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.65), rgba(15, 23, 42, 0.65)), url(${bgImage})`,
  }

  return (
    <div className="login-page-wrapper" style={customBgStyle}>
      <div className="login-card-box">
        {/* Login header */}
        <div className="login-header-group">
          <h2 className="login-main-title">Employee Management System</h2>
          <p className="login-sub-title">Enter your credentials to continue.</p>
        </div>

        {/* Login form */}
        <form onSubmit={handleSubmit} className="login-form-element">
          <div className="form-input-field">
            <label className="form-field-label">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              className="form-text-input"
              required
            />
          </div>

          <div className="form-input-field">
            <label className="form-field-label">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="form-text-input"
              required
            />
          </div>

          {error && <p className="text-sm text-red-300 mb-4">{error}</p>}

          <button type="submit" className="login-submit-button">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
