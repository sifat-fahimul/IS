import { LOADED_MOVIES } from "./actionTypes";

export const loadedMovies = (movies) => {
  return {
    type: LOADED_MOVIES,
    payload: movies,
  };
};
