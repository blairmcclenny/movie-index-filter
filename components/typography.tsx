import React from "react"
import { cn } from "@/lib/utils"

const TypographyH1 = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  )
}

const TypographyH2 = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
    >
      {children}
    </h2>
  )
}

const TypographyH3 = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h3>
  )
}

const TypographyP = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <p className={cn("leading-7 not-first:mt-6", className)}>
      {children}
    </p>
  )
}

const TypographyLead = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <p className={cn("text-xl text-muted-foreground", className)}>{children}</p>
  )
}

const TypographyLarge = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <div className={cn("text-lg font-semibold", className)}>{children}</div>
  )
}

const TypographySmall = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <small className={cn("text-sm font-medium leading-none", className)}>
      {children}
    </small>
  )
}

const TypographyMuted = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>
  )
}

export {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
  TypographyLead,
  TypographyLarge,
  TypographySmall,
  TypographyMuted,
}
