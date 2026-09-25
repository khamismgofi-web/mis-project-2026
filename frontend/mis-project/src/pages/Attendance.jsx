import React, { useEffect, useState } from 'react'
import client from '../api/client'
import AdminSidebar from '../Component/dashboard/AdminSidebar'
import Navibar from '../Component/Navibar'

const initialForm = {
  employee_id: '',
  status: 'present',
  note: '',
}

const Attendance = () => {
  const [records, setRecords] = useState([])
  const [employees, setEmployees] = useState([])
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10))
  const [form, setForm] = useState(initialForm)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchEmployees()
    fetchAttendance()
  }, [])

  useEffect(() => {
    fetchAttendance()
  }, [date])

  const fetchEmployees = async () => {
    try {
      const response = await client.get('/employees')
      setEmployees(response.data)
    } catch (err) {
      console.warn('Unable to fetch employees', err)
    }
  }

  const fetchAttendance = async () => {
    try {
      const response = await client.get(`/api/attendance/by-date/${date}`)
      setRecords(response.data)
    } catch (err) {
      console.warn('Unable to fetch attendance records', err)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')

    if (!form.employee_id) {
      setError('Please select an employee to mark attendance.')
      return
    }

    try {
      await client.post('/api/attendance', {
        employee_id: Number(form.employee_id),
        date,
        status: form.status,
        note: form.note,
      })
      setForm(initialForm)
      fetchAttendance()
    } catch (err) {
      setError(err?.response?.data?.detail || 'Unable to submit attendance.')
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="flex">
        <AdminSidebar />
        <div className="flex-1 ml-64">
          <Navibar />
          <main className="px-6 py-8 sm:px-10 lg:px-12">
            <div className="mx-auto max-w-7xl space-y-6">
              <section className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/40 ring-1 ring-slate-200/50">
                <h1 className="text-3xl font-semibold text-slate-900">Attendance</h1>
                <p className="mt-3 text-sm text-slate-600">Mark attendance and review backend attendance records for a selected date.</p>
              </section>

              <section className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200/60">
                <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
                  <div>
                    <h2 className="text-xl font-semibold text-slate-900">Mark attendance</h2>
                    <p className="text-sm text-slate-500">Create or update attendance entries for employees.</p>
                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                      <label className="block text-sm text-slate-700">
                        Date
                        <input
                          type="date"
                          value={date}
                          onChange={(event) => setDate(event.target.value)}
                          className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 shadow-sm"
                        />
                      </label>

                      <label className="block text-sm text-slate-700">
                        Employee
                        <select
                          name="employee_id"
                          value={form.employee_id}
                          onChange={handleChange}
                          className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 shadow-sm"
                        >
                          <option value="">Choose employee</option>
                          {employees.map((employee) => (
                            <option key={employee.id} value={employee.id}>
                              {employee.name} ({employee.email})
                            </option>
                          ))}
                        </select>
                      </label>

                      <label className="block text-sm text-slate-700">
                        Status
                        <select
                          name="status"
                          value={form.status}
                          onChange={handleChange}
                          className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 shadow-sm"
                        >
                          <option value="present">Present</option>
                          <option value="absent">Absent</option>
                          <option value="late">Late</option>
                          <option value="excused">Excused</option>
                        </select>
                      </label>

                      <label className="block text-sm text-slate-700">
                        Note
                        <textarea
                          name="note"
                          value={form.note}
                          onChange={handleChange}
                          rows={3}
                          className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 shadow-sm"
                        />
                      </label>

                      {error && <p className="text-sm text-rose-600">{error}</p>}

                      <button type="submit" className="rounded-3xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm">
                        Save attendance
                      </button>
                    </form>
                  </div>

                  <div>
                    <div className="flex items-center justify-between pb-4">
                      <div>
                        <h2 className="text-xl font-semibold text-slate-900">Attendance records</h2>
                        <p className="text-sm text-slate-500">Showing attendance for {date}.</p>
                      </div>
                    </div>
                    <div className="mt-6 space-y-4">
                      {records.length === 0 ? (
                        <p className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-6 text-slate-600">No attendance records found for this date.</p>
                      ) : (
                        records.map((record) => (
                          <div key={record.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                              <div>
                                <p className="text-lg font-semibold text-slate-900">
                                  {employees.find((emp) => emp.id === record.employee_id)?.name || `Employee #${record.employee_id}`}
                                </p>
                                <p className="text-sm text-slate-500">Status: {record.status}</p>
                                <p className="text-sm text-slate-500">Note: {record.note || '—'}</p>
                              </div>
                              <span className="rounded-full bg-slate-200 px-3 py-1 text-sm text-slate-700">Date: {record.date}</span>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
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

export default Attendance
