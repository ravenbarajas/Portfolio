import type React from "react"
import { forwardRef } from "react"
import "../../styles/ui/Avatar.css"

type AvatarSize = "sm" | "md" | "lg" | "xl"

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  fallback?: string
  size?: AvatarSize
  className?: string
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, alt = "", fallback, size = "md", className = "", ...props }, ref) => {
    const initials = fallback || (alt ? alt.charAt(0).toUpperCase() : "")

    return (
      <div ref={ref} className={`avatar avatar-${size} ${className}`} {...props}>
        {src ? (
          <img
            src={src || "/placeholder.svg"}
            alt={alt}
            className="avatar-image"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.style.display = "none"
            }}
          />
        ) : (
          <div className="avatar-fallback">{initials}</div>
        )}
      </div>
    )
  },
)

Avatar.displayName = "Avatar"

export default Avatar

