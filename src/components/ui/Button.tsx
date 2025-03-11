import type React from "react"
import { forwardRef } from "react"
import "../../styles/ui/Button.css"

type ButtonVariant = "default" | "outline" | "secondary" | "ghost" | "link"
type ButtonSize = "default" | "sm" | "lg" | "icon"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  as?: React.ElementType
  href?: string
  children: React.ReactNode
  className?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "default", size = "default", as: Component = "button", href, children, className = "", ...props },
    ref,
  ) => {
    const buttonClasses = `button button-${variant} button-${size} ${className}`

    if (Component === "a") {
      return (
        <a href={href} className={buttonClasses}>
          {children}
        </a>
      )
    }

    return (
      <button ref={ref} className={buttonClasses} {...props}>
        {children}
      </button>
    )
  },
)

Button.displayName = "Button"

export default Button

