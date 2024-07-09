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
  year: number = new Date().getFullYear(),
  genre?: number,
  page: number = 1,
  sort: string = "popularity.desc"
) => {
  const baseUrl = "https://api.themoviedb.org/3/discover/movie"
  const baseParams = "include_adult=false&include_video=false&language=en-US"
  const pageNumber = `&page=${page}`
  const sortBy = `&sort_by=${sort}`
  const primaryReleaseYear = `&primary_release_year=${year}`
  const withGenres = genre ? `&with_genres=${genre}` : ""
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.MOVIE_DB_ACCESS_TOKEN}`,
    },
  }

  const movies = await fetch(
    `${baseUrl}?${baseParams}${primaryReleaseYear}${withGenres}${pageNumber}${sortBy}`,
    options
  )

  if (!movies.ok) {
    throw new Error("Failed to fetch movies")
  }

  return movies.json()
}
