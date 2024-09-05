export interface Movie {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface Movies {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

export const getMovies = async (searchParams?: Record<string, string>) => {
  const queryParams: Record<string, string> = {
    certification_country: "US",
    "certification.gte": "1",
    "certification.lte": "4",
    include_adult: "false",
    include_video: "false",
    language: "en-US",
    sort_by: "popularity.desc",
    "vote_count.gte": "1",
    "with_runtime.gte": "90",
    "with_runtime.lte": "230",
    ...searchParams,
  }

  const queryString = new URLSearchParams(queryParams).toString()

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.MOVIE_DB_ACCESS_TOKEN}`,
    },
    next: { revalidate: 3600 },
  }

  const movies = await fetch(
    `${process.env.API_BASE_URL}/discover/movie?${queryString}`,
    options
  )

  if (!movies.ok) {
    return undefined
  }

  return movies.json()
}
