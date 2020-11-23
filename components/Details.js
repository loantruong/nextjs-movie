import PropTypes from "prop-types";
import { getMovieData } from "../lib/movies";

const PostLink = (props) => (
  <Link href="/details/[id]" as={`/details/${props.id}`}>
    <h1>{props.title}</h1>
  </Link>
);

const Details = ({ movie }) => (
  <div>
    <PostLink {...movie} />
    <h1>{movie.title}</h1>
  </div>
);

export async function getStaticProps(params) {
  // fetch necessary data for the blog post usign parmas.id
  const postData = await getMovieData(params.result.id);

  return {
    props: {
      postData,
    },
  };
}

Details.propTypes = {};

export default Details;
