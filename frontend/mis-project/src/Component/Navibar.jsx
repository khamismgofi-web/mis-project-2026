import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'

const Navibar = () => {
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <div className="flex items-center justify-between h-16 bg-slate-900 px-6 text-slate-100 shadow-sm">
      <p className="text-sm font-medium">Welcome {user?.name ?? 'User'}</p>
      <button
        onClick={handleLogout}
        className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm transition hover:bg-slate-700"
      >
        Logout
      </button>
    </div>
  )
}

export default Navibar
