import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function RetroFooter() {
  return (
    <footer className="border-t-4 border-primary bg-muted/50 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo Section */}
          <div className="space-y-4">
            <h3 className="text-primary font-[family-name:var(--font-pixel)] text-xs pixel-text-green">
              Cengizhan Dogan
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed tracking-wide">
              Crafting digital experiences with a cozy soul. Based somewhere with good coffee and pixel dreams.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-secondary font-[family-name:var(--font-pixel)] text-[10px] tracking-wider">
              ~ Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2 text-base">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                ~ Home
              </Link>
              <Link href="/projects" className="text-foreground hover:text-primary transition-colors">
                ~ Projects
              </Link>
              <Link href="/blog" className="text-foreground hover:text-primary transition-colors">
                ~ Blog
              </Link>
              <Link href="/publications" className="text-foreground hover:text-primary transition-colors">
                ~ Publications
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-secondary font-[family-name:var(--font-pixel)] text-[10px] tracking-wider">
              ~ Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-foreground hover:text-primary transition-colors p-2 border-2 border-muted hover:border-primary hover:bg-primary/10"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="text-foreground hover:text-secondary transition-colors p-2 border-2 border-muted hover:border-secondary hover:bg-secondary/10"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-foreground hover:text-accent transition-colors p-2 border-2 border-muted hover:border-accent hover:bg-accent/10"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-foreground hover:text-primary transition-colors p-2 border-2 border-muted hover:border-primary hover:bg-primary/10"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t-2 border-primary/30 text-center">
          <p className="text-sm text-muted-foreground tracking-wide">© 2025 Cengizhan Dogan</p>
        </div>
      </div>
    </footer>
  )
}
