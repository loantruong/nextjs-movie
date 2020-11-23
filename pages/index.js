import Head from "next/head";
import styles from "../styles/Home.module.css";
import Movie from "../components/Movie";
import { getAllMovies } from "../lib/movies";

export async function getServerSideProps() {
  const allMovies = await getAllMovies();
  return {
    props: {
      allMovies,
    },
  };
}

export default function Home({ allMovies }) {
  const { results } = allMovies.params;
  return (
    <div className={styles.container}>
      <Head>
        <title>Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {results.map((movie, id) => (
          <Movie movie={movie} key={id}/>
        ))} 
      </main>
    </div>
  );
}
