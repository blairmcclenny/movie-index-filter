import React from "react"
import { cn } from "@/lib/utils"

export default function Container({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn("mx-auto px-4 sm:px-8 xl:px-16 2xl:px-32", className)}>
      {children}
    </div>
  )
}
