const TMDB_API_KEY = process.env.TMDB_API_KEY;
export async function getAllMovies() {
  try {
    let movies = [];
    for (let i = 1; i <= 6; i++) {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=fr-FR&page=${i}`
      );
      const data = await res.json();
      movies = [...movies, ...data.results];
    }

    return {
      params: { results: movies },
    };
  } catch (e) {
    console.log(e);
    return e;
  }
}

export async function getAllMoviesIds(allMovies) {
  const tmdbApiKey = process.env.TMDB_API_KEY;
  let movies = [];
  for (let i = 1; i <= 6; i++) {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=fr-FR&page=${i}`
    );
    const data = await res.json();
    movies = [...movies, ...data.results];
  }

  return movies.map((movie) => {
    return {
      params: {
        id: movie.id.toString(),
      },
    };
  });
}

export async function getMovieData(id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}&language=fr-FR`
  );
  const data = await res.json();
  return {
    id,
    data,
  };
}
