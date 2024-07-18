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

export default function FilterYear() {
  const currentYear = new Date().getFullYear()
  const years: number[] = Array.from({ length: 101 }, (_, i) => currentYear - i)

  return (
    <Select>
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
