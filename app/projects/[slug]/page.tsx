import { RetroNav } from "@/components/retro-nav"
import { RetroFooter } from "@/components/retro-footer"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import Link from "next/link"

const projectData: Record<
  string,
  {
    title: string
    description: string
    longDescription: string
    tags: string[]
    github?: string
    live?: string
    year: string
    status: string
  }
> = {
  "neon-runner": {
    title: "NEON_RUNNER",
    description: "A cyberpunk endless runner game",
    longDescription:
      "Neon Runner is an immersive endless runner game set in a cyberpunk dystopia. Players navigate through procedurally generated cityscapes, dodging obstacles and collecting power-ups while synthwave music pulses in the background. Built with WebGL and Three.js for smooth 60fps performance across all devices.",
    tags: ["WebGL", "Three.js", "TypeScript", "GLSL", "Web Audio API"],
    github: "https://github.com",
    live: "https://example.com",
    year: "2024",
    status: "ACTIVE",
  },
  "pixel-cms": {
    title: "PIXEL_CMS",
    description: "Terminal-based content management",
    longDescription:
      "A unique CMS that brings back the nostalgia of command-line interfaces. Pixel CMS allows developers to manage content through a terminal-style interface, complete with custom commands, vim-like keybindings, and ASCII art dashboards. Perfect for developers who prefer keyboard-driven workflows.",
    tags: ["Next.js", "PostgreSQL", "Tailwind", "Prisma", "tRPC"],
    github: "https://github.com",
    year: "2024",
    status: "BETA",
  },
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projectData[slug] || {
    title: slug.toUpperCase().replace(/-/g, "_"),
    description: "Project details loading...",
    longDescription: "This project showcases innovative solutions with retro aesthetics. More details coming soon.",
    tags: ["Coming Soon"],
    year: "2024",
    status: "WIP",
  }

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="scanlines fixed inset-0 pointer-events-none" />
      <RetroNav />

      <main className="flex-1 pt-28 pb-16 grid-bg">
        <article className="px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-secondary text-[10px] tracking-wider hover:neon-text-cyan transition-all mb-8"
            >
              <ArrowLeft size={16} /> BACK_TO_PROJECTS
            </Link>

            {/* Header */}
            <header className="mb-12 space-y-6">
              <div className="flex flex-wrap items-center gap-4">
                <span className="px-3 py-1 bg-primary text-primary-foreground text-[8px] tracking-wider">
                  {project.status}
                </span>
                <span className="text-muted-foreground text-[10px]">
                  {"// "}
                  {project.year}
                </span>
              </div>
              <h1 className="text-xl md:text-3xl text-primary neon-text-pink">{project.title}</h1>
              <p className="text-foreground font-[family-name:var(--font-terminal)] text-xl">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] px-3 py-1 border-2 border-secondary text-secondary">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 px-4 py-2 border-2 border-foreground text-foreground text-[10px] hover:bg-foreground hover:text-background transition-all"
                  >
                    <Github size={16} /> SOURCE_CODE
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground text-[10px] hover:bg-accent/80 transition-all"
                  >
                    <ExternalLink size={16} /> LIVE_DEMO
                  </a>
                )}
              </div>
            </header>

            {/* Content */}
            <div className="space-y-8">
              <section className="border-4 border-primary p-6 bg-card">
                <h2 className="text-sm text-primary mb-4">{"// OVERVIEW"}</h2>
                <p className="text-foreground font-[family-name:var(--font-terminal)] text-lg leading-relaxed">
                  {project.longDescription}
                </p>
              </section>

              {/* Placeholder Screenshot */}
              <div className="border-4 border-secondary p-4 bg-muted">
                <div className="aspect-video bg-card flex items-center justify-center">
                  <p className="text-secondary text-[10px] tracking-wider">[SCREENSHOT_PLACEHOLDER]</p>
                </div>
              </div>

              {/* Features */}
              <section className="border-4 border-accent p-6 bg-card">
                <h2 className="text-sm text-accent mb-4 neon-text-green">{"// FEATURES"}</h2>
                <ul className="space-y-3 font-[family-name:var(--font-terminal)] text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-accent">▸</span>
                    <span className="text-foreground">Procedurally generated environments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent">▸</span>
                    <span className="text-foreground">60fps performance across all devices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent">▸</span>
                    <span className="text-foreground">Custom shader effects and post-processing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent">▸</span>
                    <span className="text-foreground">Responsive controls for touch and keyboard</span>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </article>
      </main>

      <RetroFooter />
    </div>
  )
}
