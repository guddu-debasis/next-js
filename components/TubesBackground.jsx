'use client'

import { useEffect, useRef } from 'react'

const DEFAULT_TUBES_LIGHT = ['#2563eb', '#6366f1', '#0ea5e9']
const DEFAULT_TUBES_DARK = ['#60a5fa', '#818cf8', '#38bdf8']
const DEFAULT_LIGHTS_LIGHT = ['#3b82f6', '#6366f1', '#0ea5e9', '#8b5cf6']
const DEFAULT_LIGHTS_DARK = ['#60a5fa', '#a78bfa', '#38bdf8', '#c4b5fd']

async function hasGraphicsSupport() {
  try {
    const gpu = navigator.gpu
    if (gpu && (await gpu.requestAdapter())) return true
  } catch {
    
  }
  try {
    return !!document.createElement('canvas').getContext('webgl2')
  } catch {
    return false
  }
}

export function TubesBackground({
  className = '',
  tubeColorsDark = DEFAULT_TUBES_DARK,
  lightColorsDark = DEFAULT_LIGHTS_DARK,
  lightIntensity = 200,
  pointerEventsNone = true,
  enabled = true,
}) {
  const canvasRef = useRef(null)
  const appRef = useRef(null)

  useEffect(() => {
    if (!enabled) return
    const canvas = canvasRef.current
    if (!canvas) return

    const prefersReduced = typeof window !== 'undefined'
      && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    let disposed = false
    let app = null

    const originalError = console.error
    console.error = (...args) => {
      const first = args[0]
      if (typeof first === 'string' && first.includes('WebGPU Device Lost')) {
        return
      }
      originalError.apply(console, args)
    }

    Promise.all([import('threejs-components/build/cursors/tubes1.min.js'), hasGraphicsSupport()])
      .then(([mod, supported]) => {
        if (disposed || !supported) return
        app = mod.default(canvas, {
          tubes: {
            colors: tubeColorsDark,
            lights: {
              intensity: lightIntensity,
              colors: lightColorsDark,
            },
          },
        })
        appRef.current = app

        if (disposed) {
          app.destroy?.()
          app.dispose?.()
          appRef.current = null
        }
      })
      .catch((err) => {
        if (process.env.NODE_ENV !== 'production') {
          console.warn('[TubesBackground] failed to load:', err)
        }
      })

    return () => {
      disposed = true
      console.error = originalError
      const current = appRef.current
      if (current) {
        current.destroy?.()
        current.dispose?.()
      }
      appRef.current = null
    }
  }, [lightIntensity, enabled, tubeColorsDark, lightColorsDark])

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 w-screen h-screen overflow-hidden ${pointerEventsNone ? 'pointer-events-none' : ''} z-0 ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
        style={{ touchAction: 'none' }}
      />
    </div>
  )
}

export default TubesBackground