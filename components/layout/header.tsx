import ModeToggle from "@/components/modeToggle"
import { TypographyH1 } from "@/components/typography"
import { Separator } from "../ui/separator"
import Link from "next/link"

export default function Header() {
  return (
    <header className="mb-8 lg:mb-16">
      <div className="container my-8 flex justify-between items-center">
        <Link href="/">
          <TypographyH1 className="font-header font-normal">
            Moving Pictures
          </TypographyH1>
        </Link>
        <ModeToggle />
      </div>
      <Separator />
    </header>
  )
}
