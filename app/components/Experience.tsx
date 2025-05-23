"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const experiences = [
  {
    role: "Web Applications Developer (Frontend)",
    company: "BCAMP",
    location: "Chicago, IL",
    date: "June 2024 – August 2024",
    website: "https://bcamp.dev/",
    responsibilities: [
      "Designed and implemented a responsive web interface using React, TypeScript, and Tailwind, deployed via Vercel.",
      "Integrated WalletAPI services, enabling support for 400+ wallet services through secure connection flows.",
      "Consumed and rendered backend data from a Python FastAPI service, optimizing user experience and interface responsiveness.",
      "Authored internal documentation to support component reusability, onboarding, and long-term maintenance.",
      "Deployed production builds using Vercel’s cloud-based CI/CD platform, ensuring fast iteration and reliable uptime."
    ]
  },
  {
    role: "IT Operations Engineer Intern",
    company: "Sidley Austin LLP",
    location: "Chicago, IL",
    date: "February 2024 – Present",
    website: "https://www.sidley.com/en/us/",
    responsibilities: [
      "Designed and deployed automation using Python, Selenium, and SQL to interact with secured SSRS portals for EOD reporting.",
      "Developed telemetry integration pipelines feeding Splunk and internal monitoring systems from legacy platforms.",
      "Automated infrastructure checks using Python, PowerShell, and Bash, reducing manual overhead for ITOC operations.",
      "Imaged and deployed machines for 500+ users; migrated user data and performed DoD-compliant secure device wipes across 250+ assets.",
      "Monitored incidents, collaborated on resolutions, and contributed to enterprise IT support operations.",
      "Assisted with new hire onboarding by ensuring seamless tech integration.",
      "Gained hands-on experience at the intersection of IT operations, software engineering, and observability."
    ]
  },
  {
    role: "Computer Science & Math Tutor",
    company: "Freelance",
    location: "Remote",
    date: "August 2023 – Present",
    website: "https://www.ethancala.dev/",
    responsibilities: [
      "Provided tutoring in calculus, discrete mathematics, and computer science topics, including object-oriented and full-stack development.",
      "Specialized in Java programming and guided students through foundational and advanced concepts.",
      "Designed customized lesson plans to meet individual student needs and learning styles."
    ]
  }
];



export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((post, index) => (
          <motion.div
            key={post.role + post.company}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">{post.role}</CardTitle>
                <CardDescription className="text-sm">{post.company} · {post.location}</CardDescription>
                <p className="text-xs text-muted-foreground">{post.date}</p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                  {post.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link">
                  <a href={post.website} target="_blank" rel="noopener noreferrer">Visit Employer Website</a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}