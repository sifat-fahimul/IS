import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  return (
    <div className="book-card">
      <img
        className="h-[240px] w-[170px] object-cover lws-bookThumbnail"
        src={movie?.image?.original}
        alt="movie"
      />
      <div className="flex-1 h-full pr-2 pt-2 flex flex-col">
        <div className="flex items-center justify-between"></div>

        <div className="space-y-2 mt-4 h-full">
          <h4 className="lws-bookName">{movie.name}</h4>
          <p className="lws-author">{movie.language}</p>
          <p className="lws-author">Rating: {movie?.rating?.average}</p>
          <p className="lws-price"> {movie.status}</p>
        </div>
        <Link
          to={`/details/${movie.id}`}
          className="button-4"
          style={{ textAlign: "center" }}
        >
          VIEW MORE
        </Link>
      </div>
    </div>
  );
};

export default Movie;
