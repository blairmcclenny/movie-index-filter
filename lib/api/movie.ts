interface Genre {
  id: number
  name: string
}

interface ProductionCompany {
  id: number
  logo_path: string
  name: string
}

export interface Movie {
  budget: number
  genres: Genre[]
  homepage: string
  id: number
  imdb_id: string
  overview: string
  poster_path: string
  production_companies: ProductionCompany[]
  release_date: string
  revenue: number
  runtime: number
  tagline: string
  title: string
  vote_average: number
}

export const getMovie = async (id?: string) => {
  const baseUrl = `${process.env.API_BASE_URL}movie`

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.MOVIE_DB_ACCESS_TOKEN}`,
    },
  }

  const movie = await fetch(`${baseUrl}/${id}?language=en-US`, options)

  if (!movie.ok) {
    return undefined
  }

  return movie.json()
}
