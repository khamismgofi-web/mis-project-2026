import React from 'react'

function Welcome() {
  return (
    <section className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero background and section wrapper */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 opacity-95" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-12 lg:px-16">
          {/* Hero badge and intro */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-slate-800/90 px-4 py-1 text-sm font-semibold text-sky-300 ring-1 ring-slate-700">
              New design · Professional dashboard experience
            </span>
            <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Welcome to a smarter employee management experience
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
              Build, track, and manage attendance with a calm, modern layout crafted for teams who need clarity and speed.
            </p>
          </div>

          {/* Primary action buttons */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-8 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
            >
              Explore features
            </a>
            <a
              href="/login"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 px-8 py-3 text-base font-semibold text-slate-100 transition hover:border-slate-500 hover:text-white"
            >
              Log in to your dashboard
            </a>
          </div>

          {/* Feature highlights grid */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-800/80 bg-slate-900/90 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur">
              <h2 className="text-xl font-semibold text-white">Responsive layout</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                The interface adapts across screens with a clean, balanced visual system that keeps content readable.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-800/80 bg-slate-900/90 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur">
              <h2 className="text-xl font-semibold text-white">Calm color palette</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Soft contrast and professional accents reduce eye strain while preserving a polished hierarchy.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-800/80 bg-slate-900/90 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur">
              <h2 className="text-xl font-semibold text-white">Fast onboarding</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Key actions are surfaced immediately so users can sign in and start working with fewer clicks.
              </p>
            </div>
          </div>

          {/* Metrics summary section */}
          <div className="mt-16 rounded-3xl bg-slate-900/90 px-6 py-8 shadow-2xl shadow-slate-950/40 sm:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl border border-slate-800/80 bg-slate-950/70 p-5">
                <p className="text-3xl font-bold text-sky-300">24/7</p>
                <p className="mt-3 text-sm text-slate-400">Reliable dashboard access for managers and teams.</p>
              </div>
              <div className="rounded-3xl border border-slate-800/80 bg-slate-950/70 p-5">
                <p className="text-3xl font-bold text-sky-300">120+</p>
                <p className="mt-3 text-sm text-slate-400">Prebuilt components ready for employee workflows.</p>
              </div>
              <div className="rounded-3xl border border-slate-800/80 bg-slate-950/70 p-5">
                <p className="text-3xl font-bold text-sky-300">99.9%</p>
                <p className="mt-3 text-sm text-slate-400">Uptime and stability designed for business-critical usage.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Welcome
