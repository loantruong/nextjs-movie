export async function getAllMovies() {
  try {
    const tmdbApiKey = process.env.TMDB_API_KEY;

    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${tmdbApiKey}&language=fr-FR&page=1`
    );
    const data = await res.json();
    return {
      params: data,
    };
  } catch (e) {
    console.log(e);
    return e;
  }
}
