"use client"

import Image from 'next/image';
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
        <p className="text-xl mb-8">Computer Scientist |  Software Engineer | IT Professional</p>
        
        <div className="mx-auto mb-6">
        <img
            src="/assets/me.png"  
            alt="Ethan Cala"
            className="w-48 h-48 rounded-full object-cover mx-auto border-4 border-solid border-gray-800"
          />
        </div>

        <p className="max-w-2xl mx-auto mb-8">
          Passionate about creating innovative solutions and constantly learning new technologies. 
          Specializing in web development, IT, and software engineering.
        </p>

        <a href="/EthanCalaRE.docx" download="EthanCalaResume.docx"><Button variant="outline"  className="bg-white text-black border-2 border-black hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors">
  Download CV
</Button></a>
       

      </motion.div>
    </section>
  )
}