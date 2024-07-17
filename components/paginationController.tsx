"use client"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { cn, generatePagination } from "@/lib/utils"
import { usePathname, useSearchParams } from "next/navigation"

export default function PaginationController({
  totalPages,
}: {
  totalPages: number
}) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get("page")) || 1

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set("page", pageNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  const allPages = generatePagination(currentPage, totalPages)

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={createPageURL(currentPage - 1)}
            className={currentPage <= 1 ? "pointer-events-none" : ""}
            aria-disabled={currentPage <= 1}
            tabIndex={currentPage <= 1 ? -1 : undefined}
          />
        </PaginationItem>
        {allPages.map((page, index) => {
          return (
            <PaginationItem key={`${page}-${index}`}>
              {page !== "..." ? (
                <PaginationLink
                  href={createPageURL(page)}
                  isActive={currentPage === page}
                  className={cn(
                    "min-w-9 w-fit px-2.5",
                    currentPage === page ? "pointer-events-none" : ""
                  )}
                >
                  {page}
                </PaginationLink>
              ) : (
                <PaginationEllipsis />
              )}
            </PaginationItem>
          )
        })}
        <PaginationItem>
          <PaginationNext
            href={createPageURL(currentPage + 1)}
            className={currentPage >= totalPages ? "pointer-events-none" : ""}
            aria-disabled={currentPage >= totalPages}
            tabIndex={currentPage >= totalPages ? -1 : undefined}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
