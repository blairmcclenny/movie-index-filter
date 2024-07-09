import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getMovies, Movie, Movies } from "@/lib/api"
import Image from "next/image"

export default async function Home() {
  const movies: Movies = await getMovies()

  return (
    <main className="max-w-7xl mx-auto px-6 my-16">
      <h1>Movie Index</h1>
      <div className="mt-10 grid grid-cols-4 gap-8">
        {movies?.results?.map((movie: Movie) => (
          <Card key={movie.id} className="overflow-hidden">
            {movie.backdrop_path ? (
              <div className="aspect-video relative">
                <Image
                  src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
                  alt={movie.title}
                  fill
                />
              </div>
            ) : (
              <div className="aspect-video bg-muted-foreground" />
            )}
            <CardHeader>
              <CardTitle>{movie.title}</CardTitle>
              <CardDescription className="truncate">
                {movie.overview}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </main>
  )
}
