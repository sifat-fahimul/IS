import { EDIT_BOOK_ID, SEARCH_BOOK, SORT_BOOK } from "./actionTypes";

export const sortBooks = (sortBy) => {
  return {
    type: SORT_BOOK,
    payload: sortBy,
  };
};

export const searchBooks = (searchText) => {
  return {
    type: SEARCH_BOOK,
    payload: searchText,
  };
};

export const editBookId = (bookID) => {
  return {
    type: EDIT_BOOK_ID,
    payload: bookID,
  };
};
