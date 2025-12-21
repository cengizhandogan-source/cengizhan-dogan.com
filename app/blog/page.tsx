import { RetroNav } from "@/components/retro-nav"
import { RetroFooter } from "@/components/retro-footer"
import { PixelCard } from "@/components/pixel-card"
import { SectionHeader } from "@/components/section-header"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const blogPosts: Array<{
  title: string
  description: string
  href: string
  date: string
  tags: string[]
}> = [
  {
    title: "Presenting at Turkish Automatic Control Conference 2025",
    description: "Today I had the opportunity to present our conference paper on stability certificates for dynamical systems on the torus.",
    href: "/blog/turkish-control-conference-2025",
    date: "Sep 29, 2025",
    tags: ["Research", "Control Theory", "Conference"],
  },
  {
    title: "Learning to Fly in a Cessna-152",
    description: "I had the pleasure of receiving flying lessons in Cascais, Portugal. Flying over the atlantic in a 2 seater is truly an amazing experience.",
    href: "/blog/learning-to-fly-cessna-152",
    date: "Aug 30, 2024",
    tags: ["Aviation", "Portugal", "Flying"],
  },
]

export default function BlogPage() {
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
              <p className="text-secondary text-base tracking-widest">~ Blog ~</p>
              <h1 className="font-[family-name:var(--font-pixel)] text-lg md:text-xl lg:text-2xl text-secondary pixel-text-brown">
                Blog
              </h1>
              <p className="text-foreground text-lg md:text-xl max-w-2xl">
                Articles, tutorials, and insights on web development, design patterns, and modern technology.
              </p>
            </div>

            {/* Post Count */}
            <div className="inline-block px-4 py-2 border-4 border-secondary bg-secondary/10 mb-8 shadow-[3px_3px_0_oklch(0.4_0.08_55)]">
              <span className="font-[family-name:var(--font-pixel)] text-[10px] text-secondary">
                ~ {blogPosts.length} posts found
              </span>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeader title="All Posts" subtitle="Recent articles" variant="brown" />
            {blogPosts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-xl">No posts yet ~</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.map((post, index) => (
                  <PixelCard
                    key={post.title}
                    title={post.title}
                    description={post.description}
                    href={post.href}
                    date={post.date}
                    tags={post.tags}
                    variant={index % 2 === 0 ? "brown" : "green"}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter */}
        <section className="px-4 py-16">
          <div className="max-2xl mx-auto">
            <div className="max-w-2xl mx-auto border-4 border-primary p-8 bg-card text-center space-y-6 shadow-[4px_4px_0_oklch(0.45_0.12_145)]">
              <h3 className="font-[family-name:var(--font-pixel)] text-xs text-primary pixel-text-green">
                Subscribe to Newsletter
              </h3>
              <p className="text-foreground text-lg">
                Get new posts delivered directly to your inbox. Quality content, no spam.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 bg-input border-4 border-border text-foreground text-lg placeholder:text-muted-foreground focus:border-primary outline-none"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-primary-foreground font-[family-name:var(--font-pixel)] text-[10px] tracking-wider shadow-[3px_3px_0_oklch(0.45_0.12_145)] hover:shadow-[1px_1px_0_oklch(0.45_0.12_145)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                >
                  Subscribe ~
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <RetroFooter />
    </div>
  )
}
