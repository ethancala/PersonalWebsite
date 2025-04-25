"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

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
    description: "Syllabye is a web-based platform designed to simplify syllabus creation and access for professors and students.",
    details: "Syllabye enables users to build, upload, and interact with dynamic syllabi. The platform prioritizes accessibility, usability, and adaptability by implementing modular components, translation-ready interfaces, and scalable design systems.",
    technologies: ["Vite-React", "Firebase", "Tailwind", "NodeJS", "JSON" , "Bootstrap"],
    github: "https://github.com/ChairForce-1-0/Syllabye-Capstone",
    demo: "https://gentle-moss-0fd314310.4.azurestaticapps.net/"
  },
  
  {
    title: "PC Builder Prototype",
    description: "A super simple prototype of the PC builder web application.",
    details: "This is a super simple prototype of the PC builder web application. The app is build using ASP.net core MVC C# with a SQLight databaste.",
    technologies: ["C#", "ASP.NET core", "JavaScript", "HTML", "SQLight"],
    github: "https://github.com/ethancala/PCBuilderAppPrototype",
    demo: "https://github.com/ethancala/PCBuilderAppPrototype"
  },

  {
    title: "Higher Or Lower Game",
    description: "A simple higher or lower card game where users can wager in game currency!",
    details: "This a Web application using HTML, JS, CSS with bootstrap, python with flask, and a MongoDB database. It is a simple higher or lower card game where users can wager in game currency.",
    technologies: ["Flask", "Python", "JavaScript", "HTML", "MongoDB" , "Bootstrap"],
    github: "https://github.com/ethancala/Higher-or-Lower-Game",
    demo: "https://github.com/ethancala/Higher-or-Lower-Game"
  },

  {
    title: "To-do list",
    description: "A simple to-do list application where users can keep track of their tasks!",
    details: "This To-do-List application allows users to view, add, delete, edit, complete, and clear tasks (using a web browser like Firefox or Chrome). There are no accounts, no service logins and no software to download. The data entered lives only on the device from which it is created (local storage).",
    technologies: ["JavaScript", "LocalStorage", "JavaScript", "Jquery", "JSON" , "Bootstrap"],
    github: "https://github.com/ethancala/ToDolist",
    demo: "https://github.com/ethancala/ToDolist"
  }
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<{
    title: string
    description: string
    details: string
    technologies: string[]
    github: string
    demo: string
  } | null>(null)

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
            
            <Card>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                
                <p className="text-sm text-muted-foreground mb-4">
                  Technologies: {project.technologies.join(", ")}
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" onClick={() => setSelectedProject(project)}>Learn More</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{selectedProject?.title}</DialogTitle>
                      <DialogDescription>{selectedProject?.details}</DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-between mt-4">
                      <Button asChild>
                        <a href={selectedProject?.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                      </Button>
                      <Button asChild>
                        <a href={selectedProject?.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
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