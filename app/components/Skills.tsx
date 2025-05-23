"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const skills = [
  "Python", "Java", "React", "Node.js", "JavaScript", "TypeScript", 
  "SQL", "MongoDB", "Git", "C#", ".NET", "Vercel", "QA", "Selenium", "Azure DevOps", 
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Skills</h2>
        <p className="text-muted-foreground text-sm">Technologies & tools I work with</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto px-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <Card className="transition-all duration-300 hover:shadow-lg hover:translate-y-[-6px] hover:border-primary border border-border rounded-xl">
              <CardContent className="flex items-center justify-center p-4 h-16 text-sm font-medium text-center text-muted-foreground">
                {skill}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
