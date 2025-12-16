import type React from "react"
import { RetroNav } from "@/components/retro-nav"
import { RetroFooter } from "@/components/retro-footer"
import { SectionHeader } from "@/components/section-header"
import { ExternalLink, FileText, BookOpen, Award } from "lucide-react"
import Link from "next/link"

const publications = [
  {
    title: "Procedural Generation in Browser-Based Games",
    venue: "ACM SIGGRAPH 2024",
    type: "Conference Paper",
    year: "2024",
    description:
      "A comprehensive study on implementing efficient procedural generation algorithms for web-based gaming experiences.",
    link: "#",
    featured: true,
  },
  {
    title: "Cozy Aesthetics in Modern UI Design",
    venue: "UX Design Journal",
    type: "Journal Article",
    year: "2024",
    description: "Exploring the resurgence of warm, comforting visual design elements in contemporary web interfaces.",
    link: "#",
    featured: true,
  },
  {
    title: "WebGL Optimization Techniques for Mobile Devices",
    venue: "Web Performance Summit",
    type: "Conference Talk",
    year: "2023",
    description: "Best practices for achieving smooth 60fps rendering on resource-constrained mobile browsers.",
    link: "#",
    featured: false,
  },
  {
    title: "The Psychology of Comfort in Digital Products",
    venue: "Digital Psychology Review",
    type: "Journal Article",
    year: "2023",
    description: "How cozy design elements affect user engagement and emotional connection with digital products.",
    link: "#",
    featured: false,
  },
  {
    title: "Building Accessible Pixel Interfaces",
    venue: "A11y Conference 2023",
    type: "Conference Paper",
    year: "2023",
    description: "Ensuring pixel-styled websites remain accessible to users with disabilities.",
    link: "#",
    featured: false,
  },
  {
    title: "CSS Art: Beyond Traditional Web Design",
    venue: "CSS-Tricks",
    type: "Guest Article",
    year: "2023",
    description: "Pushing the boundaries of CSS to create pixel art, animations, and interactive experiences.",
    link: "#",
    featured: false,
  },
  {
    title: "Ambient Audio Synthesis for Web Applications",
    venue: "Web Audio Conference",
    type: "Workshop",
    year: "2022",
    description: "Hands-on workshop on creating peaceful soundscapes and ambient music using the Web Audio API.",
    link: "#",
    featured: false,
  },
  {
    title: "The Future of Cozy: Where Comfort Meets Innovation",
    venue: "Tech Talk Podcast",
    type: "Podcast",
    year: "2022",
    description: "Discussion on how cozy aesthetics are shaping the future of digital design and gaming.",
    link: "#",
    featured: false,
  },
]

const typeIcons: Record<string, React.ReactNode> = {
  "Conference Paper": <FileText size={16} />,
  "Journal Article": <BookOpen size={16} />,
  "Conference Talk": <Award size={16} />,
  "Guest Article": <FileText size={16} />,
  Workshop: <Award size={16} />,
  Podcast: <Award size={16} />,
}

export default function PublicationsPage() {
  const featured = publications.filter((p) => p.featured)
  const others = publications.filter((p) => !p.featured)

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="paper-texture fixed inset-0 pointer-events-none" />
      <RetroNav />

      <main className="flex-1 pt-28 pb-16 grass-bg">
        {/* Header */}
        <section className="px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-4 mb-12">
              <p className="text-accent text-base tracking-widest">~ Publications ~</p>
              <h1 className="font-[family-name:var(--font-pixel)] text-lg md:text-xl lg:text-2xl text-accent pixel-text-sky">
                Research & Writing
              </h1>
              <p className="text-foreground text-lg md:text-xl max-w-2xl">
                Academic papers, conference talks, and guest articles on web development, game design, and cozy
                aesthetics.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="px-4 py-2 border-4 border-accent bg-accent/10 shadow-[3px_3px_0_oklch(0.55_0.08_220)]">
                <span className="font-[family-name:var(--font-pixel)] text-[10px] text-accent">
                  {publications.length} Publications
                </span>
              </div>
              <div className="px-4 py-2 border-4 border-primary bg-primary/10 shadow-[3px_3px_0_oklch(0.45_0.12_145)]">
                <span className="font-[family-name:var(--font-pixel)] text-[10px] text-primary">5 Conferences</span>
              </div>
              <div className="px-4 py-2 border-4 border-secondary bg-secondary/10 shadow-[3px_3px_0_oklch(0.4_0.08_55)]">
                <span className="font-[family-name:var(--font-pixel)] text-[10px] text-secondary">2 Journals</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Publications */}
        <section className="px-4 mb-16">
          <div className="max-w-6xl mx-auto">
            <SectionHeader title="Featured Work" subtitle="Recent highlights" variant="sky" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featured.map((pub) => (
                <div
                  key={pub.title}
                  className="p-6 bg-card border-4 border-accent shadow-[4px_4px_0_oklch(0.55_0.08_220)] hover:shadow-[6px_6px_0_oklch(0.55_0.08_220)] transition-all"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-2 text-accent">
                      {typeIcons[pub.type]}
                      <span className="font-[family-name:var(--font-pixel)] text-[8px] tracking-wider">
                        {pub.type.toUpperCase()}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">{pub.year}</span>
                  </div>
                  <h3 className="font-[family-name:var(--font-pixel)] text-[10px] md:text-xs text-accent pixel-text-sky mb-2">
                    {pub.title}
                  </h3>
                  <p className="text-primary text-sm mb-4">{pub.venue}</p>
                  <p className="text-foreground text-base mb-4">{pub.description}</p>
                  <a
                    href={pub.link}
                    className="inline-flex items-center gap-2 text-accent font-[family-name:var(--font-pixel)] text-[10px] hover:underline"
                  >
                    View Publication <ExternalLink size={12} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Publications */}
        <section className="px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeader title="All Publications" subtitle="Complete bibliography" variant="brown" />
            <div className="space-y-4">
              {others.map((pub) => (
                <div
                  key={pub.title}
                  className="p-4 bg-card border-4 border-border hover:border-secondary shadow-[3px_3px_0_var(--border)] hover:shadow-[4px_4px_0_oklch(0.4_0.08_55)] transition-all flex flex-col md:flex-row md:items-center gap-4"
                >
                  <div className="flex items-center gap-3 text-secondary md:w-32">
                    {typeIcons[pub.type]}
                    <span className="font-[family-name:var(--font-pixel)] text-[8px] tracking-wider">{pub.year}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-[family-name:var(--font-pixel)] text-[10px] md:text-xs text-foreground mb-1">
                      {pub.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{pub.venue}</p>
                  </div>
                  <a
                    href={pub.link}
                    className="text-secondary text-sm hover:pixel-text-brown transition-all flex items-center gap-1"
                  >
                    <ExternalLink size={12} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-4 py-16">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h3 className="font-[family-name:var(--font-pixel)] text-xs text-primary pixel-text-green">
              Want to collaborate?
            </h3>
            <p className="text-foreground text-lg">
              I'm always interested in research collaborations, speaking opportunities, and guest writing invitations.
            </p>
            <Link
              href="mailto:research@cozypixels.dev"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground font-[family-name:var(--font-pixel)] text-[10px] tracking-wider shadow-[4px_4px_0_oklch(0.45_0.12_145)] hover:shadow-[2px_2px_0_oklch(0.45_0.12_145)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              Get in Touch ~
            </Link>
          </div>
        </section>
      </main>

      <RetroFooter />
    </div>
  )
}
