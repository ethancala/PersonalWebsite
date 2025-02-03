"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const experiences = [
  {
    title: "IT intern | Sidley Austin LLP",
    description: "QA machines and created documentation on software setup. Deployed and wrote PowerShell scripts to automate simplistic tasks. Wiped, protected, and migrated sensitive data. Installed and configured operating systems through server. Completed tickets for user support.",
    date: "2024-02-27 to Present" ,
    website: "https://www.sidley.com/en/us/"
  },
  {
    title: "Web Applications Engineer | BCAMP",
    description: "Modeled, documented, presented, built, and deployed full stack web application with small team of developers.	Created frontend using typescript react, tied fastAPI to frontend. Integrated wallet API into project. Developed complex algorithm to compute user’s wallet/asset efficiency using python. Built CI/CD pipeline through Vercel.",                                                                                                       
    date: "2024-05-29 to 2024-08-03",
    website: "https://bcamp.dev/"
  },
  { //TODO
    title: "Computer Science & Math Tutor | Freelance",
    description: "Provided personalized tutoring in calculus, discrete mathematics, computer science concepts including object-oriented programming (OOP) and full-stack development, with a primary focus on Java programming.",
    date: "2023-08-21 to Present",
    website: "https://www.ethancala.dev/"
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((post, index) => (
          <motion.div
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{post.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <a href={post.website}>Employer Website</a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
