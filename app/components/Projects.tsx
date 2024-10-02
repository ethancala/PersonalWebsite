"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB.",
    details: "This project implements user authentication, product management, shopping cart functionality, and secure payment processing using Stripe.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    github: "https://github.com/yourusername/ecommerce-platform",
    demo: "https://ecommerce-platform-demo.vercel.app"
  },
  {
    title: "Machine Learning Image Classifier",
    description: "An image classification model using TensorFlow and Keras.",
    details: "This project uses transfer learning on a pre-trained CNN to classify images into 10 different categories. It includes data preprocessing, model training, and a web interface for easy use.",
    technologies: ["Python", "TensorFlow", "Keras", "Flask", "HTML/CSS"],
    github: "https://github.com/yourusername/ml-image-classifier",
    demo: "https://ml-image-classifier-demo.herokuapp.com"
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