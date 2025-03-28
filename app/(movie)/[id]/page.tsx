import {
  TypographyH1,
  TypographyH2,
  TypographyLead,
  TypographyMuted,
  TypographyP,
} from "@/components/typography"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { getMovie, Movie } from "@/lib/api/movie"
import { formatDate } from "@/lib/utils"
import { ImageIcon } from "@radix-ui/react-icons"
import { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"

export async function generateMetadata(
  props: {
    params: Promise<{ id: string }>
  }
): Promise<Metadata> {
  const params = await props.params;
  const movie: Movie = await getMovie(params.id)

  if (!movie) {
    return notFound()
  }

  return {
    title: movie.title,
  }
}

export default async function MoviePage(
  props: {
    params: Promise<{ id: string }>
  }
) {
  const params = await props.params;
  const movie: Movie = await getMovie(params.id)

  if (!movie) {
    return notFound()
  }

  return (
    <div className="container max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card className="overflow-hidden h-fit">
        {movie?.poster_path ? (
          <div className="aspect-2/3 relative bg-muted">
            <Image
              src={`${process.env.IMAGE_BASE_URL}${movie?.poster_path}`}
              alt={movie?.title}
              fill
              sizes="(max-wdith: 780px) 50vw"
              unoptimized
            />
          </div>
        ) : (
          <div className="aspect-2/3 bg-muted relative flex justify-center">
            <ImageIcon className="w-3/12 max-w-16 h-auto text-muted-foreground" />
          </div>
        )}
      </Card>
      <div>
        <TypographyH1>{movie?.title}</TypographyH1>
        <TypographyLead className="mt-2">
          {formatDate(movie?.release_date)}
        </TypographyLead>
        <TypographyMuted className="mt-4">
          Runtime: {movie.runtime} minutes
        </TypographyMuted>
        <Badge className="mt-2">{Math.ceil(movie?.vote_average * 10)}%</Badge>

        <TypographyH2 className="mt-10">{movie?.tagline}</TypographyH2>
        <TypographyP>{movie?.overview}</TypographyP>
      </div>
    </div>
  )
}
