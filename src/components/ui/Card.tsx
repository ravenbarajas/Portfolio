import type React from "react"
import { forwardRef } from "react"
import "../../styles/ui/Card.css"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

const Card = forwardRef<HTMLDivElement, CardProps>(({ children, className = "", ...props }, ref) => {
  return (
    <div ref={ref} className={`card ${className}`} {...props}>
      {children}
    </div>
  )
})

Card.displayName = "Card"

export default Card

