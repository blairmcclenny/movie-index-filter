import { Suspense } from "react"
import { TypographyH2 } from "@/components/typography"
import { Separator } from "@/components/ui/separator"
import { Genres, getMovieGenres } from "@/lib/api"
import FilterYear from "./filterYear"
import FilterGenre from "./filterGenre"

export default async function Filters() {
  const genres: Genres = await getMovieGenres()

  return (
    <>
      <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-4">
        <TypographyH2 className="text-2xl border-none pb-0">
          Filters
        </TypographyH2>
        <div className="flex flex-col md:flex-row gap-4 w-full lg:justify-end">
          <Suspense>
            <FilterYear />
          </Suspense>
          <Suspense>
            <FilterGenre genres={genres?.genres} />
          </Suspense>
        </div>
      </div>
      <Separator className="mt-4" />
    </>
  )
}
