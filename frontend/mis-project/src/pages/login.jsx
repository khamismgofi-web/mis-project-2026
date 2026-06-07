import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'
import './login.css'

function Login() {
  const navigate = useNavigate()
  const { user, setUser } = useAuth()
  const emailRef = useRef(null)
  const [isSignup, setIsSignup] = useState(false)
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
      <div className="login-stage">
        <header className="login-header">
          <div className="header-brand">
            <span className="brand-mark">EP</span>
            <span className="brand-name">MIS</span>
          </div>
          <nav className="header-nav">
            <a href="#">Home</a>
            <a href="#">Our products</a>
            <a href="#">About us</a>
            <a href="#">Contact us</a>
          </nav>
          <button
            type="button"
            className="header-signin-button"
            onClick={() => {
              setIsSignup(false)
              emailRef.current?.focus()
            }}
          >
            Sign in
          </button>
        </header>

        <main className="login-card">
          <section className="login-panel login-form-panel">
            <div className="tab-row">
              <button
                type="button"
                className={`tab ${!isSignup ? 'active' : ''}`}
                onClick={() => setIsSignup(false)}
              >
                Login
              </button>
              <button
                type="button"
                className={`tab ${isSignup ? 'active' : ''}`}
                onClick={() => setIsSignup(true)}
              >
                Sign up
              </button>
            </div>

            <div className="login-copy-block">
              <h1 className="login-title">{isSignup ? 'Create your account' : 'Welcome back'}</h1>
              <p className="login-copy">
                {isSignup
                  ? 'Sign up for access to attendance, reports, and your employee dashboard.'
                  : 'Sign in to your account to manage attendance, view reports, and access your employee dashboard.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email address
                </label>
                <div className="input-pill">
                  <span className="input-icon">📧</span>
                  <input
                    id="email"
                    ref={emailRef}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <div className="input-pill">
                  <span className="input-icon">🔒</span>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="form-input"
                    required
                  />
                </div>
              </div>

              {error && <p className="login-error-text">{error}</p>}

              <button type="submit" className="primary-button">
                {isSignup ? 'Create account' : 'Login'}
              </button>

              <p className="forgot-text">
                {isSignup
                  ? 'Already have an account? '
                  : 'Forgot your password? '}
                <button type="button" className="forgot-link" onClick={() => setIsSignup(!isSignup)}>
                  {isSignup ? 'Sign in' : 'Create account'}
                </button>
              </p>
            </form>
          </section>

          <section className="login-panel login-visual-panel">
            <div className="visual-shapes">
              <span className="shape large" />
              <span className="shape medium" />
            </div>
            <div className="visual-content">
              <div className="pc-scene">
                <div className="pc-monitor">
                  <div className="monitor-top">
                    <span className="monitor-light" />
                    <span className="monitor-light" />
                    <span className="monitor-light" />
                  </div>
                  <div className="monitor-screen">
                    <div className="screen-header">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="screen-card">
                      <div className="card-line short" />
                      <div className="card-line medium" />
                      <div className="card-line long" />
                    </div>
                    <div className="screen-grid">
                      <div className="grid-cell" />
                      <div className="grid-cell" />
                      <div className="grid-cell" />
                    </div>
                    <div className="screen-chart">
                      <span className="chart-bar tall" />
                      <span className="chart-bar medium" />
                      <span className="chart-bar short" />
                    </div>
                  </div>
                </div>
                <div className="pc-base" />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Login
