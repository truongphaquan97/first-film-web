import React from "react";
import "./MovieOriginal.css";

//Component này hiện ảnh của tất cả các list phim
const MovieOriginal = (props) => {
  const { direction } = props;

  return (
    <React.Fragment>
      <img
        className={`img ${direction === "row" ? "row" : "column"}`}
        src={
          direction === "row"
            ? `https://image.tmdb.org/t/p/w500${props.backdrop}`
            : `https://image.tmdb.org/t/p/w500${props.poster}`
        }
        alt={props.code}
        onClick={props.onClick}
      />
    </React.Fragment>
  );
};

export default MovieOriginal;
