import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'

const EmployeeDashboard = () => {
  const navigate = useNavigate()
  const { user, setUser } = useAuth()

  const handleLogout = () => {
    window.localStorage.removeItem('misUser')
    setUser(null)
    navigate('/login', { replace: true })
  }

  const monthlyData = [
    { month: 'Jan', progress: 72, attendance: 82 },
    { month: 'Feb', progress: 65, attendance: 78 },
    { month: 'Mar', progress: 82, attendance: 88 },
    { month: 'Apr', progress: 75, attendance: 80 },
    { month: 'May', progress: 90, attendance: 92 },
    { month: 'Jun', progress: 84, attendance: 86 },
  ]

  const calendarDays = [
    { day: 1, status: 'normal' },
    { day: 2, status: 'holiday' },
    { day: 3, status: 'normal' },
    { day: 4, status: 'deadline' },
    { day: 5, status: 'normal' },
    { day: 6, status: 'normal' },
    { day: 7, status: 'holiday' },
    { day: 8, status: 'normal' },
    { day: 9, status: 'normal' },
    { day: 10, status: 'deadline' },
    { day: 11, status: 'normal' },
    { day: 12, status: 'normal' },
    { day: 13, status: 'holiday' },
    { day: 14, status: 'normal' },
    { day: 15, status: 'normal' },
    { day: 16, status: 'deadline' },
    { day: 17, status: 'normal' },
    { day: 18, status: 'normal' },
    { day: 19, status: 'holiday' },
    { day: 20, status: 'normal' },
    { day: 21, status: 'normal' },
    { day: 22, status: 'deadline' },
    { day: 23, status: 'normal' },
    { day: 24, status: 'normal' },
    { day: 25, status: 'holiday' },
    { day: 26, status: 'normal' },
    { day: 27, status: 'normal' },
    { day: 28, status: 'deadline' },
    { day: 29, status: 'normal' },
    { day: 30, status: 'holiday' },
  ]

  return (
    <div className="min-h-screen bg-slate-100 px-6 py-8 sm:px-10">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Page heading */}
        <section className="rounded-[2rem] bg-white px-8 py-8 shadow-xl shadow-slate-200/70">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">Employee dashboard</p>
              <h1 className="mt-3 text-3xl font-semibold text-slate-900">Welcome back, {user?.name ?? 'Team member'}</h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                Your dashboard summarizes profile details, attendance, salary, and assigned tasks with a clear view of upcoming deadlines and holiday days.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                onClick={handleLogout}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
              >
                Logout
              </button>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 shadow-sm">
                <p className="text-sm text-slate-500">Current working status</p>
                <p className="mt-3 text-2xl font-semibold text-slate-900">On track</p>
              </div>
            </div>
          </div>
        </section>

        {/* Summary cards */}
        <section className="grid gap-6 xl:grid-cols-4">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-slate-500">Profile</p>
            <div className="mt-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-sky-500 text-xl font-semibold text-white">
                {user?.name?.charAt(0).toUpperCase() ?? 'U'}
              </div>
              <div>
                <p className="text-lg font-semibold text-slate-900">{user?.name ?? 'Unknown User'}</p>
                <p className="mt-1 text-sm text-slate-500">{user?.email ?? 'No email provided'}</p>
              </div>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-slate-500">Attendance</p>
            <p className="mt-6 text-3xl font-semibold text-slate-900">92%</p>
            <p className="mt-2 text-sm text-slate-500">This month’s on-time presence</p>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-slate-500">Salary</p>
            <p className="mt-6 text-3xl font-semibold text-slate-900">$4,500</p>
            <p className="mt-2 text-sm text-slate-500">Next payment scheduled in 6 days</p>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-slate-500">Assigned tasks</p>
            <p className="mt-6 text-3xl font-semibold text-slate-900">4</p>
            <p className="mt-2 text-sm text-slate-500">Tasks assigned by admin</p>
          </div>
        </section>

        {/* Tasks and metrics */}
        <section className="grid gap-6 xl:grid-cols-3">
          <div className="xl:col-span-2 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Task list</h2>
                <p className="mt-2 text-sm text-slate-500">Tasks assigned by your admin team.</p>
              </div>
              <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-700">4 active</span>
            </div>
            <div className="mt-6 space-y-4">
              {[
                { title: 'Prepare monthly report', due: 'Apr 10', status: 'In progress' },
                { title: 'Update client attendance log', due: 'Apr 16', status: 'Pending review' },
                { title: 'Submit training feedback', due: 'Apr 22', status: 'Not started' },
                { title: 'Complete audit documents', due: 'Apr 28', status: 'In progress' },
              ].map((task) => (
                <div key={task.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold text-slate-900">{task.title}</p>
                      <p className="mt-1 text-sm text-slate-500">Due {task.due}</p>
                    </div>
                    <span className="rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700">{task.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Monthly performance</h2>
            <p className="mt-2 text-sm text-slate-500">Attendance vs progress by month.</p>
            <div className="mt-8 space-y-4">
              {monthlyData.map((item) => (
                <div key={item.month} className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>{item.month}</span>
                    <span>{item.progress}%</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 rounded-full bg-slate-200">
                      <div className="h-2 rounded-full bg-emerald-500" style={{ width: `${item.progress}%` }} />
                    </div>
                    <div className="h-2 rounded-full bg-slate-200">
                      <div className="h-2 rounded-full bg-rose-500" style={{ width: `${item.attendance}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Calendar and chart section */}
        <section className="grid gap-6 xl:grid-cols-[1.3fr_0.9fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Monthly progress</h2>
                <p className="mt-2 text-sm text-slate-500">Vertical chart shows completed work and attendance.</p>
              </div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">Progress</span>
            </div>
            <div className="mt-8 flex items-end justify-between gap-4 overflow-x-auto pb-4">
              {monthlyData.map((item) => (
                <div key={item.month} className="flex w-12 flex-col items-center gap-3 text-center">
                  <div className="flex h-44 w-full flex-col justify-end gap-2 rounded-3xl bg-slate-100 p-1">
                    <div className="h-full w-full rounded-3xl bg-slate-200 p-1">
                      <div className="relative h-full w-full rounded-3xl bg-slate-100 p-1">
                        <div className="absolute bottom-0 left-0 right-0 rounded-3xl bg-emerald-500" style={{ height: `${item.progress}%` }} />
                        <div className="absolute bottom-0 left-0 right-0 rounded-3xl bg-rose-500 opacity-80" style={{ height: `${item.attendance}%` }} />
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-slate-500">{item.month}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                Completed work
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                Attendance
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">April calendar</h2>
                <p className="mt-2 text-sm text-slate-500">Green = holiday, red = task deadline.</p>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600">This month</span>
            </div>
            <div className="mt-6 grid grid-cols-7 gap-1 text-center text-[10px] font-semibold uppercase text-slate-500">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((label) => (
                <div key={label} className="py-1">{label}</div>
              ))}
            </div>
            <div className="mt-3 grid grid-cols-7 gap-1 text-xs text-slate-700">
              {calendarDays.map((day) => (
                <div key={day.day} className="rounded-2xl border border-slate-200 bg-slate-50 p-2">
                  <div className="flex items-center justify-between">
                    <span>{day.day}</span>
                    {day.status === 'holiday' ? (
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    ) : day.status === 'deadline' ? (
                      <span className="h-2 w-2 rounded-full bg-rose-500" />
                    ) : (
                      <span className="h-2 w-2 rounded-full bg-slate-300/70" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default EmployeeDashboard
