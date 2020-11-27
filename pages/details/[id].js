import { getAllMovies, getMovieData, getAllMoviesIds } from "../../lib/movies";
import Head from "next/head";
import styles from "../../styles/Details.module.scss";
import Link from "next/link";
import Layout from "../../components/Layout";

export default function Details({ allMovies }) {
  //console.log("object", allMovies);
  const {
    overview,
    poster_path,
    popularity,
    title,
    id,
    release_date,
    vote_average,
    genres,
  } = allMovies.data;
  return (
    <Layout>
      <article>
        <div className={styles.container} key={id}>
          <img
            src={`http://image.tmdb.org/t/p/w500/${poster_path}`}
            className={styles.img}
          />
          <div className={styles.details}>
            <div className={styles.title}>
              <h1>{title}</h1>
              {genres.map((genre) => (
                <span key={genre.id} className={styles.genre}>
                  {genre.name}
                </span>
              ))}
            </div>
            <div>
              {/*  <p>{popularity}</p> */}
              <p>{vote_average}</p>
              <p>Date de sortie : {release_date}</p>
            </div>
            <p className={styles.overview}>{overview}</p>
            <button>
              <Link href="/">
                <a>← Back to home</a>
              </Link>
            </button>
          </div>
        </div>
      </article>
    </Layout>
  );
}

export async function getStaticProps(params) {
  console.log("id", params);
  // fetch necessary data for the blog post usign parmas.id
  const allMovies = await getMovieData(params.params.id);

  return {
    props: {
      allMovies,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getAllMoviesIds();
  //console.log("paths", paths);
  return {
    paths,
    fallback: false,
  };
}
