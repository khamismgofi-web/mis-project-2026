import React from 'react'

const EmployeeDashboard = () => {
  return (
    <div className="min-h-screen bg-slate-100 px-6 py-8 sm:px-10">
      <div className="mx-auto max-w-6xl rounded-3xl bg-white p-8 shadow-lg shadow-slate-200">
        <h1 className="text-3xl font-semibold text-slate-900">Employee Dashboard</h1>
        <p className="mt-4 text-slate-600">
          This page will show employee attendance, schedules, and task summaries.
        </p>
      </div>
    </div>
  )
}

export default EmployeeDashboard
