import { LOADED_MOVIES } from "./actionTypes";
import initialState from "./initialState";

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED_MOVIES:
      return action.payload;
    default:
      return state;
  }
};

export default moviesReducer;
