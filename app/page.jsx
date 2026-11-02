'use client'
import React from 'react'
import Link from 'next/link'
import TubesBackground from '../components/TubesBackground'

export default function Page() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[80vh] py-12 z-10">
      {/* Full Screen 3D Tubes Background */}
      <TubesBackground />
      
      {/* Hero Header */}
      <div className="text-center mb-10 relative z-10">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
          Welcome to Next.js
        </h1>
        <p className="text-sm opacity-60">
          Explore your routes, manage your agents, and navigate seamlessly.
        </p>
      </div>

      {/* Navigation Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl relative z-10">
        
        {/* Agents Link */}
        <Link 
          href="/agents"
          className="group p-5 border rounded-2xl transition-all duration-300 flex items-center justify-between border-current/20 hover:border-current shadow-sm bg-zinc-900/40 backdrop-blur-md"
        >
          <div>
            <h3 className="font-semibold text-lg">Agents</h3>
            <p className="text-xs opacity-60 mt-1">View and manage AI agents</p>
          </div>
          <span className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
        </Link>

        {/* Products Link */}
        <Link 
          href="/products"
          className="group p-5 border rounded-2xl transition-all duration-300 flex items-center justify-between border-current/20 hover:border-current shadow-sm bg-zinc-900/40 backdrop-blur-md"
        >
          <div>
            <h3 className="font-semibold text-lg">Products</h3>
            <p className="text-xs opacity-60 mt-1">Browse product inventory</p>
          </div>
          <span className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
        </Link>

        {/* Login Link */}
        <Link 
          href="/login"
          className="group p-5 border rounded-2xl transition-all duration-300 flex items-center justify-between border-current/20 hover:border-current shadow-sm bg-zinc-900/40 backdrop-blur-md"
        >
          <div>
            <h3 className="font-semibold text-lg">Login</h3>
            <p className="text-xs opacity-60 mt-1">Access your account</p>
          </div>
          <span className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
        </Link>

        {/* Signup Link */}
        <Link 
          href="/signup"
          className="group p-5 border rounded-2xl transition-all duration-300 flex items-center justify-between border-current/20 hover:border-current shadow-sm bg-zinc-900/40 backdrop-blur-md"
        >
          <div>
            <h3 className="font-semibold text-lg">Sign Up</h3>
            <p className="text-xs opacity-60 mt-1">Create a new account</p>
          </div>
          <span className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
        </Link>

      </div>
    </div>
  )
}