import { TypographyH2 } from "@/components/typography"

export default function NotFound() {
  return (
    <div className="container flex gap-4 justify-center items-center h-full">
      <TypographyH2 className="mb-0 border-none leading-none pb-0">
        404
      </TypographyH2>
      <span className="h-8 border-l" />
      <p className="leading-none">Not Found</p>
    </div>
  )
}
