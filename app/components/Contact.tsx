"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
    
  })

  //const [successMessage, setSuccessMessage] = useState("")

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formEndpoint = "https://formsubmit.co/ecala420@gmail.com"

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert("Form submitted!");
        // toast({
        //   title: "Message Sent!",
        //   description: "Thank you for your message. I'll get back to you soon!",
        // })
        setFormData({ name: "", email: "", message: "" })
      } else {
        alert("Form failed to submit :(, please try again.");
        throw new Error("Failed to send message")
      }
    } catch (error) {
      toast({
        title: "Error!",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      })
    }
  }

  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </motion.div>
    </section>
  )
}
