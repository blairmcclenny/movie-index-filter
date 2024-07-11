import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getMovies, Movie, Movies } from "@/lib/api"
import { formatDate } from "@/lib/utils"
import { ImageIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import Filters from "./filters"
import Container from "@/components/container"
import PaginationController from "@/components/paginationController"

export default async function Home() {
  const movies: Movies = await getMovies()

  return (
    <Container>
      <Filters />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        {movies?.results?.map((movie: Movie) => (
          <Card key={movie.id} className="overflow-hidden">
            {movie.backdrop_path ? (
              <div className="aspect-[2/3] relative">
                <Image
                  src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
                  alt={movie.title}
                  fill
                  sizes="(max-wdith: 780px) 100vw"
                />
              </div>
            ) : (
              <div className="aspect-[2/3] bg-muted relative flex justify-center">
                <ImageIcon className="w-3/12 max-w-16 h-auto text-muted-foreground" />
              </div>
            )}
            <CardHeader>
              <CardTitle className="leading-snug">{movie.title}</CardTitle>
              {movie.release_date && (
                <CardDescription>
                  {formatDate(movie.release_date)}
                </CardDescription>
              )}
            </CardHeader>
            <CardFooter>
              <Badge>{Math.ceil(movie.vote_average * 10)}%</Badge>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-8">
      <PaginationController />
      </div>
    </Container>
  )
}
