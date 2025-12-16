"use client"

import { useState, useRef, useEffect } from "react"
import { RetroNav } from "@/components/retro-nav"
import { RetroFooter } from "@/components/retro-footer"
import { PixelCard } from "@/components/pixel-card"
import { SectionHeader } from "@/components/section-header"
import { StatsDisplay } from "@/components/stats-display"
import { ArrowRight, Briefcase, FileText } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"

const featuredProjects: Array<{
  title: string
  description: string
  href: string
  tags: string[]
}> = [
  {
    title: "Portfolio website",
    description: "Personal portfolio website built with Next.js, TypeScript, and Tailwind CSS featuring a retro pixel art aesthetic.",
    href: "/projects/portfolio-website",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Advancing the Dual Lyapunov Method for Control Engineering",
    description: "Research on dual Lyapunov functions for analyzing stability and convergence in control systems with applications to synchronization.",
    href: "/projects/dual-lyapunov-method",
    tags: ["Control Theory", "Research", "MATLAB"]
  },
  {
    title: "Designing a composite Hyperloop chassis",
    description: "Designed and analyzed a composite chassis structure for Hyperloop Manchester pod using advanced materials and FEA simulations.",
    href: "/projects/hyperloop-chassis",
    tags: ["Aerospace", "Composites", "CAD"]
  }
]

const recentPosts: Array<{
  title: string
  description: string
  href: string
  date: string
}> = []

const featuredPublication = {
  title: "Stability Certificates for Dynamical Systems on the Torus",
  journal: "Turkish Automatic Control Conference",
  year: "2025",
  description:
    "Study on generalized Kuramoto models using semidefinite programming certificates for local phase synchronization. Demonstrates practical application to four-oscillator systems.",
  href: "https://zenodo.org/records/17737744",
}

const stats = [
  { label: "Projects", value: "4" },
  { label: "Blog Posts", value: "0" },
  { label: "Publications", value: "1" },
]

const workExperience = [
  {
    company: "Stealth Startup",
    role: "Co-Founder & CEO",
    period: "Aug 2025 - Present",
    description:
      "Building the super-app for clinics.",
    logo: "/images/stealth-logo.png",
  },
  {
    company: "Eper Technologies",
    role: "Co-Founder",
    period: "Mar 2025 - Present",
    description:
      "Developing unmanned systems. Focus on aircraft systems, avionics, and related technologies.",
    logo: "/images/eper-logo.png",
  },
  {
    company: "Kadir Has University",
    role: "Research Associate",
    period: "Mar 2025 - Present",
    description:
      "Researching the applications of dual Lyapunov method for control engineering.",
    logo: "/images/kadir-has-logo.png",
  },
  {
    company: "Teo Clinic",
    role: "Chief Growth Officer",
    period: "Dec 2021 - Mar 2025",
    description: "Oversaw customer relations, data management and marketing. Participated in prestigious gatherings including Teo & Nayak, Dallas Cosmetic Medicine & Rhinoplasty Meeting, PRS Korea, AFCF Toulouse.",
    logo: "/images/teo-logo.png",
  },
]

const education = [
  {
    institution: "The University of Manchester",
    degree: "Bachelor of Engineering - BE, Aerospace Engineering",
    period: "Sep 2022 - Jun 2025",
    grade: "3.70/4",
    activities: "Hyperloop Manchester Committee Member, University of Manchester Mixed Martial Arts Society President",
  },
  {
    institution: "Lycee Saint Joseph D'Izmir",
    degree: "High School Diploma",
    period: "2018 - 2022",
    grade: "",
    activities: "",
  },
]

export default function HomePage() {
  const router = useRouter()
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault()
    const command = input.trim().toLowerCase()

    // Add command to history and keep only last 3 entries
    setHistory(prev => {
      const newHistory = [...prev, `$ ${input}`]
      return newHistory.slice(-3)
    })

    // Main navigation commands
    if (command === "projects") {
      router.push("/projects")
    } else if (command === "blog" || command === "posts") {
      router.push("/blog")
    } else if (command === "publications") {
      router.push("/publications")
    }
    // Specific project commands
    else if (command === "portfolio" || command === "portfolio website") {
      router.push("/projects/portfolio-website")
    } else if (command === "dual lyapunov" || command === "lyapunov" || command === "control theory") {
      router.push("/projects/dual-lyapunov-method")
    } else if (command === "hyperloop" || command === "hyperloop chassis") {
      router.push("/projects/hyperloop-chassis")
    } else if (command === "rocket" || command === "rocket trajectory") {
      router.push("/projects/rocket-trajectory")
    }
    // Work experience commands
    else if (command === "stealth startup" || command === "stealth") {
      setHistory(prev => [...prev, "Co-Founder & CEO at Stealth Startup (Aug 2025 - Present): Building the super-app for clinics."].slice(-3))
    } else if (command === "eper" || command === "eper technologies") {
      setHistory(prev => [...prev, "Co-Founder at Eper Technologies (Mar 2025 - Present): Developing unmanned systems. Focus on aircraft systems, avionics, and related technologies."].slice(-3))
    } else if (command === "kadir has" || command === "kadir has university") {
      setHistory(prev => [...prev, "Research Associate at Kadir Has University (Mar 2025 - Present): Researching the applications of dual Lyapunov method for control engineering."].slice(-3))
    } else if (command === "teo" || command === "teo clinic") {
      setHistory(prev => [...prev, "Chief Growth Officer at Teo Clinic (Dec 2021 - Mar 2025): Oversaw customer relations, data management and marketing."].slice(-3))
    }
    // Education commands
    else if (command === "manchester" || command === "university of manchester") {
      setHistory(prev => [...prev, "The University of Manchester (Sep 2022 - Jun 2025): Bachelor of Engineering - Aerospace Engineering, GPA: 3.70/4"].slice(-3))
    } else if (command === "lycee" || command === "saint joseph") {
      setHistory(prev => [...prev, "Lycee Saint Joseph D'Izmir (2018 - 2022): High School Diploma"].slice(-3))
    }
    // Help command
    else if (command === "help") {
      setHistory([
        "=== TERMINAL NAVIGATION ===",
        "",
        "Main Pages:",
        "  projects       - View all projects",
        "  blog, posts    - Read blog posts",
        "  publications   - View publications",
        "",
        "Specific Projects:",
        "  portfolio      - Portfolio website",
        "  lyapunov       - Dual Lyapunov research",
        "  hyperloop      - Hyperloop chassis design",
        "  rocket         - Rocket trajectory tool",
        "",
        "Work & Education:",
        "  stealth        - Stealth Startup info",
        "  eper           - Eper Technologies info",
        "  kadir has      - Research position",
        "  teo            - Teo Clinic role",
        "  manchester     - University info",
        "",
        "Utility:",
        "  clear          - Clear terminal history",
        "  help           - Show this message"
      ])
    } else if (command === "clear") {
      setHistory([])
    } else if (command) {
      setHistory(prev => [...prev, `Command not found: ${command}. Type 'help' for available commands.`].slice(-3))
    }

    setInput("")
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="paper-texture fixed inset-0 pointer-events-none" />
      <RetroNav />

      <main className="flex-1 pt-24 grass-bg">
        <section className="min-h-[80vh] flex items-center justify-center px-4 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex justify-center">
              <Image
                src="/images/pixelcengo.png"
                alt="Cengizhan Dogan"
                width={150}
                height={150}
                className="border-4 border-primary shadow-[4px_4px_0_oklch(0.45_0.12_145)]"
              />
            </div>

            <div className="space-y-4">
              <h1 className="font-[family-name:var(--font-pixel)] text-lg md:text-2xl lg:text-3xl text-primary pixel-text-green leading-relaxed">
                Cengizhan Dogan
              </h1>
              <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary via-secondary to-accent" />
            </div>

            <p className="text-foreground text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
              Engineer that loves working on new ideas and bringing projects to life, always up for a challenge.
            </p>

            {/* Retro Terminal */}
            <div className="max-w-2xl mx-auto w-full">
              <div className="bg-card border-4 border-primary p-6 shadow-[4px_4px_0_oklch(0.45_0.12_145)] text-left">
                <div className="flex items-center gap-2 mb-4 pb-4 border-b-2 border-border">
                  <div className="w-3 h-3 bg-destructive" />
                  <div className="w-3 h-3 bg-secondary" />
                  <div className="w-3 h-3 bg-primary" />
                  <span className="ml-4 font-[family-name:var(--font-pixel)] text-[10px] text-muted-foreground">
                    ~/cengizhandogan
                  </span>
                </div>
                <div className="space-y-2 mb-4 max-h-32 overflow-y-auto">
                  {history.map((line, i) => (
                    <div key={i} className="font-[family-name:var(--font-terminal)] text-sm text-foreground">
                      {line}
                    </div>
                  ))}
                </div>
                <form onSubmit={handleCommand} className="flex items-center gap-2">
                  <span className="text-primary font-[family-name:var(--font-terminal)]">$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-foreground font-[family-name:var(--font-terminal)] text-lg"
                    placeholder="Type 'help' for commands..."
                    autoComplete="off"
                  />
                  <span className="gentle-blink text-primary">_</span>
                </form>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
        </section>

        {/* Stats Section */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <StatsDisplay stats={stats} />
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <SectionHeader title="Work Experience" subtitle="Professional background" variant="brown" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {workExperience.map((job, index) => (
                <div
                  key={job.company}
                  className={`p-6 bg-card border-4 shadow-[4px_4px_0] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0] ${
                    index % 3 === 0
                      ? "border-primary shadow-primary/40"
                      : index % 3 === 1
                        ? "border-secondary shadow-secondary/40"
                        : "border-accent shadow-accent/40"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Image
                        src={job.logo}
                        alt={`${job.company} logo`}
                        width={48}
                        height={48}
                        className="rounded border-2 border-border object-contain bg-background"
                      />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <h3 className="font-[family-name:var(--font-pixel)] text-[10px] text-foreground tracking-wider">
                          {job.company}
                        </h3>
                        <span className="font-[family-name:var(--font-pixel)] text-[8px] text-muted-foreground">
                          {job.period}
                        </span>
                      </div>
                      <p
                        className={`text-sm font-medium ${
                          index % 3 === 0 ? "text-primary" : index % 3 === 1 ? "text-secondary" : "text-accent"
                        }`}
                      >
                        {job.role}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{job.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section
          className="py-16 px-4 relative"
          style={{
            backgroundImage: 'url(/images/pixelist.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-background/80" />
          <div className="max-w-6xl mx-auto relative z-10">
            <SectionHeader title="Featured Projects" subtitle="Recent work" variant="green" />
            {featuredProjects.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-xl">No projects yet ~</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProjects.map((project, index) => (
                  <PixelCard
                    key={project.title}
                    {...project}
                    variant={index === 1 ? "brown" : index === 2 ? "sky" : "green"}
                  />
                ))}
              </div>
            )}
            <div className="mt-8 text-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-primary font-[family-name:var(--font-pixel)] text-[10px] tracking-wider hover:pixel-text-green transition-all"
              >
                View all projects <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Recent Blog Posts */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <SectionHeader title="Recent Posts" subtitle="Latest articles" variant="brown" />
            {recentPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-xl">No posts yet ~</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recentPosts.map((post) => (
                  <PixelCard key={post.title} {...post} variant="brown" />
                ))}
              </div>
            )}
            <div className="mt-8 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-secondary font-[family-name:var(--font-pixel)] text-[10px] tracking-wider hover:pixel-text-brown transition-all"
              >
                View all posts <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeader title="Publications" subtitle="Academic work" variant="sky" />
            <div className="max-w-2xl mx-auto">
              <Link
                href={featuredPublication.href}
                className="block p-6 bg-card border-4 border-accent shadow-[4px_4px_0_oklch(0.55_0.08_220)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_oklch(0.55_0.08_220)] transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/20">
                    <FileText className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="font-[family-name:var(--font-pixel)] text-[10px] md:text-xs text-foreground tracking-wider leading-relaxed">
                      {featuredPublication.title}
                    </h3>
                    <p className="text-sm text-accent font-medium">
                      {featuredPublication.journal} · {featuredPublication.year}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{featuredPublication.description}</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/publications"
                className="inline-flex items-center gap-2 text-accent font-[family-name:var(--font-pixel)] text-[10px] tracking-wider hover:pixel-text-sky transition-all"
              >
                View all publications <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <SectionHeader title="Education" subtitle="Academic background" variant="green" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <div
                  key={edu.institution}
                  className={`p-6 bg-card border-4 shadow-[4px_4px_0] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0] ${
                    index % 2 === 0
                      ? "border-primary shadow-primary/40"
                      : "border-secondary shadow-secondary/40"
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex flex-col gap-1">
                      <h3 className="font-[family-name:var(--font-pixel)] text-[10px] text-foreground tracking-wider">
                        {edu.institution}
                      </h3>
                      <span className="font-[family-name:var(--font-pixel)] text-[8px] text-muted-foreground">
                        {edu.period}
                      </span>
                    </div>
                    <p className={`text-sm font-medium ${
                      index % 2 === 0 ? "text-primary" : "text-secondary"
                    }`}>
                      {edu.degree}
                    </p>
                    {edu.grade && (
                      <p className="text-muted-foreground text-sm">Grade: {edu.grade}</p>
                    )}
                    {edu.activities && (
                      <p className="text-muted-foreground text-sm leading-relaxed">{edu.activities}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
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
              href="mailto:hello@cengizhandogan.com"
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
