import { RetroNav } from "@/components/retro-nav"
import { RetroFooter } from "@/components/retro-footer"
import { SectionHeader } from "@/components/section-header"
import { ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"

const publications = [
  {
    title: "Stability Certificates for Dynamical Systems on the Torus",
    venue: "Turkish Automatic Control Conference",
    type: "Conference Paper",
    year: "2025",
    description:
      "Study on generalized Kuramoto models using semidefinite programming certificates for local phase synchronization. Demonstrates practical application to four-oscillator systems.",
    link: "https://zenodo.org/records/17737744",
  },
]

export default function PublicationsPage() {

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
              <p className="text-accent text-base tracking-widest">~ Publications ~</p>
              <h1 className="font-[family-name:var(--font-pixel)] text-lg md:text-xl lg:text-2xl text-accent pixel-text-sky">
                Research & Writing
              </h1>
              <p className="text-foreground text-lg md:text-xl max-w-2xl">
                Academic papers and conference presentations on control systems, aerospace engineering, and applied mathematics.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="px-4 py-2 border-4 border-accent bg-accent/10 shadow-[3px_3px_0_oklch(0.55_0.08_220)]">
                <span className="font-[family-name:var(--font-pixel)] text-[10px] text-accent">
                  {publications.length} Publication{publications.length !== 1 ? 's' : ''}
                </span>
              </div>
              <div className="px-4 py-2 border-4 border-primary bg-primary/10 shadow-[3px_3px_0_oklch(0.45_0.12_145)]">
                <span className="font-[family-name:var(--font-pixel)] text-[10px] text-primary">1 Conference</span>
              </div>
            </div>
          </div>
        </section>

        {/* All Publications */}
        <section className="px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeader title="All Publications" subtitle="Complete bibliography" variant="brown" />
            <div className="space-y-4">
              {publications.map((pub) => (
                <div
                  key={pub.title}
                  className="p-6 bg-card border-4 border-accent shadow-[4px_4px_0_oklch(0.55_0.08_220)] hover:shadow-[6px_6px_0_oklch(0.55_0.08_220)] transition-all"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-2 text-accent">
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

        {/* Call to Action */}
        <section className="px-4 py-16">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h3 className="font-[family-name:var(--font-pixel)] text-xs text-primary pixel-text-green">
              Interested in collaborating?
            </h3>
            <p className="text-foreground text-lg">
              Open to research collaborations, speaking opportunities, and guest writing invitations.
            </p>
            <Link
              href="mailto:cengizhan@eperteknoloji.com"
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
