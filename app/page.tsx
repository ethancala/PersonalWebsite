import { ThemeProvider } from "./components/theme-provider"
import Navbar from "./components/NavBar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Hero />
          <Skills />
          <Projects />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}