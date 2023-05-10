import { loadedMovies } from "../actions";

const fetchMovies = async (dispatch) => {
  const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
  const movies = await response.json();

  dispatch(loadedMovies(movies));
};

export default fetchMovies;
