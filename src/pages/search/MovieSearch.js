import React from "react";
import "./MovieSearch.css";

//Mỗi ảnh của list phim
const MovieSearch = (props) => {
  return (
    <img
      className="img-list-search"
      src={`https://image.tmdb.org/t/p/w500${props.poster}`}
      alt={props.code}
      title={props.code}
      onClick={props.onClick}
    />
  );
};

export default MovieSearch;
