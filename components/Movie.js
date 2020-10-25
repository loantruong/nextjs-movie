import PropTypes from "prop-types";
import { getAllMovies } from "../lib/movies";
import styles from "../styles/Movie.module.scss";

const Movie = ({ movie }) => {
  const { overview, poster_path, popularity, title, id } = movie;
  return (
    <div className={styles.movie} key={id}>
      <img
        src={`http://image.tmdb.org/t/p/w500/${poster_path}`}
        className={styles.img}
      />
      <div className={styles.description}>
        <h2>{title}</h2>
        <p>
          {overview} <span>...</span>
        </p>
      </div>
    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    overview: PropTypes.strings,
    poster_path: PropTypes.strings,
    title: PropTypes.strings,
    popularity: PropTypes.number,
  })
};

export default Movie;
