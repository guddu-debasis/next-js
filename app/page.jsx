'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

// Ocean Wave / Fluid Cursor Component
function OceanFluidCursor() {
  const [position, setPosition] = useState({ x: -300, y: -300 })
  const [isInside, setIsInside] = useState(false)

  useEffect(() => {
    let animationFrameId
    const handleMouseMove = (e) => {
      setIsInside(true)
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseLeave = () => {
      setIsInside(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    const animateInfinity = () => {
      if (!isInside) {
        const time = Date.now() * 0.0015
        const x = window.innerWidth / 2 + Math.sin(time) * (window.innerWidth / 3)
        const y = window.innerHeight / 2 + Math.cos(time * 1.5) * (window.innerHeight / 4)
        setPosition({ x, y })
      }
      animationFrameId = requestAnimationFrame(animateInfinity)
    }

    animationFrameId = requestAnimationFrame(animateInfinity)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isInside])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Ocean Fluid Gradient Blob */}
      <div 
        className="absolute w-[600px] h-[600px] filter blur-[100px] opacity-60 transition-transform duration-500 ease-out ocean-blob"
        style={{
          transform: `translate(${position.x - 300}px, ${position.y - 300}px)`,
        }}
      />
      <style jsx>{`
        .ocean-blob {
          background: linear-gradient(120deg, #00c6ff, #0072ff, #00f2fe, #4facfe, #00c6ff);
          background-size: 100% 100%;
          animation: oceanFlow 10s ease infinite, morphShape 8s ease-in-out infinite alternate;
        }

        @keyframes oceanFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes morphShape {
          0% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          50% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
          100% {
            border-radius: 50% 50% 40% 60% / 40% 70% 60% 50%;
          }
        }
      `}</style>
    </div>
  )
}

export default function Page() {
  return (
    <div className="relative flex flex-col items-center justify-center py-12 z-10 min-h-[80vh] text-white">
      {/* Ocean Fluid Cursor */}
      <OceanFluidCursor />
      
      {/* Hero Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
          Welcome to Next.js
        </h1>
        <p className="text-sm opacity-60">
          Explore your routes, manage your agents, and navigate seamlessly.
        </p>
      </div>

      {/* Navigation Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl">
        
        {/* Agents Link */}
        <Link 
          href="/agents"
          className="group p-5 border rounded-2xl transition-all duration-300 flex items-center justify-between border-white/10 hover:border-white/40 shadow-sm bg-zinc-900/40 backdrop-blur-md"
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
          className="group p-5 border rounded-2xl transition-all duration-300 flex items-center justify-between border-white/10 hover:border-white/40 shadow-sm bg-zinc-900/40 backdrop-blur-md"
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
          className="group p-5 border rounded-2xl transition-all duration-300 flex items-center justify-between border-white/10 hover:border-white/40 shadow-sm bg-zinc-900/40 backdrop-blur-md"
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
          className="group p-5 border rounded-2xl transition-all duration-300 flex items-center justify-between border-white/10 hover:border-white/40 shadow-sm bg-zinc-900/40 backdrop-blur-md"
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