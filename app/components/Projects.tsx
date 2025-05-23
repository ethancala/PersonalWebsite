"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"

const projects = [
  {
    title: "Mode Score",
    description: "A full-stack DeFi solution built and deployed during my time at BCAMP.",
    details: "Mode Score is a dApp that evaluates and optimizes your digital assets across multiple ecosystems with a capital efficiency score, and a user-friendly interface. It integrates wallets, recommends opportunities, and is especially helpful for newcomers to DeFi.",
    technologies: ["React", "Next.js", "Vercel", "TypeScript", "Python", "fastAPI", "Tailwind CSS"],
    github: "https://github.com/0xBcamp/mode-score-frontend",
    demo: "https://mode-score-app.vercel.app/"
  },
  {
    title: "Portfolio Website",
    description: "You're currently looking at it!",
    details: "A collection of my professional work, including projects, work experience, and skills.",
    technologies: ["Next.js", "React", "Toast", "Vercel", "Tailwind CSS"],
    github: "https://github.com/ethancala/PersonalWebsite",
    demo: "https://www.ethancala.dev/"
  },
  {
    title: "Syllabye",
    description: "A web platform to simplify syllabus creation and access for professors and students.",
    details: "Syllabye enables users to build, upload, and interact with dynamic syllabi. The platform prioritizes accessibility, usability, and adaptability by implementing modular components, translation-ready interfaces, and scalable design systems.",
    technologies: ["Vite-React", "Firebase", "Tailwind", "NodeJS", "JSON", "Bootstrap"],
    github: "https://github.com/ChairForce-1-0/Syllabye-Capstone",
    demo: "https://gentle-moss-0fd314310.4.azurestaticapps.net/"
  },
  {
    title: "PC Builder Prototype",
    description: "A prototype of a custom PC builder app using ASP.NET Core.",
    details: "Built using ASP.NET Core MVC and SQLite, this prototype demonstrates an e-commerce-like flow for selecting and validating PC components.",
    technologies: ["C#", "ASP.NET core", "JavaScript", "HTML", "SQLite"],
    github: "https://github.com/ethancala/PCBuilderAppPrototype",
    demo: "https://github.com/ethancala/PCBuilderAppPrototype"
  },
  {
    title: "Higher Or Lower Game",
    description: "A simple card game where users wager in-game currency.",
    details: "Web app using Flask, Bootstrap, and MongoDB. Players guess if the next card is higher or lower and can wager virtual currency on their prediction.",
    technologies: ["Flask", "Python", "JavaScript", "HTML", "MongoDB", "Bootstrap"],
    github: "https://github.com/ethancala/Higher-or-Lower-Game",
    demo: "https://github.com/ethancala/Higher-or-Lower-Game"
  },
  {
    title: "To-do List",
    description: "A minimalist task management app using local storage.",
    details: "This app allows users to view, add, delete, and complete tasks entirely in the browser using local storage. No sign-ins, no backend.",
    technologies: ["JavaScript", "LocalStorage", "jQuery", "JSON", "Bootstrap"],
    github: "https://github.com/ethancala/ToDolist",
    demo: "https://github.com/ethancala/ToDolist"
  }
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="transition-all hover:shadow-md hover:scale-[1.01] duration-200">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-muted px-2 py-1 text-xs rounded-md text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      onClick={() => setSelectedProject(project)}
                    >
                      Learn More
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{selectedProject?.title}</DialogTitle>
                      <DialogDescription>{selectedProject?.description}</DialogDescription>
                    </DialogHeader>
                    <div className="mt-4 space-y-3 text-sm">
                      <p>{selectedProject?.details}</p>
                      <div>
                        <strong>Technologies:</strong>
                        <ul className="list-disc list-inside mt-1">
                          {selectedProject?.technologies.map((tech) => (
                            <li key={tech}>{tech}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="flex justify-end gap-2 mt-6">
                      <Button asChild variant="secondary">
                        <a href={selectedProject?.github} target="_blank" rel="noopener noreferrer">
                          GitHub
                        </a>
                      </Button>
                      <Button asChild>
                        <a href={selectedProject?.demo} target="_blank" rel="noopener noreferrer">
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
