"use client"

import { RetroNav } from "@/components/retro-nav"
import { RetroFooter } from "@/components/retro-footer"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { useParams } from "next/navigation"

type ContentBlock = string | { type: 'video'; url: string; caption?: string }

// Helper function to get video embed URL
const getVideoEmbedUrl = (url: string): { embedUrl: string; platform: string } => {
  // YouTube Shorts
  const youtubeShortsRegex = /youtube\.com\/shorts\/([^"&?\/\s]+)/
  const shortsMatch = url.match(youtubeShortsRegex)
  if (shortsMatch) {
    return { embedUrl: `https://www.youtube.com/embed/${shortsMatch[1]}`, platform: 'youtube' }
  }

  // YouTube regular
  const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
  const youtubeMatch = url.match(youtubeRegex)
  if (youtubeMatch) {
    return { embedUrl: `https://www.youtube.com/embed/${youtubeMatch[1]}`, platform: 'youtube' }
  }

  // Vimeo
  const vimeoRegex = /vimeo\.com\/(?:video\/)?(\d+)/
  const vimeoMatch = url.match(vimeoRegex)
  if (vimeoMatch) {
    return { embedUrl: `https://player.vimeo.com/video/${vimeoMatch[1]}`, platform: 'vimeo' }
  }

  // Direct video file
  return { embedUrl: url, platform: 'direct' }
}

// Video Embed Component
const VideoEmbed = ({ url, caption }: { url: string; caption?: string }) => {
  const { embedUrl, platform } = getVideoEmbedUrl(url)

  return (
    <div className="my-8 border-4 border-primary p-4 bg-muted">
      <div className="aspect-video relative bg-card overflow-hidden">
        {platform === 'direct' ? (
          <video controls className="w-full h-full object-contain">
            <source src={embedUrl} />
            Your browser does not support the video tag.
          </video>
        ) : (
          <iframe
            src={embedUrl}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
      {caption && (
        <p className="text-muted-foreground text-sm mt-2 font-[family-name:var(--font-terminal)]">
          {caption}
        </p>
      )}
    </div>
  )
}

const blogData: Record<
  string,
  {
    title: string
    description: string
    content: (string | ContentBlock)[]
    date: string
    readTime: string
    tags: string[]
    image?: string
    publicationLink?: string
  }
> = {
  "learning-to-fly-cessna-152": {
    title: "Learning to Fly in a Cessna-152",
    description: "I had the pleasure of receiving flying lessons in Cascais, Portugal. Flying over the atlantic in a 2 seater is truly an amazing experience.",
    content: [
      "I had the pleasure of receiving flying lessons in Cascais, Portugal. Flying over the Atlantic in a 2-seater is truly an amazing experience.",
      "Because the aircraft is so light, you feel even the lightest gust of wind. The Cessna-152 is an incredible machine for learning - responsive, forgiving, and perfect for understanding the fundamentals of flight.",
      { type: 'video', url: 'https://youtube.com/shorts/0sO9WMfH-I0', caption: 'Flying over the coastline, volume warning' },
      "Every moment in the air was a lesson in physics, weather, and the sheer joy of flight. From pre-flight checks to landing, each step required focus and respect for the machine.",
      { type: 'video', url: 'https://youtube.com/shorts/vt_ZppEFwNk', caption: 'Short approach' },
      "Huge thanks to my instructor, Pedro, for the flight lessons. His patience, expertise, and passion for aviation made this experience unforgettable.",
    ],
    date: "2024.08.30",
    readTime: "4 min",
    tags: ["Aviation", "Portugal", "Flying"],
    image: "/images/blogphoto.png",
  },
  "turkish-control-conference-2025": {
    title: "Presenting at Turkish Automatic Control Conference 2025",
    description: "Today I had the opportunity to present our conference paper on stability certificates for dynamical systems on the torus.",
    content: [
      "Today I had the opportunity to present our conference paper \"Stability Certificates for Dynamical Systems on the Torus\" at the annual Turkish Automatic-Control Conference.",
      "In this work, together with Swapnil Tripathi, Alkım Gökçen, Mahmut Kudeyt, Savaş Şahin, and Özkan Karabacak, we developed semidefinite programming–based certificates for synchronization in generalized Kuramoto models. By using trigonometric polynomial expansions and Gram matrix representations, we introduced a framework that eliminates the need for stereographic projection and enables solvable, scalable stability analysis directly on the torus.",
      // Example of how to add a video (commented out):
      // { type: 'video', url: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID', caption: 'Conference presentation recording' },
      "Excited to see this methodology contribute to the broader understanding of the Dual Lyapunov method.",
    ],
    date: "2025.09.29",
    readTime: "3 min",
    tags: ["Research", "Control Theory", "Conference"],
    image: "/images/pixelpaper.png",
    publicationLink: "https://zenodo.org/records/17737744",
  },
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

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  const [copied, setCopied] = useState(false)

  const post = blogData[slug] || {
    title: slug.replace(/-/g, " ").toUpperCase(),
    description: "Blog post content loading...",
    content: ["This post is coming soon. Stay tuned for more retro-inspired content!"],
    date: "2024.12.01",
    readTime: "5 min",
    tags: ["Coming Soon"],
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy link:", err)
    }
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
                  {post.date}
                </span>
                <span className="flex items-center gap-2 text-[10px]">
                  {post.readTime} READ
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1 text-[10px] px-3 py-1 border-2 border-primary text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-foreground font-[family-name:var(--font-terminal)] text-xl border-l-4 border-secondary pl-4">
                {post.description}
              </p>
            </header>

            {/* Featured Image */}
            {post.image && (
              <div className="mb-8 border-4 border-primary p-4 bg-muted">
                <div className="aspect-video relative bg-card overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}

            {/* Content */}
            <div className="space-y-6 border-4 border-muted p-6 md:p-8 bg-card">
              {post.content.map((block, index) => {
                // Check if block is a video object
                if (typeof block === 'object' && block.type === 'video') {
                  return <VideoEmbed key={index} url={block.url} caption={block.caption} />
                }
                // Otherwise it's a text paragraph
                return (
                  <p
                    key={index}
                    className="text-foreground font-[family-name:var(--font-terminal)] text-lg md:text-xl leading-relaxed"
                  >
                    {block}
                  </p>
                )
              })}
            </div>

            {/* Publication Link */}
            {post.publicationLink && (
              <div className="mt-8">
                <a
                  href={post.publicationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-[family-name:var(--font-pixel)] text-[10px] tracking-wider shadow-[4px_4px_0_oklch(0.55_0.08_220)] hover:shadow-[2px_2px_0_oklch(0.55_0.08_220)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                >
                  VIEW PUBLICATION <ExternalLink size={12} />
                </a>
              </div>
            )}

            {/* Share */}
            <div className="mt-12 pt-8 border-t-4 border-muted text-center">
              <p className="text-muted-foreground text-[10px] tracking-wider mb-4">{"// SHARE_THIS_POST"}</p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={handleCopyLink}
                  className="px-4 py-2 border-2 border-accent text-accent text-[10px] hover:bg-accent hover:text-accent-foreground transition-all"
                >
                  {copied ? "[COPIED!]" : "[COPY_LINK]"}
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
