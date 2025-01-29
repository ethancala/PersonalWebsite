import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/ethancala" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/ethan-cala-6401642aa/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="mailto:ecala420@gmail.com" className="text-foreground hover:text-primary">
            <Mail className="h-6 w-6" />
          </a>
        </div>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ethan Cala. All rights reserved.
        </p>
      </div>
    </footer>
  )
}