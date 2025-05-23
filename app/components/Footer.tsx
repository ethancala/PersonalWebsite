import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border mt-16">
      <div className="container mx-auto px-4 py-10 flex flex-col items-center">
        {/* Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/ethancala"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-transform duration-200 hover:scale-110"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/ethan-cala-6401642aa/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-transform duration-200 hover:scale-110"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:ecala420@gmail.com"
            className="text-foreground hover:text-primary transition-transform duration-200 hover:scale-110"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} Ethan Cala. All rights reserved.
        </p>

        {/* Optional: Add branding */}
        {/* <p className="text-xs text-muted-foreground mt-1">Built with Next.js & Tailwind CSS</p> */}
      </div>
    </footer>
  )
}
