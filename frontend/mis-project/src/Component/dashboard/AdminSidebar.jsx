import React from 'react'
import { NavLink } from 'react-router-dom'

const menuItems = [
  { label: 'Dashboard', to: '/admin-dashboard' },
  { label: 'Employees', to: '/admin-dashboard' },
  { label: 'Departments', to: '/admin-dashboard' },
  { label: 'Leave', to: '/admin-dashboard' },
  { label: 'Payroll', to: '/admin-dashboard' },
]

const AdminSidebar = () => {
  return (
    <aside className="fixed left-0 top-0 z-10 h-screen w-64 bg-slate-950 text-slate-100 shadow-xl">
      <div className="py-8 text-center">
        <h3 className="text-2xl font-semibold">Employee MS</h3>
      </div>
      <div className="space-y-2 px-4">
        {menuItems.map(({ label, to }) => (
          <NavLink
            key={label}
            to={to}
            className={({ isActive }) =>
              `block rounded-2xl px-4 py-3 text-sm font-medium transition ${
                isActive ? 'bg-sky-600 text-white' : 'text-slate-300 hover:bg-slate-800'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
    </aside>
  )
}

export default AdminSidebar
