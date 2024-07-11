import Container from "@/components/container"
import ModeToggle from "@/components/modeToggle"
import { TypographyH1 } from "@/components/typography"
import { Separator } from "../ui/separator"

export default function Header() {
  return (
    <header className="mb-8 lg:mb-16">
      <Container className="my-8 flex justify-between items-center">
        <TypographyH1 className="font-header font-normal">
          Moving Pictures
        </TypographyH1>
        <ModeToggle />
      </Container>
      <Separator />
    </header>
  )
}
