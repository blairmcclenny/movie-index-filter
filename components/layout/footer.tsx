import { TypographyMuted } from "@/components/typography"
import { Separator } from "@/components/ui/separator"
import TMBDLogo from "@/public/tmdb-logo.svg"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="mt-16 md:mt-12 lg:mt-16">
      <Separator />
      <div className="container my-8 flex flex-col items-center gap-4">
        <div className="w-16">
          <a href="https://www.themoviedb.org/" target="_blank">
            <Image src={TMBDLogo} alt="TMDB Logo" />
          </a>
        </div>
        <TypographyMuted className="text-center text-pretty max-w-lg">
          This website uses TMDB and the TMDB APIs but is not endorsed,
          certified, or otherwise approved by TMDB.
        </TypographyMuted>
      </div>
    </footer>
  )
}
