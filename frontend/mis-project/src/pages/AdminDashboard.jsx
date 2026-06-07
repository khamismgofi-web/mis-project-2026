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
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.14),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.14),transparent_22%),#eff6ff] text-slate-900">
      <div className="flex min-h-screen">
        {/* Sidebar navigation section */}
        <AdminSidebar />

        {/* Main content area */}
        <div className="flex-1 ml-64">
          <Navibar />

          <main className="px-6 py-8 sm:px-10 lg:px-12">
            <div className="mx-auto w-full max-w-7xl space-y-8">
              {/* Page heading and summary */}
              <section className="overflow-hidden rounded-[2rem] bg-white/95 p-8 shadow-[0_40px_90px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/40">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-3xl">
                    <p className="inline-flex rounded-full bg-sky-500/15 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                      Admin dashboard
                    </p>
                    <h1 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                      Manage employees, departments, attendance, and reports in one place.
                    </h1>
                    <p className="mt-4 max-w-2xl text-slate-600 sm:text-lg">
                      Monitor core HR operations with clarity. This dashboard is built to reflect the backend resources for users, employees, departments, attendance, and reports.
                    </p>
                  </div>
                  <div className="grid w-full max-w-sm gap-3 sm:grid-cols-2 lg:w-auto">
                    <div className="rounded-3xl bg-slate-100 p-5 text-center ring-1 ring-slate-200">
                      <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Active users</p>
                      <p className="mt-3 text-3xl font-semibold text-slate-900">48</p>
                    </div>
                    <div className="rounded-3xl bg-slate-100 p-5 text-center ring-1 ring-slate-200">
                      <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Today checks</p>
                      <p className="mt-3 text-3xl font-semibold text-slate-900">84</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* KPI cards section */}
              <section className="grid gap-6 xl:grid-cols-4">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-xl shadow-slate-200/40 transition hover:-translate-y-1 hover:shadow-slate-300/20">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                      {item.label}
                    </p>
                    <p className="mt-5 text-4xl font-bold text-slate-900">{item.value}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                  </div>
                ))}
              </section>

              {/* Backend-aligned action panels */}
              <section className="grid gap-6 lg:grid-cols-3">
                <div className="rounded-[2rem] bg-white/95 p-6 text-slate-900 shadow-[0_26px_60px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/50">
                  <h2 className="text-xl font-semibold">Employee management</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Add, update, or review employee profiles based on the employee backend service.
                  </p>
                  <div className="mt-6 space-y-3">
                    <button className="w-full rounded-2xl bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
                      View employees
                    </button>
                    <button className="w-full rounded-2xl border border-slate-300 bg-slate-100 px-5 py-3 text-sm text-slate-700 transition hover:border-slate-400">
                      Create employee
                    </button>
                  </div>
                </div>

                <div className="rounded-[2rem] bg-white/95 p-6 text-slate-900 shadow-[0_26px_60px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/50">
                  <h2 className="text-xl font-semibold">Department overview</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Align departments with contact data and business structure from the backend department API.
                  </p>
                  <div className="mt-6 space-y-3">
                    <button className="w-full rounded-2xl bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
                      View departments
                    </button>
                    <button className="w-full rounded-2xl border border-slate-300 bg-slate-100 px-5 py-3 text-sm text-slate-700 transition hover:border-slate-400">
                      Add department
                    </button>
                  </div>
                </div>

                <div className="rounded-[2rem] bg-white/95 p-6 text-slate-900 shadow-[0_26px_60px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/50">
                  <h2 className="text-xl font-semibold">Attendance & reports</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Track attendance and review reports to keep the team aligned with backend attendance and report endpoints.
                  </p>
                  <div className="mt-6 space-y-3">
                    <button className="w-full rounded-2xl bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
                      Mark attendance
                    </button>
                    <button className="w-full rounded-2xl border border-slate-300 bg-slate-100 px-5 py-3 text-sm text-slate-700 transition hover:border-slate-400">
                      Review reports
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
