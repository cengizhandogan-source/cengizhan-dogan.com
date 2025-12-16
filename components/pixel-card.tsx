import { cn } from "@/lib/utils"
import Link from "next/link"

interface PixelCardProps {
  title: string
  description: string
  href: string
  tags?: string[]
  date?: string
  variant?: "green" | "brown" | "sky"
  className?: string
}

export function PixelCard({ title, description, href, tags, date, variant = "green", className }: PixelCardProps) {
  const variantStyles = {
    green: "border-primary hover:shadow-[6px_6px_0_oklch(0.45_0.12_145)]",
    brown: "border-secondary hover:shadow-[6px_6px_0_oklch(0.4_0.08_55)]",
    sky: "border-accent hover:shadow-[6px_6px_0_oklch(0.55_0.08_220)]",
  }

  const textStyles = {
    green: "text-primary group-hover:pixel-text-green",
    brown: "text-secondary group-hover:pixel-text-brown",
    sky: "text-accent group-hover:pixel-text-sky",
  }

  return (
    <Link
      href={href}
      className={cn(
        "block p-5 bg-card border-4 transition-all duration-300 group shadow-[4px_4px_0_var(--border)]",
        variantStyles[variant],
        className,
      )}
    >
      {date && <p className="text-sm text-muted-foreground tracking-wider mb-2">~ {date}</p>}
      <h3
        className={cn(
          "font-[family-name:var(--font-pixel)] text-[10px] md:text-xs tracking-wider mb-3 transition-all duration-300",
          textStyles[variant],
        )}
      >
        {title}
      </h3>
      <p className="text-foreground text-lg md:text-xl leading-relaxed mb-4">{description}</p>
      {tags && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="text-sm px-2 py-1 bg-muted text-muted-foreground border-2 border-border">
              #{tag}
            </span>
          ))}
        </div>
      )}
      <div className="mt-4 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
        Click to explore ~<span className="gentle-blink">_</span>
      </div>
    </Link>
  )
}
