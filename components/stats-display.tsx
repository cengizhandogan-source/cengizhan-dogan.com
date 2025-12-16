interface Stat {
  label: string
  value: string
}

interface StatsDisplayProps {
  stats: Stat[]
}

export function StatsDisplay({ stats }: StatsDisplayProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-card border-4 border-primary shadow-[4px_4px_0_oklch(0.45_0.12_145)]">
      {stats.map((stat, index) => (
        <div key={index} className="text-center p-4">
          <p className="text-3xl md:text-4xl text-primary pixel-text-green">{stat.value}</p>
          <p className="font-[family-name:var(--font-pixel)] text-[8px] md:text-[10px] text-muted-foreground tracking-wider mt-2">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  )
}
