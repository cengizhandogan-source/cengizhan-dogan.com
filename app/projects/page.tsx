import { RetroNav } from "@/components/retro-nav"
import { RetroFooter } from "@/components/retro-footer"
import { PixelCard } from "@/components/pixel-card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const projects: Array<{
  title: string
  description: string
  href: string
  tags: string[]
  category: string
  year: string
}> = [
  {
    title: "Fluid Mechanics Analysis of Teorhinoplasty",
    description: "Researching the fluid dynamics behind how Teorhinoplasty allows patients to breathe properly.",
    href: "/projects/teorhinoplasty-fluid-mechanics",
    tags: ["Fluid Mechanics", "Medical", "Research"],
    category: "research",
    year: "2025"
  },
  {
    title: "Introduction to UAVs Course",
    description: "Conducted a free UAV 101 course to teach the principles of flight, UAV components and basic flight safety. 300+ signups for the course that was taught both in English and Turkish.",
    href: "/projects/uav-course",
    tags: ["UAV", "Education", "Aerospace"],
    category: "education",
    year: "2025"
  },
  {
    title: "Advancing the Dual Lyapunov Method for Control Engineering",
    description: "Research on dual Lyapunov functions for analyzing stability and convergence in control systems with applications to synchronization.",
    href: "/projects/dual-lyapunov-method",
    tags: ["Control Theory", "Research", "MATLAB"],
    category: "research",
    year: "2025"
  },
  {
    title: "Designing a composite Hyperloop chassis",
    description: "Designed and analyzed a composite chassis structure for Hyperloop Manchester pod using advanced materials and FEA simulations.",
    href: "/projects/hyperloop-chassis",
    tags: ["Aerospace", "Composites", "CAD"],
    category: "engineering",
    year: "2024"
  },
  {
    title: "MATLAB Rocket trajectory script",
    description: "Simulation tool for calculating and visualizing rocket trajectories with atmospheric models and propulsion parameters.",
    href: "/projects/rocket-trajectory",
    tags: ["MATLAB", "Aerospace", "Simulation"],
    category: "engineering",
    year: "2022"
  }
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
            {/* Back Button */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-secondary text-[10px] tracking-wider hover:neon-text-cyan transition-all mb-8"
            >
              <ArrowLeft size={16} /> BACK_TO_HOME
            </Link>
            <div className="space-y-4 mb-12">
              <p className="text-secondary text-base tracking-widest">~ Projects ~</p>
              <h1 className="font-[family-name:var(--font-pixel)] text-lg md:text-xl lg:text-2xl text-primary pixel-text-green">
                Projects
              </h1>
              <p className="text-foreground text-lg md:text-xl max-w-2xl">
                A collection of web applications, tools, and open-source contributions demonstrating modern development practices.
              </p>
            </div>

            {/* Project Stats */}
            <div className="flex flex-wrap gap-4 mb-12">
              <div className="px-4 py-2 border-4 border-primary bg-primary/10 shadow-[3px_3px_0_oklch(0.45_0.12_145)]">
                <span className="font-[family-name:var(--font-pixel)] text-[10px] text-primary">Total: 5 Projects</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-4">
          <div className="max-w-6xl mx-auto">
            {projects.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-xl">No projects yet ~</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <PixelCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    href={project.href}
                    tags={project.tags}
                    date={project.year}
                    variant={index % 3 === 0 ? "green" : index % 3 === 1 ? "brown" : "sky"}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="font-[family-name:var(--font-pixel)] text-sm md:text-base text-accent pixel-text-sky tracking-wider">
              Let's work together
            </h2>
            <p className="text-foreground text-lg md:text-xl">
              Interested in collaborating? Reach out to discuss your project.
            </p>
            <a
              href="mailto:cengizhan@eperteknoloji.com"
              className="inline-block px-8 py-4 bg-accent text-accent-foreground font-[family-name:var(--font-pixel)] text-xs tracking-wider shadow-[4px_4px_0_oklch(0.55_0.08_220)] hover:shadow-[2px_2px_0_oklch(0.55_0.08_220)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              Get in Touch ~
            </a>
          </div>
        </section>
      </main>

      <RetroFooter />
    </div>
  )
}
