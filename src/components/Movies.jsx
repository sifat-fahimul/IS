import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import Movie from "./Movie";
import fetchMovies from "../redux/movieFeature/thunk/fetchMovies";

const Movies = () => {
  const movies = useSelector((state) => state.movies);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies);
  }, []);

  const searchTextFn = (movie) => {
    const { searchText } = filters;
    return movie?.show.name
      ?.toLocaleLowerCase()
      .includes(searchText?.toLocaleLowerCase());
  };

  return (
    <div className="container  gap-4 2xl:gap-8">
      <div className="order-2 xl:-order-1">
        <Header />
        <div className="lws-bookContainer">
          {movies.filter(searchTextFn).map((movie) => (
            <Movie key={movie?.show.id} movie={movie?.show} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
