"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4">Ethan Cala</h1>
        <p className="text-xl mb-8">Computer Science Student | Aspiring Software Developer</p>
        <p className="max-w-2xl mx-auto mb-8">
          Passionate about creating innovative solutions and constantly learning new technologies. 
          Specializing in web development, machine learning, and software engineering.
        </p>
        <Button size="lg">Download CV</Button>
      </motion.div>
    </section>
  )
}