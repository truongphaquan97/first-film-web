import React from "react";
import MovieSection from "./MovieSection";

import Banner from "./Banner";

function Browse() {
  const requests = {
    fetchTrending: `/trending/all/week?api_key=7e3b780c025dafb9df6da358137d5a9c&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=7e3b780c025dafb9df6da358137d5a9c&with_network=123`,
    fetchTopRated: `/movie/top_rated?api_key=7e3b780c025dafb9df6da358137d5a9c&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=7e3b780c025dafb9df6da358137d5a9c&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=7e3b780c025dafb9df6da358137d5a9c&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=7e3b780c025dafb9df6da358137d5a9c&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=7e3b780c025dafb9df6da358137d5a9c&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=7e3b780c025dafb9df6da358137d5a9c&with_genres=99`,
    fetchSearch: `/search/movie?api_key=7e3b780c025dafb9df6da358137d5a9c&language=en-US`,
  };

  return (
    <div className="browse">
      <Banner link={requests}></Banner>
      <MovieSection limov={requests}></MovieSection>
    </div>
  );
}

export default Browse;
