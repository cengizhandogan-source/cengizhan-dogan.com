import { RetroNav } from "@/components/retro-nav"
import { RetroFooter } from "@/components/retro-footer"
import { PixelCard } from "@/components/pixel-card"
import { SectionHeader } from "@/components/section-header"

const projects = [
  {
    title: "Meadow Runner",
    description:
      "A peaceful endless runner game through pixelated forests and meadows. Features relaxing music and seasonal changes.",
    href: "/projects/meadow-runner",
    tags: ["WebGL", "Three.js", "TypeScript"],
    category: "game",
  },
  {
    title: "Garden CMS",
    description:
      "A cozy content management system with a nature-inspired interface. Perfect for bloggers and creative writers.",
    href: "/projects/garden-cms",
    tags: ["Next.js", "PostgreSQL", "Tailwind"],
    category: "web",
  },
  {
    title: "Ambient API",
    description:
      "RESTful API for generating ambient nature soundscapes. Create peaceful audio environments programmatically.",
    href: "/projects/ambient-api",
    tags: ["Python", "FastAPI", "AI/ML"],
    category: "api",
  },
  {
    title: "Pixel Portfolio",
    description:
      "This very portfolio you're looking at! Built with Next.js, Tailwind CSS, and a love for cozy aesthetics.",
    href: "/projects/pixel-portfolio",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    category: "web",
  },
  {
    title: "Cottage Auth",
    description: "Authentication library with a cozy theme. Features friendly captchas and gentle 2FA reminders.",
    href: "/projects/cottage-auth",
    tags: ["Node.js", "Redis", "Security"],
    category: "library",
  },
  {
    title: "Woodland CLI",
    description: "A command-line tool for organizing files with nature-themed categories. Transform your file system.",
    href: "/projects/woodland-cli",
    tags: ["Rust", "CLI", "Tools"],
    category: "tool",
  },
  {
    title: "Pattern Garden",
    description: "SVG pattern generator for creating nature-inspired backgrounds. Export as CSS, SVG, or PNG.",
    href: "/projects/pattern-garden",
    tags: ["React", "SVG", "Canvas"],
    category: "tool",
  },
  {
    title: "Campfire Chat",
    description:
      "Real-time chat application styled like a cozy campfire gathering. Features ambient sounds and warm vibes.",
    href: "/projects/campfire-chat",
    tags: ["WebSockets", "React", "Node.js"],
    category: "web",
  },
  {
    title: "Acorn DB",
    description: "A key-value database with a nature-inspired API. Perfect for small, cozy applications.",
    href: "/projects/acorn-db",
    tags: ["Go", "Database", "Storage"],
    category: "library",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="paper-texture fixed inset-0 pointer-events-none" />
      <RetroNav />

      <main className="flex-1 pt-28 pb-16 grass-bg">
        {/* Header */}
        <section className="px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-4 mb-12">
              <p className="text-secondary text-base tracking-widest">~ Projects ~</p>
              <h1 className="font-[family-name:var(--font-pixel)] text-lg md:text-xl lg:text-2xl text-primary pixel-text-green">
                My Projects
              </h1>
              <p className="text-foreground text-lg md:text-xl max-w-2xl">
                A collection of digital creations, experiments, and open-source contributions. Each project is crafted
                with care and attention to detail.
              </p>
            </div>

            {/* Project Stats */}
            <div className="flex flex-wrap gap-4 mb-12">
              <div className="px-4 py-2 border-4 border-primary bg-primary/10 shadow-[3px_3px_0_oklch(0.45_0.12_145)]">
                <span className="font-[family-name:var(--font-pixel)] text-[10px] text-primary">Total: 9 Projects</span>
              </div>
              <div className="px-4 py-2 border-4 border-secondary bg-secondary/10 shadow-[3px_3px_0_oklch(0.4_0.08_55)]">
                <span className="font-[family-name:var(--font-pixel)] text-[10px] text-secondary">Web: 3</span>
              </div>
              <div className="px-4 py-2 border-4 border-accent bg-accent/10 shadow-[3px_3px_0_oklch(0.55_0.08_220)]">
                <span className="font-[family-name:var(--font-pixel)] text-[10px] text-accent">Tools: 2</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeader title="All Projects" subtitle="Browse the complete collection" variant="green" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <PixelCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  href={project.href}
                  tags={project.tags}
                  variant={index % 3 === 0 ? "green" : index % 3 === 1 ? "brown" : "sky"}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border-4 border-secondary p-6 shadow-[4px_4px_0_oklch(0.4_0.08_55)]">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b-2 border-border">
                <div className="w-3 h-3 bg-destructive" />
                <div className="w-3 h-3 bg-secondary" />
                <div className="w-3 h-3 bg-primary" />
                <span className="ml-4 font-[family-name:var(--font-pixel)] text-[10px] text-muted-foreground">
                  ~/projects
                </span>
              </div>
              <div className="text-lg text-foreground space-y-2">
                <p>
                  <span className="text-primary">~</span> ls -la ./projects
                </p>
                <p className="text-muted-foreground">total 9 projects</p>
                <p className="text-muted-foreground">drwxr-xr-x games/</p>
                <p className="text-muted-foreground">drwxr-xr-x web/</p>
                <p className="text-muted-foreground">drwxr-xr-x tools/</p>
                <p className="text-muted-foreground">drwxr-xr-x libraries/</p>
                <p>
                  <span className="text-primary">~</span> <span className="gentle-blink">_</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <RetroFooter />
    </div>
  )
}
