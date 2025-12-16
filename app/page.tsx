import { RetroNav } from "@/components/retro-nav"
import { RetroFooter } from "@/components/retro-footer"
import { PixelCard } from "@/components/pixel-card"
import { SectionHeader } from "@/components/section-header"
import { StatsDisplay } from "@/components/stats-display"
import { ArrowRight, Briefcase, FileText } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const featuredProjects = [
  {
    title: "Meadow Runner",
    description:
      "A peaceful endless runner game through pixelated forests and meadows. Features relaxing music and seasonal changes.",
    href: "/projects/meadow-runner",
    tags: ["WebGL", "Three.js", "TypeScript"],
  },
  {
    title: "Garden CMS",
    description:
      "A cozy content management system with a nature-inspired interface. Perfect for bloggers and creative writers.",
    href: "/projects/garden-cms",
    tags: ["Next.js", "PostgreSQL", "Tailwind"],
  },
  {
    title: "Ambient API",
    description:
      "RESTful API for generating ambient nature soundscapes. Create peaceful audio environments programmatically.",
    href: "/projects/ambient-api",
    tags: ["Python", "FastAPI", "AI/ML"],
  },
]

const recentPosts = [
  {
    title: "Building Cozy UIs with Modern Tech",
    description: "How to create warm, inviting aesthetics using soft colors, pixel fonts, and gentle animations.",
    href: "/blog/cozy-ui-modern-tech",
    date: "2024.12.10",
  },
  {
    title: "The Art of Pixel Perfect Design",
    description: "Lessons learned from classic video game UI design and how to apply them to web development.",
    href: "/blog/pixel-perfect-design",
    date: "2024.12.05",
  },
]

const featuredPublication = {
  title: "Designing Calm Interfaces for the Modern Web",
  journal: "Journal of Human-Computer Interaction",
  year: "2024",
  description:
    "A research paper exploring how pixel art aesthetics and warm color palettes can reduce user stress and improve engagement in web applications.",
  href: "/publications",
}

const stats = [
  { label: "Projects", value: "42" },
  { label: "Blog Posts", value: "128" },
  { label: "Publications", value: "15" },
  { label: "Cups of Tea", value: "∞" },
]

const workExperience = [
  {
    company: "Pixel Studios",
    role: "Senior Frontend Developer",
    period: "2022 - Present",
    description:
      "Leading UI development for cozy indie games and web applications with a focus on accessible, delightful experiences.",
  },
  {
    company: "Garden Tech Co.",
    role: "Full Stack Developer",
    period: "2020 - 2022",
    description:
      "Built scalable web platforms for sustainable agriculture startups, from seed to harvest tracking systems.",
  },
  {
    company: "Meadow Digital",
    role: "Frontend Developer",
    period: "2018 - 2020",
    description:
      "Crafted responsive websites and e-commerce solutions for small businesses with warm, inviting designs.",
  },
  {
    company: "Sunrise Labs",
    role: "Junior Developer",
    period: "2016 - 2018",
    description: "Started my journey building internal tools and learning the craft of clean, maintainable code.",
  },
]

export default function HomePage() {
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
                Welcome to my
                <br />
                <span className="text-secondary pixel-text-brown">Cozy Corner</span>
              </h1>
              <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary via-secondary to-accent" />
            </div>

            <p className="text-foreground text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
              Full-stack developer crafting digital experiences with a love for pixel art, cozy games, and peaceful
              design.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/projects"
                className="px-6 py-3 bg-primary text-primary-foreground font-[family-name:var(--font-pixel)] text-[10px] md:text-xs tracking-wider shadow-[4px_4px_0_oklch(0.45_0.12_145)] hover:shadow-[2px_2px_0_oklch(0.45_0.12_145)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                View Projects
              </Link>
              <Link
                href="/blog"
                className="px-6 py-3 border-4 border-secondary text-secondary font-[family-name:var(--font-pixel)] text-[10px] md:text-xs tracking-wider hover:bg-secondary hover:text-secondary-foreground transition-all"
              >
                Read Blog
              </Link>
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
            <SectionHeader title="Work Experience" subtitle="My journey so far" variant="brown" />
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
                    <div
                      className={`p-2 ${
                        index % 3 === 0 ? "bg-primary/20" : index % 3 === 1 ? "bg-secondary/20" : "bg-accent/20"
                      }`}
                    >
                      <Briefcase
                        className={`w-5 h-5 ${
                          index % 3 === 0 ? "text-primary" : index % 3 === 1 ? "text-secondary" : "text-accent"
                        }`}
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
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeader title="Featured Projects" subtitle="My latest creations" variant="green" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <PixelCard
                  key={project.title}
                  {...project}
                  variant={index === 1 ? "brown" : index === 2 ? "sky" : "green"}
                />
              ))}
            </div>
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
            <SectionHeader title="Recent Posts" subtitle="Thoughts and tutorials" variant="brown" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentPosts.map((post) => (
                <PixelCard key={post.title} {...post} variant="brown" />
              ))}
            </div>
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
            <SectionHeader title="Publications" subtitle="Research and writing" variant="sky" />
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

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="font-[family-name:var(--font-pixel)] text-sm md:text-base text-accent pixel-text-sky tracking-wider">
              Want to collaborate?
            </h2>
            <p className="text-foreground text-lg md:text-xl">
              I'd love to hear from you! Whether it's a project idea, a question, or just to say hi.
            </p>
            <a
              href="mailto:hello@cozypixels.dev"
              className="inline-block px-8 py-4 bg-accent text-accent-foreground font-[family-name:var(--font-pixel)] text-xs tracking-wider shadow-[4px_4px_0_oklch(0.55_0.08_220)] hover:shadow-[2px_2px_0_oklch(0.55_0.08_220)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              Say Hello ~
            </a>
          </div>
        </section>
      </main>

      <RetroFooter />
    </div>
  )
}
