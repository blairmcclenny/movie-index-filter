"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Genre } from "@/lib/api/genres"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback, useEffect, useState } from "react"

export default function FilterGenre({ genres }: { genres: Genre[] }) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [selectedGenreId, setSelectedGenreId] = useState("")

  useEffect(() => {
    setSelectedGenreId(
      genres
        ?.find(
          (genre: Genre) => searchParams?.get("genre") === genre?.id?.toString()
        )
        ?.id?.toString() || ""
    )
  }, [searchParams, genres])

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())

      params.delete("page")
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  if (!genres) {
    return null
  }

  return (
    <Select
      value={selectedGenreId}
      onValueChange={(value) =>
        router.push(pathname + "?" + createQueryString("genre", value))
      }
    >
      <SelectTrigger className="lg:max-w-64">
        <SelectValue placeholder="Select a genre" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Genres</SelectLabel>
          {genres?.map((genre: Genre) => (
            <SelectItem key={genre.id} value={genre.id.toString()}>
              {genre?.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
