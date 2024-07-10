import Container from "@/components/container"
import ModeToggle from "@/components/modeToggle"
import { TypographyH1 } from "@/components/typography"

export default function Header() {
  return (
    <header>
      <Container className="my-8 md:my-12 lg:my-16 flex justify-between">
        <TypographyH1 className="font-header font-normal">
          Moving Pictures
        </TypographyH1>
        <ModeToggle />
      </Container>
    </header>
  )
}
