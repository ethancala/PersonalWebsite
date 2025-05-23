"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"

const COMMANDS: Record<string, string> = {
  help: "Available commands: about, experience, projects, resume, clear, gui",
  about:
    "I'm Ethan Cala — a software & ops engineer focused on automation and telemetry. I am passionate about building scalable, elegant solutions through software and systems design. I specialize in full-stack web development, IT automation, and tech operations in enterprise environments. I currently work at Sidley Austin LLP!",
}

export default function CML() {
  const router = useRouter()
  const bottomRef = useRef<HTMLDivElement>(null)

  const [history, setHistory] = useState<string[]>([])
  const [input, setInput] = useState("")
  const [caretPos, setCaretPos] = useState(0)
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState<number | null>(null)

  useEffect(() => {
    setHistory([
      "Welcome to Ethan's Terminal Portfolio!",
      "Type `help` to get started.",
      "",
    ])
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [history])

  const handleCommand = (cmd: string) => {
    const addLines = (lines: string[]) => {
      lines.forEach((line, i) => {
        setTimeout(() => {
          setHistory((prev) => [...prev, line])
        }, i * 100)
      })
    }

    if (cmd === "home" || cmd === "gui") {
      router.push("/")
      return
    }

    if (cmd === "clear") {
      setHistory([])
      setInput("")
      setCaretPos(0)
      return
    }

    if (cmd === "experience") {
      const experienceLines = [
        "Web Applications Developer (Frontend)",
        "BCAMP · Chicago, IL",
        "June 2024 – August 2024",
        "- Developed a responsive UI using React, TypeScript, Tailwind, deployed on Vercel",
        "- Integrated WalletAPI supporting 400+ wallets",
        "- Rendered data from a FastAPI backend to optimize UX",
        "- Wrote internal docs for dev onboarding and reuse",
        "- Deployed builds via Vercel's CI/CD",
        "- Visit: https://bcamp.xyz",
        "",
        "IT Operations Engineer Intern",
        "Sidley Austin LLP · Chicago, IL",
        "February 2024 – Present",
        "- Built SSRS automation using Python, Selenium, SQL for EOD reports",
        "- Created telemetry pipelines to Splunk from legacy sources",
        "- Automated infra checks with Python, PowerShell, Bash",
        "- Imaged 500+ machines, wiped 250+ devices (DoD-compliant)",
        "- Supported incidents and onboarding across the firm",
        "- Visit: https://www.sidley.com",
        "",
        "Computer Science & Math Tutor",
        "Freelance · Remote",
        "August 2023 – Present",
        "- Tutored CS, discrete math, and Java/OOP",
        "- Created personalized lesson plans",
      ]

      setHistory((prev) => [...prev, `> ${cmd}`])
      setCommandHistory((prev) => [...prev, cmd])
      setInput("")
      setCaretPos(0)
      addLines(experienceLines)
      return
    }

    if (cmd === "projects") {
      const projectLines = [
        "Mode Score",
        "A full-stack DeFi solution built and deployed during my time at BCAMP.",
        "Stack: React, Next.js, Vercel, TypeScript, Python, FastAPI, Tailwind CSS",
        "Learn More: https://github.com/ethancala/mode-score",
        "",
        "Portfolio Website",
        "You're currently looking at it!",
        "Stack: Next.js, React, Toast, Vercel, Tailwind CSS",
        "Learn More: https://ethancala.dev",
        "",
        "Syllabye",
        "A web platform to simplify syllabus creation and access for professors and students.",
        "Stack: Vite + React, Firebase, Tailwind, NodeJS, JSON, Bootstrap",
        "Learn More: https://github.com/ethancala/syllabye",
        "",
        "PC Builder Prototype",
        "A prototype of a custom PC builder app using ASP.NET Core.",
        "Stack: C#, ASP.NET Core, JavaScript, HTML, SQLite",
        "",
        "Higher Or Lower Game",
        "A simple card game where users wager in-game currency.",
        "Stack: Flask, Python, JavaScript, HTML, MongoDB, Bootstrap",
        "",
        "To-do List",
        "A minimalist task management app using local storage.",
        "Stack: JavaScript, LocalStorage, jQuery, JSON, Bootstrap",
      ]

      setHistory((prev) => [...prev, `> ${cmd}`])
      setCommandHistory((prev) => [...prev, cmd])
      setInput("")
      setCaretPos(0)
      addLines(projectLines)
      return
    }

    if (cmd === "resume") {
      setHistory((prev) => [...prev, `> ${cmd}`, "Downloading resume..."])
      setCommandHistory((prev) => [...prev, cmd])
      setInput("")
      setCaretPos(0)

      const link = document.createElement("a")
      link.href = "/EthanCalaREsume.pdf"
      link.download = "EthanCalaREsume.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      setTimeout(() => {
        setHistory((prev) => [...prev, "Download complete."])
      }, 2000)

      return
    }

    const output = COMMANDS[cmd] || `Command not found: ${cmd}`
    setHistory((prev) => [...prev, `> ${cmd}`, output])
    setCommandHistory((prev) => [...prev, cmd])
    setInput("")
    setCaretPos(0)
    setHistoryIndex(null)
  }

  return (
    <div className="bg-black text-green-400 font-mono p-4 h-[80vh] overflow-y-auto">
      <div>
        {history.map((line, idx) =>
          line.trim() === "" ? (
            <div key={idx}>&nbsp;</div>
          ) : (
            <div key={idx} className="whitespace-pre-wrap">
              {line}
            </div>
          )
        )}
        <div ref={bottomRef} />

        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleCommand(input)
          }}
          className="flex items-center gap-2 mt-2"
        >
          <span className="text-green-300">$</span>
          <div className="flex items-center flex-1 whitespace-pre-wrap relative">
            <span className="text-green-400">{input.slice(0, caretPos)}</span>
            <span className="w-[10px] h-[20px] bg-green-400 inline-block animate-blink" />
            <span className="text-green-400">{input.slice(caretPos)}</span>

            <input
              type="text"
              aria-label="Terminal input"
              className="absolute w-0 h-0 opacity-0 caret-transparent"
              value={input}
              onBeforeInput={(e) => {
                const inputEvent = e.nativeEvent as InputEvent
                const char = inputEvent.data
                if (!char) return
                e.preventDefault()
                const newValue =
                  input.slice(0, caretPos) + char + input.slice(caretPos)
                setInput(newValue)
                setCaretPos((prev) => prev + 1)
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault()
                  handleCommand(input)
                }

                if (e.key === "ArrowLeft") {
                  e.preventDefault()
                  setCaretPos((pos) => Math.max(0, pos - 1))
                }

                if (e.key === "ArrowRight") {
                  e.preventDefault()
                  setCaretPos((pos) => Math.min(input.length, pos + 1))
                }

                if (e.key === "Backspace") {
                  e.preventDefault()
                  if (caretPos > 0) {
                    const newValue =
                      input.slice(0, caretPos - 1) + input.slice(caretPos)
                    setInput(newValue)
                    setCaretPos((pos) => pos - 1)
                  }
                }

                if (e.key === "Delete") {
                  e.preventDefault()
                  const newValue =
                    input.slice(0, caretPos) + input.slice(caretPos + 1)
                  setInput(newValue)
                }

                if (e.key === "ArrowUp") {
                  e.preventDefault()
                  if (commandHistory.length === 0) return
                  const newIndex =
                    historyIndex === null
                      ? commandHistory.length - 1
                      : Math.max(0, historyIndex - 1)
                  const newCmd = commandHistory[newIndex]
                  setHistoryIndex(newIndex)
                  setInput(newCmd)
                  setCaretPos(newCmd.length)
                }

                if (e.key === "ArrowDown") {
                  e.preventDefault()
                  if (commandHistory.length === 0) return
                  const newIndex =
                    historyIndex === null
                      ? commandHistory.length
                      : Math.min(commandHistory.length, historyIndex + 1)

                  if (newIndex < commandHistory.length) {
                    const newCmd = commandHistory[newIndex]
                    setInput(newCmd)
                    setCaretPos(newCmd.length)
                    setHistoryIndex(newIndex)
                  } else {
                    setInput("")
                    setCaretPos(0)
                    setHistoryIndex(null)
                  }
                }
              }}
              autoFocus
            />
          </div>
        </form>
      </div>
    </div>
  )
}
