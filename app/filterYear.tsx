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
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback, useEffect, useState } from "react"

export default function FilterYear() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const currentYear = new Date().getFullYear()
  const years: number[] = Array.from({ length: 101 }, (_, i) => currentYear - i)

  const [selectedYear, setSelectedYear] = useState("")

  useEffect(() => {
    setSelectedYear(
      years
        .find((year: number) => searchParams?.get("year") === year.toString())
        ?.toString() || ""
    )
  }, [searchParams, years])

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())

      params.delete("page")
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  return (
    <Select
      value={selectedYear}
      onValueChange={(value) =>
        router.push(pathname + "?" + createQueryString("year", value))
      }
    >
      <SelectTrigger className="lg:max-w-64">
        <SelectValue placeholder="Select a year" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Years</SelectLabel>
          {years.map((year) => (
            <SelectItem key={`release-year-${year}`} value={year.toString()}>
              {year}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
