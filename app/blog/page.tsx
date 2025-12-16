import { RetroNav } from "@/components/retro-nav"
import { RetroFooter } from "@/components/retro-footer"
import { PixelCard } from "@/components/pixel-card"
import { SectionHeader } from "@/components/section-header"

const blogPosts = [
  {
    title: "Building Cozy UIs with Modern Tech",
    description:
      "How to create warm, inviting aesthetics using soft colors, pixel fonts, and gentle animations. A deep dive into comfort-driven design.",
    href: "/blog/cozy-ui-modern-tech",
    date: "2024.12.10",
    tags: ["CSS", "Design", "Cozy"],
  },
  {
    title: "The Art of Pixel Perfect Design",
    description: "Lessons learned from classic video game UI design and how to apply them to modern web development.",
    href: "/blog/pixel-perfect-design",
    date: "2024.12.05",
    tags: ["Pixels", "Games", "UI/UX"],
  },
  {
    title: "WebGL Performance Optimization",
    description: "Tips and tricks for achieving smooth 60fps in browser-based games and applications.",
    href: "/blog/webgl-performance",
    date: "2024.11.28",
    tags: ["WebGL", "Performance", "3D"],
  },
  {
    title: "Creating Calming Color Palettes",
    description: "A guide to crafting those perfect soft, warm color schemes that define cozy pixel aesthetics.",
    href: "/blog/calming-colors",
    date: "2024.11.20",
    tags: ["Colors", "Design", "Relaxing"],
  },
  {
    title: "Gentle Animations in CSS",
    description: "Recreating the peaceful, smooth animations found in games like Stardew Valley using CSS.",
    href: "/blog/gentle-animations-css",
    date: "2024.11.15",
    tags: ["CSS", "Animation", "Cozy"],
  },
  {
    title: "Building a Cozy Game Engine",
    description: "From scratch to playable: creating a lightweight game engine inspired by relaxing indie games.",
    href: "/blog/cozy-game-engine",
    date: "2024.11.08",
    tags: ["Games", "Engine", "JavaScript"],
  },
  {
    title: "Typography for Pixel Art",
    description: "How to choose and implement fonts that evoke warmth and nostalgia while remaining readable.",
    href: "/blog/pixel-typography",
    date: "2024.11.01",
    tags: ["Typography", "Fonts", "Design"],
  },
  {
    title: "Ambient Audio for Web",
    description: "Using the Web Audio API to create peaceful soundscapes and relaxing background music.",
    href: "/blog/web-audio-ambient",
    date: "2024.10.25",
    tags: ["Audio", "WebAPI", "Music"],
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
            <div className="space-y-4 mb-12">
              <p className="text-secondary text-base tracking-widest">~ Blog ~</p>
              <h1 className="font-[family-name:var(--font-pixel)] text-lg md:text-xl lg:text-2xl text-secondary pixel-text-brown">
                My Journal
              </h1>
              <p className="text-foreground text-lg md:text-xl max-w-2xl">
                Thoughts, tutorials, and insights from my cozy corner. Writing about code, design, and finding peace in
                pixels.
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
            <SectionHeader title="All Posts" subtitle="Latest from the journal" variant="brown" />
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
                Get new posts delivered directly to your inbox. Just cozy updates, no spam.
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
