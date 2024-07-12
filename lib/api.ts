export interface Genre {
  id: number
  name: string
}

export interface Genres {
  genres: Genre[]
}

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

export const getMovieGenres = async () => {
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en"
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.MOVIE_DB_ACCESS_TOKEN}`,
    },
  }

  const genres = await fetch(url, options)

  if (!genres.ok) {
    throw new Error("Failed to fetch movie genres")
  }

  return genres.json()
}

export const getMovies = async (
  year?: number,
  genre?: number,
  page?: number
) => {
  const baseUrl = "https://api.themoviedb.org/3/discover/movie"
  const baseParams =
    "certification.gte=NR&certification.lte=NC-17&certification_country=US&include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&with_runtime.gte=90&with_runtime.lte=230"
  const pageNumber = page ? `&page=${page}` : ""
  const primaryReleaseYear = year ? `&primary_release_year=${year}` : ""
  const withGenres = genre ? `&with_genres=${genre}` : ""
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.MOVIE_DB_ACCESS_TOKEN}`,
    },
  }

  const movies = await fetch(
    `${baseUrl}?${baseParams}${primaryReleaseYear}${withGenres}${pageNumber}`,
    options
  )

  if (!movies.ok) {
    throw new Error("Failed to fetch movies")
  }

  return movies.json()
}
