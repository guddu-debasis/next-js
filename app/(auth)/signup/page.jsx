'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()

  const [successMsg, setSuccessMsg] = useState('')

  const onSubmit = async (data) => {
    // Yahan apni API call ya backend signup logic likhein
    console.log('Signup Data:', data)
    
    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setSuccessMsg('Account created successfully!')
  }

  return (
    <div className="flex flex-col items-center justify-center py-6">
      <div className="w-full max-w-md p-8 border border-white/10 rounded-2xl bg-zinc-900/40 backdrop-blur-md shadow-lg">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-extrabold tracking-tight">Create an Account</h1>
          <p className="text-xs opacity-60 mt-1">Enter your details to sign up</p>
        </div>

        {successMsg && (
          <div className="mb-4 p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs rounded-xl text-center">
            {successMsg}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          
          {/* Name Field */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium opacity-80">Full Name</label>
            <input
              type="text"
              placeholder="Debasis panda"
              {...register('name', { required: 'Name is required' })}
              className="px-4 py-2.5 rounded-xl border border-white/10 bg-zinc-800/50 text-sm focus:outline-none focus:border-white/40 transition"
            />
            {errors.name && <span className="text-[10px] text-pink-500">{errors.name.message}</span>}
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium opacity-80">Email Address</label>
            <input
              type="email"
              placeholder="debasis@example.com"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              className="px-4 py-2.5 rounded-xl border border-white/10 bg-zinc-800/50 text-sm focus:outline-none focus:border-white/40 transition"
            />
            {errors.email && <span className="text-[10px] text-pink-500">{errors.email.message}</span>}
          </div>

          {/* Password Field */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium opacity-80">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 6, message: 'Password must be at least 6 characters' },
              })}
              className="px-4 py-2.5 rounded-xl border border-white/10 bg-zinc-800/50 text-sm focus:outline-none focus:border-white/40 transition"
            />
            {errors.password && <span className="text-[10px] text-pink-500">{errors.password.message}</span>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 py-3 rounded-xl bg-white text-black font-semibold text-sm transition hover:opacity-90 active:scale-[0.99] disabled:opacity-50 cursor-pointer"
          >
            {isSubmitting ? 'Creating account...' : 'Sign Up'}
          </button>
        </form>

        {/* Footer Link */}
        <p className="text-center text-xs opacity-60 mt-6">
          Already have an account?{' '}
          <Link href="/login" className="text-white font-medium hover:underline">
            Log in
          </Link>
        </p>

      </div>
    </div>
  )
}