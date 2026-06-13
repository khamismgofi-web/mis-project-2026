import React, { useEffect, useState } from 'react'
import client from '../api/client'
import AdminSidebar from '../Component/dashboard/AdminSidebar'
import Navibar from '../Component/Navibar'

const Reports = () => {
  const [headcount, setHeadcount] = useState([])
  const [attendanceSummary, setAttendanceSummary] = useState([])

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const [headcountRes, attendanceRes] = await Promise.all([
          client.get('/api/reports/headcount-by-department'),
          client.get('/api/reports/attendance-summary'),
        ])
        setHeadcount(headcountRes.data)
        setAttendanceSummary(attendanceRes.data)
      } catch (error) {
        console.warn('Unable to fetch reports', error)
      }
    }

    fetchReports()
  }, [])

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="flex">
        <AdminSidebar />
        <div className="flex-1 ml-64">
          <Navibar />
          <main className="px-6 py-8 sm:px-10 lg:px-12">
            <div className="mx-auto max-w-7xl space-y-6">
              <section className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/40 ring-1 ring-slate-200/50">
                <h1 className="text-3xl font-semibold text-slate-900">Reports</h1>
                <p className="mt-3 text-sm text-slate-600">Backend reports from attendance summaries and department headcount data.</p>
              </section>

              <section className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200/60">
                <h2 className="text-xl font-semibold text-slate-900">Headcount by Department</h2>
                <div className="mt-4 space-y-3">
                  {headcount.length === 0 ? (
                    <p className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-6 text-slate-600">No department headcount data available.</p>
                  ) : (
                    <div className="space-y-4">
                      {headcount.map((row) => (
                        <div key={row.department} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-lg font-semibold text-slate-900">{row.department}</p>
                            <div className="text-sm text-slate-600">
                              <span className="rounded-full bg-slate-200 px-3 py-1">Staff: {row.staff}</span>
                            </div>
                          </div>
                          <p className="mt-2 text-sm text-slate-500">Payroll: ${row.payroll.toFixed(2)}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </section>

              <section className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200/60">
                <h2 className="text-xl font-semibold text-slate-900">Attendance Summary</h2>
                <div className="mt-4 space-y-3">
                  {attendanceSummary.length === 0 ? (
                    <p className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-6 text-slate-600">No attendance summary available.</p>
                  ) : (
                    <div className="space-y-4">
                      {attendanceSummary.map((summary) => (
                        <div key={summary.status} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                          <div className="flex items-center justify-between gap-4">
                            <p className="text-lg font-semibold text-slate-900">{summary.status}</p>
                            <span className="rounded-full bg-slate-200 px-3 py-1 text-sm text-slate-700">{summary.count}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Reports
