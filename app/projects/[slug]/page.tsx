import { RetroNav } from "@/components/retro-nav"
import { RetroFooter } from "@/components/retro-footer"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Pixel art Github icon
const GithubPixel = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
    screenshot?: string
    features?: string[]
    publicationLink?: string
  }
> = {
  "teorhinoplasty-fluid-mechanics": {
    title: "TEORHINOPLASTY_FLUID_MECHANICS",
    description: "Fluid Mechanics Analysis of Teorhinoplasty",
    longDescription:
      "Researching the fluid dynamics behind how Teorhinoplasty allows patients to breathe properly. This ongoing research project investigates the aerodynamic principles and fluid flow characteristics within nasal passages following Teorhinoplasty procedures, aiming to optimize surgical techniques for improved respiratory function.",
    tags: ["Fluid Mechanics", "Medical", "Research"],
    year: "2025",
    status: "WIP",
    features: [
      "Computational fluid dynamics (CFD) analysis of nasal airflow",
      "Pre and post-operative airflow comparison studies",
      "Optimization of surgical techniques based on fluid mechanics principles",
      "Collaboration with medical professionals to validate findings"
    ],
  },
  "uav-course": {
    title: "UAV_COURSE",
    description: "Introduction to UAVs Course",
    longDescription:
      "Conducted a free UAV 101 course to teach the principles of flight, UAV components and basic flight safety. The course attracted 300+ signups and was taught both in English and Turkish, making drone education accessible to a diverse international audience. Covered fundamental concepts from aerodynamics to practical flight operations.",
    tags: ["UAV", "Education", "Aerospace"],
    year: "2025",
    status: "COMPLETED",
    features: [
      "300+ students enrolled from diverse backgrounds",
      "Bilingual instruction (English and Turkish)",
      "Comprehensive curriculum covering principles of flight",
      "UAV components and systems architecture",
      "Flight safety protocols and regulations",
      "Hands-on practical demonstrations"
    ],
  },
  "dual-lyapunov-method": {
    title: "DUAL_LYAPUNOV_METHOD",
    description: "Advancing the Dual Lyapunov Method for Control Engineering",
    longDescription:
      "Research on dual Lyapunov functions for analyzing stability and convergence in control systems with applications to synchronization. This work explores the theoretical foundations and practical implementations of the dual Lyapunov method, demonstrating its effectiveness in analyzing complex dynamical systems and providing certificates for local phase synchronization. Working under Dr. Özkan Karabacak, head of Mechatronics Department at Kadir Has University. Presented as first author at the Turkish Automatic Control Conference 2025 in Samsun.",
    tags: ["Control Theory", "Research", "MATLAB"],
    year: "2025",
    status: "COMPLETED",
    screenshot: "/images/pixelpaper.png",
    features: [
      "Publication: Stability Certificates for Dynamical Systems on the Torus",
      "First Author & Presenter at Turkish Automatic Control Conference 2025, Samsun",
      "Focus: Generalized Kuramoto models and semidefinite programming",
      "Application: Four-oscillator system analysis and local phase synchronization"
    ],
    publicationLink: "https://zenodo.org/records/17737744",
  },
  "hyperloop-chassis": {
    title: "HYPERLOOP_CHASSIS",
    description: "Designing a composite Hyperloop chassis",
    longDescription:
      "3rd Year final project: Designed and analyzed a composite chassis structure for Hyperloop Manchester pod using advanced materials and FEA simulations. This project involved extensive research into composite materials, structural analysis, and optimization techniques to create a lightweight yet robust chassis design suitable for high-speed transportation systems.",
    tags: ["Aerospace", "Composites", "CAD"],
    year: "2024",
    status: "COMPLETED",
    screenshot: "/images/hyperloop.png",
    features: [
      "Hyperloop is a high-speed transportation concept where pods travel through low-pressure tubes to reduce air resistance and reach speeds beyond traditional trains. A major design challenge is minimizing weight while maintaining structural strength and safety.",
      "This project presents a new Hyperloop pod chassis made from carbon fiber reinforced composites instead of aluminum. The design significantly reduces weight while withstanding acceleration and braking loads.",
      "Computer simulations were used to optimize performance and safety. The resulting chassis is lighter, modular, and more suitable for future Hyperloop systems, highlighting the role of advanced materials in energy-efficient transportation."
    ],
  },
  "rocket-trajectory": {
    title: "ROCKET_TRAJECTORY",
    description: "MATLAB Rocket trajectory script",
    longDescription:
      "Simulation tool for calculating and visualizing rocket trajectories with atmospheric models and propulsion parameters. This MATLAB-based tool provides comprehensive trajectory analysis including drag calculations, thrust profiles, and real-time visualization of flight paths under various atmospheric conditions.",
    tags: ["MATLAB", "Aerospace", "Simulation"],
    year: "2022",
    status: "COMPLETED",
  },
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
              </div>
              <h1 className="text-xl md:text-3xl text-primary neon-text-pink">
                {project.title} <span className="text-muted-foreground text-lg md:text-xl">({project.year})</span>
              </h1>
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
              <div className="flex gap-4 flex-wrap">
                {project.github && (
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 px-4 py-2 border-2 border-foreground text-foreground text-[10px] hover:bg-foreground hover:text-background transition-all"
                  >
                    <GithubPixel /> SOURCE_CODE
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
                {project.publicationLink && (
                  <a
                    href={project.publicationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-[10px] hover:bg-primary/80 transition-all"
                  >
                    <ExternalLink size={16} /> VIEW_PUBLICATION
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

              {/* Screenshot */}
              <div className="border-4 border-secondary p-4 bg-muted">
                {project.screenshot ? (
                  <div className="aspect-video relative bg-card overflow-hidden">
                    <Image
                      src={project.screenshot}
                      alt={`${project.title} screenshot`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-card flex items-center justify-center">
                    <p className="text-secondary text-[10px] tracking-wider">[SCREENSHOT_PLACEHOLDER]</p>
                  </div>
                )}
              </div>

              {/* Features */}
              <section className="border-4 border-accent p-6 bg-card">
                <h2 className="text-sm text-accent mb-4 neon-text-green">{"// FEATURES"}</h2>
                <ul className="space-y-3 font-[family-name:var(--font-terminal)] text-lg">
                  {(project.features || [
                    "Procedurally generated environments",
                    "60fps performance across all devices",
                    "Custom shader effects and post-processing",
                    "Responsive controls for touch and keyboard"
                  ]).map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-accent">▸</span>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
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
