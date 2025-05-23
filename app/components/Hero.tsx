"use client"

import Image from 'next/image'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="py-20 text-center bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto px-4"
      >
        <h1 className="text-5xl font-extrabold tracking-tight mb-4">
          Ethan Cala
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          Computer Scientist · Software Engineer · IT Professional
        </p>

        <div className="relative w-40 h-40 mx-auto mb-6 rounded-full border-4 border-primary shadow-md overflow-hidden">
          <Image
            src="/assets/me.png"
            alt="Ethan Cala"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        <p className="text-base text-muted-foreground mb-8 leading-relaxed">
          Passionate about building scalable, elegant solutions through software and systems design.
          I specialize in full-stack web development, IT automation, and tech operations in enterprise environments.
        </p>

        <a
          href="/EthanCalaResume.docx"
          download="EthanCalaResume.docx"
        >
          <Button variant="default" size="lg" className="transition-transform hover:scale-105">
            Download CV
          </Button>
        </a>
      </motion.div>
    </section>
  )
}
