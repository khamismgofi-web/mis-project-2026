import React, { useEffect, useState } from 'react'
import client from '../api/client'
import AdminSidebar from '../Component/dashboard/AdminSidebar'
import Navibar from '../Component/Navibar'

const initialForm = {
  name: '',
  manager: '',
}

const Departments = () => {
  const [departments, setDepartments] = useState([])
  const [form, setForm] = useState(initialForm)
  const [editId, setEditId] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchDepartments()
  }, [])

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

    if (!form.name.trim()) {
      setError('Department name is required.')
      return
    }

    try {
      if (editId) {
        await client.put(`/api/departments/${editId}`, form)
      } else {
        await client.post('/api/departments', form)
      }
      resetForm()
      fetchDepartments()
    } catch (err) {
      setError(err?.response?.data?.detail || 'Unable to save department data.')
    }
  }

  const handleEdit = (department) => {
    setEditId(department.id)
    setForm({
      name: department.name || '',
      manager: department.manager || '',
    })
  }

  const handleDelete = async (id) => {
    try {
      await client.delete(`/api/departments/${id}`)
      fetchDepartments()
    } catch (err) {
      console.warn('Unable to delete department', err)
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
                <h1 className="text-3xl font-semibold text-slate-900">Departments</h1>
                <p className="mt-3 text-sm text-slate-600">Manage department records through the backend department API.</p>
              </section>

              <section className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200/60">
                <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
                  <div>
                    <h2 className="text-xl font-semibold text-slate-900">Department form</h2>
                    <p className="text-sm text-slate-500">Create or edit a department and save it to the backend.</p>
                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                      <label className="block text-sm text-slate-700">
                        Department name
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 shadow-sm"
                        />
                      </label>

                      <label className="block text-sm text-slate-700">
                        Manager
                        <input
                          name="manager"
                          value={form.manager}
                          onChange={handleChange}
                          className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 shadow-sm"
                        />
                      </label>

                      {error && <p className="text-sm text-rose-600">{error}</p>}

                      <div className="flex flex-wrap gap-3">
                        <button type="submit" className="rounded-3xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm">
                          {editId ? 'Save changes' : 'Create department'}
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
                    <h2 className="text-xl font-semibold text-slate-900">Department list</h2>
                    <p className="text-sm text-slate-500">View backend department records and perform edit/delete actions.</p>
                    <div className="mt-6 space-y-4">
                      {departments.length === 0 ? (
                        <p className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-6 text-slate-600">No departments found yet.</p>
                      ) : (
                        departments.map((department) => (
                          <div key={department.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                              <div>
                                <p className="text-lg font-semibold text-slate-900">{department.name}</p>
                                <p className="text-sm text-slate-500">Manager: {department.manager || 'Unassigned'}</p>
                                <p className="text-sm text-slate-500">Created: {new Date(department.created_at).toLocaleDateString()}</p>
                              </div>
                              <div className="flex flex-wrap gap-2 text-sm">
                                <button
                                  type="button"
                                  onClick={() => handleEdit(department)}
                                  className="rounded-full bg-slate-900 px-4 py-2 text-white"
                                >
                                  Edit
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleDelete(department.id)}
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

export default Departments
