import React from 'react'
import { useAuth } from '../context/authContext'
import AdminSidebar from '../Component/dashboard/AdminSidebar'
import Navibar from '../Component/Navibar'

const AdminDashboard = () => {
  const { user } = useAuth()

  const stats = [
    { label: 'Employees', value: 128, description: 'Active employees in the system' },
    { label: 'Departments', value: 12, description: 'Organized business units' },
    { label: 'Attendance', value: 84, description: 'Today’s recorded attendance' },
    { label: 'Reports', value: 18, description: 'Pending review items' },
  ]

  return (
    <div className="flex min-h-screen bg-slate-100 text-slate-900">
      {/* Sidebar navigation section */}
      <AdminSidebar />

      {/* Main content area */}
      <div className="flex-1 ml-64">
        <Navibar />

        <main className="px-6 py-8 sm:px-10 lg:px-12">
          {/* Page heading and summary */}
          <section className="rounded-[2rem] bg-slate-950 px-8 py-10 shadow-2xl shadow-slate-900/20 text-slate-100">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="inline-flex rounded-full bg-sky-500/15 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
                  Admin dashboard
                </p>
                <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Manage employees, departments, attendance, and reports in one place.
                </h1>
                <p className="mt-4 max-w-2xl text-slate-300 sm:text-lg">
                  Monitor core HR operations with clarity. This dashboard is built to reflect the backend resources for users, employees, departments, attendance, and reports.
                </p>
              </div>
              <div className="grid w-full max-w-sm gap-3 sm:grid-cols-2 lg:w-auto">
                <div className="rounded-3xl bg-slate-900/90 p-5 text-center ring-1 ring-slate-800">
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Active users</p>
                  <p className="mt-3 text-3xl font-semibold text-white">48</p>
                </div>
                <div className="rounded-3xl bg-slate-900/90 p-5 text-center ring-1 ring-slate-800">
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Today checks</p>
                  <p className="mt-3 text-3xl font-semibold text-white">84</p>
                </div>
              </div>
            </div>
          </section>

          {/* KPI cards section */}
          <section className="mt-10 grid gap-6 xl:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="rounded-3xl border border-slate-200/10 bg-white/90 p-6 shadow-lg shadow-slate-200/10 backdrop-blur transition hover:-translate-y-1 hover:shadow-slate-300/20">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                  {item.label}
                </p>
                <p className="mt-5 text-4xl font-bold text-slate-900">{item.value}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            ))}
          </section>

          {/* Backend-aligned action panels */}
          <section className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[2rem] bg-slate-950 p-6 text-slate-100 shadow-2xl shadow-slate-900/20">
              <h2 className="text-xl font-semibold">Employee management</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Add, update, or review employee profiles based on the employee backend service.
              </p>
              <div className="mt-6 space-y-3">
                <button className="w-full rounded-2xl bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
                  View employees
                </button>
                <button className="w-full rounded-2xl border border-slate-700 bg-slate-900/80 px-5 py-3 text-sm text-slate-100 transition hover:border-slate-500">
                  Create employee
                </button>
              </div>
            </div>

            <div className="rounded-[2rem] bg-slate-950 p-6 text-slate-100 shadow-2xl shadow-slate-900/20">
              <h2 className="text-xl font-semibold">Department overview</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Align departments with contact data and business structure from the backend department API.
              </p>
              <div className="mt-6 space-y-3">
                <button className="w-full rounded-2xl bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
                  View departments
                </button>
                <button className="w-full rounded-2xl border border-slate-700 bg-slate-900/80 px-5 py-3 text-sm text-slate-100 transition hover:border-slate-500">
                  Add department
                </button>
              </div>
            </div>

            <div className="rounded-[2rem] bg-slate-950 p-6 text-slate-100 shadow-2xl shadow-slate-900/20">
              <h2 className="text-xl font-semibold">Attendance & reports</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Track attendance and review reports to keep the team aligned with backend attendance and report endpoints.
              </p>
              <div className="mt-6 space-y-3">
                <button className="w-full rounded-2xl bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
                  Mark attendance
                </button>
                <button className="w-full rounded-2xl border border-slate-700 bg-slate-900/80 px-5 py-3 text-sm text-slate-100 transition hover:border-slate-500">
                  Review reports
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default AdminDashboard
