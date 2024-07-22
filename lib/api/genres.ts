export interface Genre {
  id: number
  name: string
}

export interface Genres {
  genres: Genre[]
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
