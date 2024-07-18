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
import { Genre } from "@/lib/api"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"

export default function FilterGenre({ genres }: { genres: Genre[] }) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const defaultValue = genres
    ?.find(
      (genre: Genre) => searchParams?.get("genre") === genre?.id?.toString()
    )
    ?.id?.toString()

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
      defaultValue={defaultValue}
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
