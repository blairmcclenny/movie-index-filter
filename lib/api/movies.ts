import { formatQueryString } from "../utils"

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

export const getMovies = async (
  year?: string,
  genre?: string,
  page?: string
) => {
  const queryParamsArray: [string, string | undefined][] = [
    ["certification_country", "US"],
    ["include_adult", "false"],
    ["include_video", "false"],
    ["language", "en-US"],
    ["sort_by", "popularity.desc"],
    ["with_runtime.gte", "90"],
    ["with_runtime.lte", "230"],
    ["primary_release_year", year],
    ["with_genres", genre],
    ["page", page],
  ]

  const queryParams = formatQueryString(new Map(queryParamsArray))

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.MOVIE_DB_ACCESS_TOKEN}`,
    },
  }

  const movies = await fetch(
    `${process.env.API_BASE_URL}/discover/movie${queryParams}`,
    options
  )

  if (!movies.ok) {
    throw new Error("Failed to fetch movies")
  }

  return movies.json()
}
