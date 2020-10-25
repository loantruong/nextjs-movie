import Head from "next/head";
import styles from "../styles/Home.module.css";
import Movie from "../components/Movie";
import { getAllMovies } from "../lib/movies";

export async function getStaticProps() {
  const allPostsData = await getAllMovies();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const { results } = allPostsData.params;
  return (
    <div className={styles.container}>
      <Head>
        <title>Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {results.map((movie) => (
          <Movie movie={movie} />
        ))}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
