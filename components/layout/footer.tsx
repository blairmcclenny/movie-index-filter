import Container from "@/components/container"
import { TypographyMuted } from "@/components/typography"

export default function Footer() {
  return (
    <footer>
      <Container className="my-8 md:my-12 lg:my-16">
        <TypographyMuted>All data provided by The Movie DB</TypographyMuted>
      </Container>
    </footer>
  )
}
