import type React from "react"
import { forwardRef } from "react"
import "../../styles/ui/Badge.css"

type BadgeVariant = "default" | "secondary" | "outline" | "destructive"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant
  children: React.ReactNode
  className?: string
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ variant = "default", children, className = "", ...props }, ref) => {
    return (
      <div ref={ref} className={`badge badge-${variant} ${className}`} {...props}>
        {children}
      </div>
    )
  },
)

Badge.displayName = "Badge"

export default Badge

