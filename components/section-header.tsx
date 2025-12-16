import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  variant?: "green" | "brown" | "sky"
  className?: string
}

export function SectionHeader({ title, subtitle, variant = "green", className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-8 md:mb-12", className)}>
      <div className="flex items-center gap-4 mb-2">
        <div
          className={cn(
            "w-4 h-4",
            variant === "green" && "bg-primary",
            variant === "brown" && "bg-secondary",
            variant === "sky" && "bg-accent",
          )}
        />
        <h2
          className={cn(
            "font-[family-name:var(--font-pixel)] text-xs md:text-sm tracking-wider",
            variant === "green" && "text-primary pixel-text-green",
            variant === "brown" && "text-secondary pixel-text-brown",
            variant === "sky" && "text-accent pixel-text-sky",
          )}
        >
          {title}
        </h2>
        <div
          className={cn(
            "flex-1 h-1",
            variant === "green" && "bg-primary/30",
            variant === "brown" && "bg-secondary/30",
            variant === "sky" && "bg-accent/30",
          )}
        />
      </div>
      {subtitle && <p className="text-muted-foreground text-lg md:text-xl ml-8">~ {subtitle}</p>}
    </div>
  )
}
