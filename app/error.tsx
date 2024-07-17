"use client"

import { useEffect } from "react"
import Container from "@/components/container"
import { Button } from "@/components/ui/button"
import { TypographyH2 } from "@/components/typography"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <Container className="text-center space-y-6">
      <TypographyH2 className="border-none pb-0">Something went wrong!</TypographyH2>
      <Button onClick={() => reset()}>Try Again</Button>
    </Container>
  )
}
