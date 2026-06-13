import React, { useEffect, useState } from 'react'
import client from '../api/client'
import AdminSidebar from '../Component/dashboard/AdminSidebar'
import Navibar from '../Component/Navibar'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  position: '',
  salary: '',
  hired_at: new Date().toISOString().slice(0, 10),
  department_id: '',
}

const Employees = () => {
  const [employees, setEmployees] = useState([])
  const [departments, setDepartments] = useState([])
  const [form, setForm] = useState(initialForm)
  const [editId, setEditId] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchEmployees()
    fetchDepartments()
  }, [])

  const fetchEmployees = async () => {
    try {
      const response = await client.get('/employees')
      setEmployees(response.data)
    } catch (err) {
      console.warn('Unable to fetch employees', err)
    }
  }

  const fetchDepartments = async () => {
    try {
      const response = await client.get('/api/departments')
      setDepartments(response.data)
    } catch (err) {
      console.warn('Unable to fetch departments', err)
    }
  }

  const resetForm = () => {
    setForm(initialForm)
    setEditId(null)
    setError('')
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')

    if (!form.name || !form.email) {
      setError('Name and email are required.')
      return
    }

    const payload = {
      ...form,
      salary: Number(form.salary) || 0,
      department_id: form.department_id ? Number(form.department_id) : null,
    }

    try {
      if (editId) {
        await client.put(`/employees/${editId}`, payload)
      } else {
        await client.post('/employees', payload)
      }
      resetForm()
      fetchEmployees()
    } catch (err) {
      setError(err?.response?.data?.detail || 'Unable to save employee data.')
    }
  }

  const handleEdit = (employee) => {
    setEditId(employee.id)
    setForm({
      name: employee.name || '',
      email: employee.email || '',
      phone: employee.phone || '',
      position: employee.position || '',
      salary: employee.salary ?? '',
      hired_at: employee.hired_at ? employee.hired_at.slice(0, 10) : new Date().toISOString().slice(0, 10),
      department_id: employee.department_id ?? '',
    })
  }

  const handleDelete = async (id) => {
    try {
      await client.delete(`/employees/${id}`)
      fetchEmployees()
    } catch (err) {
      console.warn('Unable to delete employee', err)
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
                <h1 className="text-3xl font-semibold text-slate-900">Employees</h1>
                <p className="mt-3 text-sm text-slate-600">Create, update, and delete employee records using the backend employee API.</p>
              </section>

              <section className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200/60">
                <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
                  <div>
                    <h2 className="text-xl font-semibold text-slate-900">Employee form</h2>
                    <p className="text-sm text-slate-500">Use this form to add new employees or edit existing records.</p>
                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="block text-sm text-slate-700">
                          Name
                          <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 shadow-sm"
                          />
                        </label>
                        <label className="block text-sm text-slate-700">
                          Email
                          <input
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 shadow-sm"
                          />
                        </label>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="block text-sm text-slate-700">
                          Phone
                          <input
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 shadow-sm"
                          />
                        </label>
                        <label className="block text-sm text-slate-700">
                          Position
                          <input
                            name="position"
                            value={form.position}
                            onChange={handleChange}
                            className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 shadow-sm"
                          />
                        </label>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="block text-sm text-slate-700">
                          Salary
                          <input
                            name="salary"
                            type="number"
                            step="0.01"
                            value={form.salary}
                            onChange={handleChange}
                            className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 shadow-sm"
                          />
                        </label>
                        <label className="block text-sm text-slate-700">
                          Hire date
                          <input
                            name="hired_at"
                            type="date"
                            value={form.hired_at}
                            onChange={handleChange}
                            className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 shadow-sm"
                          />
                        </label>
                      </div>

                      <label className="block text-sm text-slate-700">
                        Department
                        <select
                          name="department_id"
                          value={form.department_id}
                          onChange={handleChange}
                          className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 shadow-sm"
                        >
                          <option value="">Select department</option>
                          {departments.map((dept) => (
                            <option key={dept.id} value={dept.id}>
                              {dept.name}
                            </option>
                          ))}
                        </select>
                      </label>

                      {error && <p className="text-sm text-rose-600">{error}</p>}

                      <div className="flex flex-wrap gap-3">
                        <button type="submit" className="rounded-3xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm">
                          {editId ? 'Save changes' : 'Create employee'}
                        </button>
                        {editId && (
                          <button type="button" onClick={resetForm} className="rounded-3xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700">
                            Cancel
                          </button>
                        )}
                      </div>
                    </form>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold text-slate-900">Employee list</h2>
                    <p className="text-sm text-slate-500">Current employee records from the backend service.</p>
                    <div className="mt-6 space-y-4">
                      {employees.length === 0 ? (
                        <p className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-6 text-slate-600">No employees found yet.</p>
                      ) : (
                        employees.map((employee) => (
                          <div key={employee.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                              <div>
                                <p className="text-lg font-semibold text-slate-900">{employee.name}</p>
                                <p className="text-sm text-slate-500">{employee.email}</p>
                                <p className="text-sm text-slate-500">{employee.position || 'Position not set'}</p>
                              <p className="text-sm text-slate-500">
                                Department:{' '}
                                {departments.find((dept) => dept.id === employee.department_id)?.name || 'None'}
                              </p>
                              </div>
                              <div className="flex flex-wrap gap-2 text-sm">
                                <button
                                  type="button"
                                  onClick={() => handleEdit(employee)}
                                  className="rounded-full bg-slate-900 px-4 py-2 text-white"
                                >
                                  Edit
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleDelete(employee.id)}
                                  className="rounded-full border border-slate-300 px-4 py-2 text-slate-700"
                                >
                                  Delete
                                </button>
                              </div>
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

export default Employees
