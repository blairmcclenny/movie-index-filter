export interface Genre {
  id: number
  name: string
}

export interface Genres {
  genres: Genre[]
}

export const getMovieGenres = async () => {
  const url = `${process.env.API_BASE_URL}/genre/movie/list?language=en`
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.MOVIE_DB_ACCESS_TOKEN}`,
    },
    next: { revalidate: 3600 },
  }

  const genres = await fetch(url, options)

  if (!genres.ok) {
    return undefined
  }

  return genres.json()
}
