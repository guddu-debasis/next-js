'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Navbar({ children }) {
  const [isDark, setIsDark] = useState(false)
  const [selectedFont, setSelectedFont] = useState('font-inter')

  useEffect(() => {
    // Saved font load karo aur HTML tag par apply karo
    const savedFont = localStorage.getItem('site-font')
    if (savedFont) {
      setSelectedFont(savedFont)
      document.documentElement.className = document.documentElement.className.replace(/font-\S+/g, '') + ` ${savedFont}`
    }

    const savedTheme = localStorage.getItem('site-theme')
    if (savedTheme === 'dark') {
      setIsDark(true)
    }
  }, [])

  const handleFontChange = (e) => {
    const newFont = e.target.value
    setSelectedFont(newFont)
    localStorage.setItem('site-font', newFont)
    
    // HTML tag ki class change karne se poore page par font badal jayega
    document.documentElement.className = document.documentElement.className.replace(/font-\S+/g, '') + ` ${newFont}`
  }

  const handleThemeToggle = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    localStorage.setItem('site-theme', newTheme ? 'dark' : 'light')
  }

  return (
    <div className={`min-h-screen transition-colors duration-500 w-full ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      
      {/* Global Header with Toggle & Font Selector */}
      <header className="flex flex-col sm:flex-row justify-between items-center gap-4 p-6 max-w-2xl mx-auto border-b border-zinc-500/20">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Dashboard
        </Link>

        <div className="flex items-center gap-4">
          {/* Font Selector Dropdown */}
          <select
            value={selectedFont}
            onChange={handleFontChange}
            className={`text-xs px-3 py-2 rounded-lg border transition-colors cursor-pointer outline-none ${
              isDark 
                ? 'bg-zinc-900 text-white border-white/20 focus:border-white/50' 
                : 'bg-zinc-100 text-black border-black/20 focus:border-black/50'
            }`}
          >
            <option value="font-inter">Inter</option>
            <option value="font-poppins">Poppins</option>
            <option value="font-roboto">Roboto</option>
            <option value="font-playfair">Playfair</option>
            <option value="font-fira">Fira Code</option>
          </select>

          {/* Dark/Light Theme Toggle Button */}
          <button
            onClick={handleThemeToggle}
            className={`relative w-16 h-8 rounded-full p-1 transition-all duration-500 ease-in-out border-2 ${
              isDark 
                ? 'bg-black border-white shadow-[0_0_10px_rgba(255,255,255,0.2)]' 
                : 'bg-white border-black shadow-[0_0_10px_rgba(0,0,0,0.1)]'
            }`}
            aria-label="Toggle Theme"
          >
            <div
              className={`w-5 h-5 rounded-full shadow-md transform transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) flex items-center justify-center ${
                isDark 
                  ? 'translate-x-8 bg-white text-black rotate-180' 
                  : 'translate-x-0 bg-black text-white rotate-0'
              }`}
            >
              <span className="text-[8px] font-bold">
                {isDark ? '☽' : '☼'}
              </span>
            </div>
          </button>
        </div>
      </header>

      {/* Page Content Renders Here */}
      <main className="max-w-2xl mx-auto p-6">
        {children}
      </main>

    </div>
  )
}