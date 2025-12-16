import { RetroNav } from "@/components/retro-nav"
import { RetroFooter } from "@/components/retro-footer"
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react"
import Link from "next/link"

const blogData: Record<
  string,
  {
    title: string
    description: string
    content: string[]
    date: string
    readTime: string
    tags: string[]
  }
> = {
  "retro-ui-modern-tech": {
    title: "Building Retro UIs with Modern Tech",
    description: "How to create authentic 90s aesthetics using CSS Grid, custom fonts, and creative animations.",
    content: [
      "The appeal of retro aesthetics in modern web design isn't just about nostalgia—it's about creating memorable, distinctive experiences that stand out in an era of cookie-cutter interfaces.",
      "When building retro-inspired UIs, the key is to understand what made those classic designs work. It wasn't just the pixel art and neon colors; it was the constraints that led to creative solutions.",
      "Modern CSS gives us powerful tools like Grid and Flexbox that would have been unimaginable in the 90s, but we can use these tools to recreate the rigid, structured layouts that defined that era.",
      "Typography plays a crucial role. Fonts like 'Press Start 2P' and 'VT323' instantly transport users back to the age of arcade cabinets and early personal computers.",
      "Don't forget about sound design. The Web Audio API allows us to add those satisfying beeps and bloops that made every interaction feel meaningful.",
    ],
    date: "2024.12.10",
    readTime: "8 min",
    tags: ["CSS", "Design", "Nostalgia"],
  },
  "pixel-perfect-design": {
    title: "The Art of Pixel Perfect Design",
    description: "Lessons learned from classic video game UI design and how to apply them to modern web development.",
    content: [
      "Video game designers of the 8-bit and 16-bit eras were masters of communication through constraints. Every pixel had to count.",
      "This pixel-perfect approach forced designers to be intentional about every visual element. There was no room for vague gradients or subtle shadows.",
      "In web design, we can apply this same discipline. By thinking in terms of discrete units rather than fluid values, we create interfaces that feel more deliberate and cohesive.",
      "Consider how classic games used color to convey meaning. Limited palettes meant that every color choice was significant and memorable.",
      "The grid-based layouts of retro games translate beautifully to modern CSS Grid, allowing us to create structured, predictable interfaces that users can navigate intuitively.",
    ],
    date: "2024.12.05",
    readTime: "6 min",
    tags: ["Pixels", "Games", "UI/UX"],
  },
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogData[slug] || {
    title: slug.replace(/-/g, " ").toUpperCase(),
    description: "Blog post content loading...",
    content: ["This post is coming soon. Stay tuned for more retro-inspired content!"],
    date: "2024.12.01",
    readTime: "5 min",
    tags: ["Coming Soon"],
  }

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="scanlines fixed inset-0 pointer-events-none" />
      <RetroNav />

      <main className="flex-1 pt-28 pb-16 grid-bg">
        <article className="px-4">
          <div className="max-w-3xl mx-auto">
            {/* Back Button */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-secondary text-[10px] tracking-wider hover:neon-text-cyan transition-all mb-8"
            >
              <ArrowLeft size={16} /> BACK_TO_BLOG
            </Link>

            {/* Header */}
            <header className="mb-12 space-y-6">
              <h1 className="text-lg md:text-2xl text-secondary neon-text-cyan leading-relaxed">{post.title}</h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                <span className="flex items-center gap-2 text-[10px]">
                  <Calendar size={14} /> {post.date}
                </span>
                <span className="flex items-center gap-2 text-[10px]">
                  <Clock size={14} /> {post.readTime} READ
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1 text-[10px] px-3 py-1 border-2 border-primary text-primary"
                  >
                    <Tag size={12} /> {tag}
                  </span>
                ))}
              </div>

              <p className="text-foreground font-[family-name:var(--font-terminal)] text-xl border-l-4 border-secondary pl-4">
                {post.description}
              </p>
            </header>

            {/* Content */}
            <div className="space-y-6 border-4 border-muted p-6 md:p-8 bg-card">
              {post.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-foreground font-[family-name:var(--font-terminal)] text-lg md:text-xl leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Code Block Example */}
            <div className="mt-8 border-4 border-accent p-4 bg-muted">
              <div className="flex items-center gap-2 mb-4 text-[10px] text-accent">{"// CODE_EXAMPLE"}</div>
              <pre className="text-foreground font-[family-name:var(--font-terminal)] text-sm md:text-base overflow-x-auto">
                {`.neon-text {
  text-shadow: 
    0 0 5px var(--neon-pink),
    0 0 10px var(--neon-pink),
    0 0 20px var(--neon-pink);
}`}
              </pre>
            </div>

            {/* Share */}
            <div className="mt-12 pt-8 border-t-4 border-muted text-center">
              <p className="text-muted-foreground text-[10px] tracking-wider mb-4">{"// SHARE_THIS_POST"}</p>
              <div className="flex justify-center gap-4">
                <button className="px-4 py-2 border-2 border-primary text-primary text-[10px] hover:bg-primary hover:text-primary-foreground transition-all">
                  [TWITTER]
                </button>
                <button className="px-4 py-2 border-2 border-secondary text-secondary text-[10px] hover:bg-secondary hover:text-secondary-foreground transition-all">
                  [LINKEDIN]
                </button>
                <button className="px-4 py-2 border-2 border-accent text-accent text-[10px] hover:bg-accent hover:text-accent-foreground transition-all">
                  [COPY_LINK]
                </button>
              </div>
            </div>
          </div>
        </article>
      </main>

      <RetroFooter />
    </div>
  )
}
