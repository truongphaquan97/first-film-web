import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";

import NavBar from "./NavBar";
import "./Banner.css";

const Banner = (props) => {
  //Hiện Banner
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);

  //Hàm Fetch Api dùng link fetchNetflixOriginals
  const fetchMovieHandler = async () => {
    setError(null);
    try {
      const respone = await fetch(
        `https://api.themoviedb.org/3${props.link.fetchNetflixOriginals}`
      );
      if (!respone.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await respone.json();

      const request =
        data.results[Math.floor(Math.random() * data.results.length - 1)];

      setMovie(request);
    } catch (error) {
      setError(error.message);
    }
  };

  if (error) {
    console.log(error);
  }

  useEffect(() => {
    fetchMovieHandler();
  }, [respone]);

  return (
    <div
      className="top"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
      // onLoad={fetchMovieHandler}
    >
      <NavBar />
      <div className="top-hot">
        <div className="top-name">
          <h1>{movie.name}</h1>
        </div>
        <div className="top-button">
          <div>
            <button></button>
            <p className="btn-play">Play</p>
          </div>
          <div>
            <button></button>
            <p className="btn-list">My List</p>
          </div>
        </div>
        <div className="top-review">
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
