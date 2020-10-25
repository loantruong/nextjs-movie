export async function getAllMovies() {
  try {
    const tmdbApiKey = process.env.TMDB_API_KEY;
    let movies = [];
    for(let i = 1; i <= 6; i++) {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${tmdbApiKey}&language=fr-FR&page=${i}`
      );
      const data = await res.json()
      movies = [...movies, ...data.results]
    }

    return {
      params: {results : movies},
    };
  } catch (e) {
    console.log(e);
    return e;
  }
}
