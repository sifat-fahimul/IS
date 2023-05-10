import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const { show } = useSelector((state) =>
    state.movies.find((e) => e?.show?.id == id)
  );

  return (
    <div
      className="h-[500px] w-[500px]"
      style={{ height: "500px", width: "500px", margin: "auto" }}
    >
      <div style={{ margin: "30px 0px 30px 0px", marginBottom: "50px" }}>
        <Link to={"/"} className="button-4">
          GO BACK
        </Link>
        <img
          className="h-[100%] w-[100%] object-cover lws-bookThumbnail"
          src={show?.image?.original}
          alt="movie"
        />
        <div className="flex-1 h-full pr-2 pt-2 flex flex-col">
          <div className="flex items-center justify-between"></div>

          <div className="space-y-2 mt-4 h-full">
            <h4 className="lws-bookName">{show.name}</h4>
            <p className="lws-author">Language: {show.language}</p>
            <p className="lws-author">Rating: {show?.rating?.average}</p>
            <div className="flex items-center justify-between">
              <p className="lws-price">Status: {show.status}</p>
              <p className="lws-price">Runtime: {show?.runtime} </p>
            </div>
            <p className="lws-author">Summary : {show?.summary}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
