import React from "react";
import { useState } from "react";
import MovieDetailSearch from "./MovieDetailSearch";
import MovieSearch from "./MovieSearch";
import "./ResultList.css";

//Compnent hiện kết quả search
const ResultList = (props) => {
  const [movieId, setMovieId] = useState("");

  //Hằng số này chưa object khớp với id của phim chúng ta click vào
  const getDetailBySearchObject = props.data.find((searchMovie) =>
    searchMovie.id ? searchMovie.id === movieId : null
  );
  console.log(getDetailBySearchObject);
  return (
    <div className="result-page">
      <h2 className="h2-search">Search Result</h2>
      <div className="frame-search">
        {props.data &&
          props.data.map((movie, index) => (
            <MovieSearch
              code={movie.id}
              poster={movie.poster}
              backdrop={movie.backdrop}
              key={index}
              direction="column"
              onClick={() => {
                console.log(movie.id);
                if (movieId === movie.id) {
                  setMovieId("");
                } else {
                  setMovieId(movie.id);
                }
              }}
            />
          ))}
      </div>
      <div>
        {movieId !== "" && getDetailBySearchObject && (
          <MovieDetailSearch
            newInfo={getDetailBySearchObject}
            key={getDetailBySearchObject?.id}
          />
        )}
      </div>
    </div>
  );
};

export default ResultList;
