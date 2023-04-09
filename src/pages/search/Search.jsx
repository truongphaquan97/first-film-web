import React, { useState, useCallback } from "react";

import NavBar from "../browse/NavBar";
import ResultList from "./ResultList";
import SearchForm from "./SearchForm";
import "./Search.css";

const Search = () => {
  const [query, setQuery] = useState(null);

  const [search, setSearch] = useState([]);
  const [errorSearch, setErrorSearch] = useState(null);

  //Hàm fetch api
  const fetchSearchHandler = useCallback(async (keyword) => {
    setErrorSearch(null);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=7e3b780c025dafb9df6da358137d5a9c&language=en-US&page=1&include_adult=false&query=${keyword}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      console.log(data);
      console.log(query);
      const request = data.results.map((movieData) => {
        return {
          id: movieData.id,
          name: movieData.original_title,
          review: movieData.overview,
          poster: movieData.poster_path,
          backdrop: movieData.backdrop_path,
          vote: movieData.vote_average,
          date: movieData.release_date,
        };
      });

      console.log(request);

      setSearch(request);
    } catch (errorSearch) {
      setErrorSearch(errorSearch.message);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getSubmitResult = (result) => {
    setQuery(result);
    console.log(result);
    fetchSearchHandler(result);
  };

  if (errorSearch) {
    console.log(errorSearch);
  }

  return (
    <div className="search-page">
      <NavBar />
      <SearchForm onAddQuery={getSubmitResult}></SearchForm>
      <ResultList data={search}></ResultList>
    </div>
  );
};

export default Search;
