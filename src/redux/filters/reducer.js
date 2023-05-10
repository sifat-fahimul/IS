import { EDIT_BOOK_ID, SEARCH_BOOK, SORT_BOOK } from "./actionTypes";
import initialState from "./initialState";

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_BOOK:
      return {
        ...state,
        searchText: action.payload,
        sortByFeature: "all",
      };

    case SORT_BOOK:
      return {
        ...state,
        sortByFeature: action.payload,
        searchText: "",
      };
    case EDIT_BOOK_ID:
      return {
        ...state,
        bookId: action.payload,
      };

    default:
      return state;
  }
};
export default filtersReducer;
