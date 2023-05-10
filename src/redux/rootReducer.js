import { combineReducers } from "redux";

import moviesReducer from "./movieFeature/reducer";
import filtersReducer from "./filters/reducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  filters: filtersReducer,
});

export default rootReducer;
