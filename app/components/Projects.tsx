"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const projects = [
  {
    title: "Mode Score",
    description: "A full-stack DeFi solution built and Deployed during my time at BCAMP",
    details: "Mode Score is a dApp that evaluates and optimizes your digital assets across multiple ecosystems with a capital efficiency score, and a user-friendly interface. It integrates wallets, recommends opportunities, and is especially helpful for newcomers to DeFi.",
    technologies: ["React", "Next.js", "Vercel", "TypeScript", "Python", "fastAPI"],
    github: "https://github.com/0xBcamp/mode-score-frontend",
    demo: "https://mode-score-app.vercel.app/"
  },
  {
    title: "Portfolio Webstie",
    description: "Your currently looking at it!",
    details: "A collection of my professional work, including projects, achievements, and skills.",
    technologies: ["Next.js", "React", "Toast ", "Framer", "Tailwind"],
    github: "https://github.com/ethancala/PersonalWebsite",
    //TODO: change this to deployment URL
    demo: "http://localhost:3000/"
  },
  // Add more projects as needed
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

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