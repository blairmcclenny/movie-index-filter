import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Genre, Genres, getMovieGenres } from "@/lib/api"

export default async function Filters() {
  const genres: Genres = await getMovieGenres()

  const currentYear = new Date().getFullYear()
  const years: number[] = Array.from({ length: 101 }, (_, i) => currentYear - i)

  return (
    <>
      <Separator />
      <div className="flex items-center justify-between gap-8 py-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0">
          Filters
        </h2>
        <div className="flex gap-4">
          <Select>
            <SelectTrigger className="w-64">
              <SelectValue placeholder="Select a year" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Years</SelectLabel>
                {years.map((year) => (
                  <SelectItem
                    key={`release-year-${year}`}
                    value={year.toString()}
                  >
                    {year}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-64">
              <SelectValue placeholder="Select a genre" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Genres</SelectLabel>
                {genres.genres.map((genre: Genre) => (
                  <SelectItem key={genre.id} value={genre.id.toString()}>
                    {genre.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Separator />
    </>
  )
}
