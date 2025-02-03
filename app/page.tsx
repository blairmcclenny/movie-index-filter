import { Suspense } from "react"
import Image from "next/image"
import { getMovies, Movie, Movies } from "@/lib/api/movies"
import { formatDate } from "@/lib/utils"
import { ImageIcon } from "@radix-ui/react-icons"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Filters from "./filters"
import PaginationController from "@/components/paginationController"
import Link from "next/link"
import { notFound } from "next/navigation"
import { TypographyH2 } from "@/components/typography"

export default async function Home(
  props: {
    searchParams?: Promise<Record<string, string>>
  }
) {
  const searchParams = await props.searchParams;
  const movies: Movies = await getMovies(searchParams)

  if (!movies) {
    return notFound()
  }

  if (movies.results.length === 0) {
    return (
      <div className="container">
        <Filters />
        <div className="text-center mt-8">
          <TypographyH2 className="border-none pb-0">
            No movies found
          </TypographyH2>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <Filters />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        {movies?.results?.map((movie: Movie) => (
          <Link href={`/${movie?.id}`} key={movie?.id}>
            <Card className="overflow-hidden">
              {movie?.poster_path ? (
                <div className="aspect-2/3 relative bg-muted">
                  <Image
                    src={`${process.env.IMAGE_BASE_URL}${movie?.poster_path}`}
                    alt={movie?.title}
                    fill
                    sizes="(max-wdith: 780px) 100vw"
                    unoptimized
                  />
                </div>
              ) : (
                <div className="aspect-2/3 bg-muted relative flex justify-center">
                  <ImageIcon className="w-3/12 max-w-16 h-auto text-muted-foreground" />
                </div>
              )}
              <CardHeader>
                <CardTitle className="leading-snug">{movie?.title}</CardTitle>
                {movie?.release_date && (
                  <CardDescription>
                    {formatDate(movie?.release_date)}
                  </CardDescription>
                )}
              </CardHeader>
              <CardFooter>
                <Badge>{Math.ceil(movie?.vote_average * 10)}%</Badge>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
      <Suspense>
        {movies.total_pages > 1 && (
          <div className="mt-8">
            <PaginationController
              totalPages={Math.min(movies.total_pages, 500)}
            />
          </div>
        )}
      </Suspense>
    </div>
  )
}
