import React from 'react'
import Link from 'next/link'

const agents = [
  { name: 'Claude', path: 'agents/claude', desc: 'Anthropic AI assistant for advanced reasoning.', color: 'hover:border-pink-500/50 hover:shadow-[0_0_25px_rgba(255,0,127,0.2)]' },
  { name: 'GPT', path: 'agents/gpt', desc: 'OpenAI language model for versatile tasks.', color: 'hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(0,242,254,0.2)]' },
  { name: 'Gemini', path: 'agents/gemini', desc: 'Google multimodal AI model for smart workflows.', color: 'hover:border-purple-500/50 hover:shadow-[0_0_25px_rgba(127,0,255,0.2)]' },
]

export default function AgentsPage() {
  return (
    <div className="flex flex-col gap-8 py-6 animate-fade-in">
      {/* Page Header */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">AI Agents</h1>
        <p className="text-sm opacity-60">
          Select an agent to manage, configure, or interact with.
        </p>
      </div>

      {/* Agents Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
        {agents.map((agent) => (
          <Link
            key={agent.name}
            href={agent.path}
            className={`group p-5 border rounded-2xl transition-all duration-500 flex flex-col justify-between border-white/10 shadow-sm bg-zinc-900/40 backdrop-blur-md hover:-translate-y-1 ${agent.color}`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-pink-500 transition-all duration-300">
                  {agent.name}
                </h3>
                <span className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
              </div>
              <p className="text-xs opacity-60 leading-relaxed">{agent.desc}</p>
            </div>
            <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] opacity-50 group-hover:opacity-90 transition-opacity">
              <span>Status: Active</span>
              <span className="text-emerald-400 font-medium animate-pulse">● Online</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}