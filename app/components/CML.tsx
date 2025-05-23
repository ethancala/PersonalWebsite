"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

const COMMANDS: Record<string, string> = { 
  help: "Available commands: about, experience, projects, resume, clear, gui",
  about: "I'm Ethan Cala — a software & ops engineer focused on automation and telemetry. I am passionate about building scalable, elegant solutions through software and systems design. I specialize in full-stack web development, IT automation, and tech operations in enterprise environments. I currently work at Sidley Austin LLP!",
  projects: `
Mode Score
A full-stack DeFi solution built and deployed during my time at BCAMP.
Stack: React, Next.js, Vercel, TypeScript, Python, FastAPI, Tailwind CSS
Learn More: https://github.com/ethancala/mode-score

Portfolio Website
You're currently looking at it!
Stack: Next.js, React, Toast, Vercel, Tailwind CSS
Learn More: https://ethancala.dev

Syllabye
A web platform to simplify syllabus creation and access for professors and students.
Stack: Vite + React, Firebase, Tailwind, NodeJS, JSON, Bootstrap
Learn More: https://github.com/ethancala/syllabye

PC Builder Prototype
A prototype of a custom PC builder app using ASP.NET Core.
Stack: C#, ASP.NET Core, JavaScript, HTML, SQLite

Higher Or Lower Game
A simple card game where users wager in-game currency.
Stack: Flask, Python, JavaScript, HTML, MongoDB, Bootstrap

To-do List
A minimalist task management app using local storage.
Stack: JavaScript, LocalStorage, jQuery, JSON, Bootstrap
`.trim(),
  experience: `
  
Web Applications Developer (Frontend)
BCAMP · Chicago, IL
June 2024 – August 2024
- Developed a responsive UI using React, TypeScript, Tailwind, deployed on Vercel
- Integrated WalletAPI supporting 400+ wallets
- Rendered data from a FastAPI backend to optimize UX
- Wrote internal docs for dev onboarding and reuse
- Deployed builds via Vercel's CI/CD
- Visit: https://bcamp.xyz

IT Operations Engineer Intern
Sidley Austin LLP · Chicago, IL
February 2024 – Present
- Built SSRS automation using Python, Selenium, SQL for EOD reports
- Created telemetry pipelines to Splunk from legacy sources
- Automated infra checks with Python, PowerShell, Bash
- Imaged 500+ machines, wiped 250+ devices (DoD-compliant)
- Supported incidents and onboarding across the firm
Visit: https://www.sidley.com

Computer Science & Math Tutor
Freelance · Remote
August 2023 – Present
- Tutored CS, discrete math, and Java/OOP
- Created personalized lesson plans
`.trim(),
}


export default function CML() {
  const [history, setHistory] = useState<string[]>([])
  const [input, setInput] = useState("")
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState<number | null>(null)

  const router = useRouter()

  const handleCommand = (cmd: string) => {
    if (cmd === "home" || cmd === "gui") {
      router.push("/")
      return
    }

    if (cmd === "clear") {
      setHistory([])
      setInput("")
      return
    }
    
    if (cmd == "resume"){
        setHistory([...history, `> ${cmd}`, "Downloading resume..."])
        // Trigger download
        const link = document.createElement("a")
        link.href = "/EthanCalaREsume.pdf"
        link.download = "EthanCalaREsume.pdf"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        setTimeout(() => {
        setHistory((prev) => [...prev, "Download complete."])
        }, 2000) // adjust time if needed
        
        
  setCommandHistory([...commandHistory, cmd])
  setInput("")
  return
    }

    const output = COMMANDS[cmd] || `Command not found: ${cmd}`
    setHistory([...history, `> ${cmd}`, output])
    setCommandHistory([...commandHistory, cmd])
    setHistoryIndex(null)
    setInput("")
  }

  useEffect(() => {
    setHistory([
      "Welcome to Ethan's Terminal Portfolio!",
      "Type `help` to get started.",
      "",
    ])
  }, [])

  return (
    <div className="bg-black text-green-400 font-mono p-4 h-[80vh] overflow-y-auto">
      <div>
        {history.map((line, idx) => (
          <div key={idx} className="whitespace-pre-wrap">
            {line}
          </div>
        ))}
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleCommand(input.trim())
          }}
          className="flex items-center gap-2 mt-2"
        >   
          <span className="text-green-300">$</span>
          
          <input
            className="bg-black text-green-400 outline-none flex-1"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "ArrowUp") {
                e.preventDefault()
                if (commandHistory.length === 0) return
                const newIndex =
                  historyIndex === null
                    ? commandHistory.length - 1
                    : Math.max(0, historyIndex - 1)
                setHistoryIndex(newIndex)
                setInput(commandHistory[newIndex])
              }

              if (e.key === "ArrowDown") {
                e.preventDefault()
                if (commandHistory.length === 0) return
                const newIndex =
                  historyIndex === null
                    ? commandHistory.length
                    : Math.min(commandHistory.length, historyIndex + 1)

                setHistoryIndex(newIndex)
                if (newIndex < commandHistory.length) {
                  setInput(commandHistory[newIndex])
                } else {
                  setInput("")
                }
              }
            }}
            autoFocus
          />
        </form>
      </div>
    </div>
  )
}
