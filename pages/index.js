import Head from "next/head";
import styles from "../styles/Home.module.css";
import Movie from "../components/Movie";
import { getAllMovies } from "../lib/movies";
import Layout from "../components/Layout";

export async function getServerSideProps() {
  const allMovies = await getAllMovies();
  return {
    props: {
      allMovies,
    },
  };
}

function Home({ allMovies }) {
  const { results } = allMovies.params;
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          {results.map((movie, id) => (
            <Movie movie={movie} key={id} />
          ))}
        </main>
      </div>
    </Layout>
  );
}

export default Home;
