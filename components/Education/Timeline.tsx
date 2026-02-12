"use client"

import {
  School,
  Clipboard,
  GraduationCap,
  Book,
  Laptop,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface TimelineEvent {
  id: number
  year: string
  title: string
  description: string
  icon: string
  details: string
  link?: string
}

const iconMap: Record<string, LucideIcon> = {
  School,
  Clipboard,
  GraduationCap,
  Book,
  Laptop,
}

interface TimelineCardProps {
  event: TimelineEvent
  index: number
  total: number
}

const TimelineCard = ({ event, index, total }: TimelineCardProps) => {

  const Icon: LucideIcon = iconMap[event.icon] ?? School

  const topOffset = 100 + index * 30
  const isLast = index === total - 1

  return (
    <div
      className="sticky"
      style={{
        top: `${topOffset}px`,
        zIndex: index + 1,
        marginBottom: isLast ? "0" : "16px",
      }}
    >
      <a
        href={event.link ?? "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        <div className="relative overflow-hidden rounded-2xl border border-white/10  p-6 shadow-2xl transition-all duration-300 hover:border-[hsl(var(--primary))] hover:shadow-[0_0_40px_rgba(0,255,136,0.15)]">
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-accent/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6 b">
            <div className="flex-1">
              <div className="mb-2 flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))] border border-[hsl(var(--primary)/0.2)] px-3 py-1 text-sm font-medium text-accent">
                  <Icon className="h-3.5 w-3.5" />
                  {event.year}
                </span>
              </div>

              <h3 className="mb-1 text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
                {event.title}
              </h3>

              <p className="mb-2 text-base text-muted-foreground">
                {event.description}
              </p>

              <p className="text-sm text-muted-foreground/70">
                {event.details}
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

interface TimelineProps {
  events: TimelineEvent[]
}

const Timeline = ({ events }: TimelineProps) => {
  return (
    <div className="relative">
      <div className="absolute left-10 top-0 hidden h-full w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent sm:block" />

      {events.map((event, index) => (
        <TimelineCard
          key={event.id}
          event={event}
          index={index}
          total={events.length}
        />
      ))}
    </div>
  )
}

export default Timeline
