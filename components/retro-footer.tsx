import Link from "next/link"

// Pixel art icons as SVG components
const GithubPixel = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="7" y="2" width="6" height="2" />
    <rect x="5" y="4" width="2" height="2" />
    <rect x="13" y="4" width="2" height="2" />
    <rect x="3" y="6" width="2" height="6" />
    <rect x="15" y="6" width="2" height="6" />
    <rect x="5" y="12" width="2" height="2" />
    <rect x="13" y="12" width="2" height="2" />
    <rect x="7" y="14" width="2" height="2" />
    <rect x="11" y="14" width="2" height="2" />
    <rect x="9" y="16" width="2" height="2" />
    <rect x="7" y="8" width="2" height="2" />
    <rect x="11" y="8" width="2" height="2" />
  </svg>
)

const LinkedinPixel = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="16" height="16" />
    <rect x="4" y="4" width="12" height="12" fill="var(--background)" />
    <rect x="6" y="6" width="2" height="2" />
    <rect x="6" y="9" width="2" height="5" />
    <rect x="10" y="9" width="2" height="5" />
    <rect x="12" y="11" width="2" height="3" />
    <rect x="12" y="9" width="2" height="1" />
  </svg>
)

const MailPixel = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="16" height="12" />
    <rect x="4" y="6" width="12" height="8" fill="var(--background)" />
    <rect x="6" y="8" width="2" height="2" />
    <rect x="8" y="10" width="2" height="2" />
    <rect x="10" y="10" width="2" height="2" />
    <rect x="12" y="8" width="2" height="2" />
  </svg>
)

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
              Engineer that loves working on new ideas and bringing projects to life, always up for a challenge.
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
                href="https://github.com/cengizhandogan-source"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors p-2 border-2 border-muted hover:border-primary hover:bg-primary/10"
              >
                <GithubPixel />
              </a>
              <a
                href="https://www.linkedin.com/in/cengo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors p-2 border-2 border-muted hover:border-accent hover:bg-accent/10"
              >
                <LinkedinPixel />
              </a>
              <a
                href="mailto:cengizhan@eperteknoloji.com"
                className="text-foreground hover:text-primary transition-colors p-2 border-2 border-muted hover:border-primary hover:bg-primary/10"
              >
                <MailPixel />
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
