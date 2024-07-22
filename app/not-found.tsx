import Container from "@/components/container"
import { TypographyH2, TypographyP } from "@/components/typography"
import Link from "next/link"

export default function NotFound() {
  return (
    <Container className="flex gap-4 justify-center items-center h-full">
      <TypographyH2 className="mb-0 border-none leading-none pb-0">
        404
      </TypographyH2>
      <span className="h-8 border-l" />
      <p className="leading-none">Not Found</p>
    </Container>
  )
}
