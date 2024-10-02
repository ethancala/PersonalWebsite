"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    title: "Getting Started with React Hooks",
    description: "Learn how to use React Hooks to manage state and side effects in your functional components.",
    date: "2023-05-15",
    readMore: "/blog/react-hooks"
  },
  {
    title: "Introduction to Machine Learning with Python",
    description: "Explore the basics of machine learning and implement your first ML model using Python and scikit-learn.",
    date: "2023-06-02",
    readMore: "/blog/intro-ml-python"
  },
  {
    title: "Building RESTful APIs with Node.js and Express",
    description: "A comprehensive guide to creating robust and scalable RESTful APIs using Node.js and Express.",
    date: "2023-06-20",
    readMore: "/blog/nodejs-express-api"
  }
]

export default function Blog() {
  return (
    <section id="blog" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
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
                  <a href={post.readMore}>Read More</a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}