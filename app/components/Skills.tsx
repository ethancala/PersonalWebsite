"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const skills = [
  "JavaScript", "TypeScript", "React", "Node.js", "Python", "Java", 
  "SQL", "MongoDB", "Git", "Docker", "AWS", "Machine Learning"
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="flex items-center justify-center p-4">
                <span>{skill}</span>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}