import React, { useEffect, Fragment, useCallback, useState } from "react";
import MovieList from "./MovieList";

//Đây là component cha chưa tất cả các list phim
const MovieSection = (props) => {
  //Xử lý dữ liệu khi click vào ảnh trong list phim hiện phần detail
  const [selectMovieObject, setSelectMovieObject] = useState(null);

  const [moviePost, setMoviePost] = useState("");

  const movieCLick = (newMovieObject) => {
    if (newMovieObject.post === moviePost) {
      setMoviePost("");
    } else {
      setMoviePost(newMovieObject.post);
    }
    setSelectMovieObject(newMovieObject);
  };

  /////////////////////////////////////////////////////////////////////////////////////////////
  const [original, setOriginal] = useState([]);
  const [error, setError] = useState(null);

  const fetchOriginalHandler = useCallback(async () => {
    setError(null);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3${props.limov.fetchNetflixOriginals}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      console.log(data);

      const request = data.results.map((movieData) => {
        return {
          id: movieData.id,
          name: movieData.name,
          review: movieData.overview,
          poster: movieData.poster_path,
          backdrop: movieData.backdrop_path,
          vote: movieData.vote_average,
          date: movieData.first_air_date,
          post: `original${movieData.id}`,
        };
      });

      console.log(request);

      // const top10 = request.slice(0, 10);
      // console.log(top10);

      setOriginal(request);
    } catch (error) {
      setError(error.message);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchOriginalHandler();
  }, [fetchOriginalHandler]);

  if (error) {
    console.log(error);
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [trending, setTrending] = useState([]);
  const [errorTrend, setErrorTrend] = useState(null);

  const fetchTrendHandler = useCallback(async () => {
    setErrorTrend(null);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3${props.limov.fetchTrending}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      console.log(data);

      const request = data.results.map((movieData) => {
        return {
          id: movieData.id,
          name: movieData.title,
          review: movieData.overview,
          poster: movieData.poster_path,
          backdrop: movieData.backdrop_path,
          vote: movieData.vote_average,
          date: movieData.release_date,
          post: `trending${movieData.id}`,
        };
      });

      console.log(request);

      setTrending(request);
    } catch (errorTrend) {
      setErrorTrend(errorTrend.message);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchTrendHandler();
  }, [fetchTrendHandler]);

  if (errorTrend) {
    console.log(errorTrend);
  }

  ///////////////////////////////////////////////////////////////////////////

  const [topRated, setTopRated] = useState([]);
  const [errorTopRated, setErrorTopRated] = useState(null);

  const fetchTopRatedHandler = useCallback(async () => {
    setErrorTopRated(null);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3${props.limov.fetchTopRated}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      console.log(data);

      const request = data.results.map((movieData) => {
        return {
          id: movieData.id,
          name: movieData.title,
          review: movieData.overview,
          poster: movieData.poster_path,
          backdrop: movieData.backdrop_path,
          vote: movieData.vote_average,
          date: movieData.release_date,
          post: `topRated${movieData.id}`,
        };
      });

      console.log(request);

      setTopRated(request);
    } catch (errorTopRated) {
      setErrorTopRated(errorTopRated.message);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchTopRatedHandler();
  }, [fetchTopRatedHandler]);

  if (errorTopRated) {
    console.log(errorTopRated);
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const [action, setAction] = useState([]);
  const [errorAction, setErrorAction] = useState(null);

  const fetchActionHandler = useCallback(async () => {
    setErrorAction(null);

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3${props.limov.fetchActionMovies}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      console.log(data);

      const request = data.results.map((movieData) => {
        return {
          id: movieData.id,
          name: movieData.title,
          review: movieData.overview,
          poster: movieData.poster_path,
          backdrop: movieData.backdrop_path,
          vote: movieData.vote_average,
          date: movieData.release_date,
          post: `action${movieData.id}`,
        };
      });

      console.log(request);

      setAction(request);
    } catch (errorAction) {
      setErrorAction(errorAction.message);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchActionHandler();
  }, [fetchActionHandler]);

  if (errorAction) {
    console.log(errorAction);
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [comedy, setComedy] = useState([]);
  const [errorComedy, setErrorComedy] = useState(null);

  const fetchComedyHandler = useCallback(async () => {
    setErrorComedy(null);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3${props.limov.fetchComedyMovies}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      console.log(data);

      const request = data.results.map((movieData) => {
        return {
          id: movieData.id,
          name: movieData.title,
          review: movieData.overview,
          poster: movieData.poster_path,
          backdrop: movieData.backdrop_path,
          vote: movieData.vote_average,
          date: movieData.release_date,
          post: `comedy${movieData.id}`,
        };
      });

      console.log(request);

      setComedy(request);
    } catch (errorComedy) {
      setErrorComedy(errorComedy.message);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchComedyHandler();
  }, [fetchComedyHandler]);

  if (errorComedy) {
    console.log(errorComedy);
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [horror, setHorror] = useState([]);
  const [errorHorror, setErrorHorror] = useState(null);

  const fetchHorrorHandler = useCallback(async () => {
    setErrorHorror(null);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3${props.limov.fetchHorrorMovies}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      console.log(data);

      const request = data.results.map((movieData) => {
        return {
          id: movieData.id,
          name: movieData.title,
          review: movieData.overview,
          poster: movieData.poster_path,
          backdrop: movieData.backdrop_path,
          vote: movieData.vote_average,
          date: movieData.release_date,
          post: `horror${movieData.id}`,
        };
      });

      console.log(request);

      setHorror(request);
    } catch (errorHorror) {
      setErrorHorror(errorHorror.message);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchHorrorHandler();
  }, [fetchHorrorHandler]);

  if (errorHorror) {
    console.log(errorHorror);
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [romance, setRomance] = useState([]);
  const [errorRomance, setErrorRomance] = useState(null);

  const fetchRomanceHandler = useCallback(async () => {
    setErrorRomance(null);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3${props.limov.fetchRomanceMovies}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      console.log(data);

      const request = data.results.map((movieData) => {
        return {
          id: movieData.id,
          name: movieData.title,
          review: movieData.overview,
          poster: movieData.poster_path,
          backdrop: movieData.backdrop_path,
          vote: movieData.vote_average,
          date: movieData.release_date,
          post: `romance${movieData.id}`,
        };
      });

      console.log(request);

      setRomance(request);
    } catch (errorRomance) {
      setErrorRomance(errorRomance.message);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchRomanceHandler();
  }, [fetchRomanceHandler]);

  if (errorRomance) {
    console.log(errorRomance);
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const [document, setDocument] = useState([]);
  const [errorDocument, setErrorDocument] = useState(null);

  const fetchDocumentHandler = useCallback(async () => {
    setErrorDocument(null);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3${props.limov.fetchDocumentaries}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      console.log(data);

      const request = data.results.map((movieData) => {
        return {
          id: movieData.id,
          name: movieData.title,
          review: movieData.overview,
          poster: movieData.poster_path,
          backdrop: movieData.backdrop_path,
          vote: movieData.vote_average,
          date: movieData.release_date,
          post: `document${movieData.id}`,
        };
      });

      console.log(request);

      setDocument(request);
    } catch (errorDocument) {
      setErrorDocument(errorDocument.message);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchDocumentHandler();
  }, [fetchDocumentHandler]);

  if (errorDocument) {
    console.log(errorDocument);
  }

  return (
    <Fragment>
      <div className="list-film">
        <MovieList
          list={original}
          direction="column"
          currentPost={moviePost}
          newInfo={selectMovieObject}
          movieCLick={movieCLick}
          topic="Original"
        />
      </div>
      <div className="empty" style={{ height: "120px" }}></div>
      <div className="list-film">
        <MovieList
          direction="row"
          list={trending}
          currentPost={moviePost}
          newInfo={selectMovieObject}
          movieCLick={movieCLick}
          topic="Xu hướng"
        />
      </div>
      <div className="empty" style={{ height: "120px" }}></div>
      <div className="list-film">
        <MovieList
          direction="row"
          list={topRated}
          currentPost={moviePost}
          newInfo={selectMovieObject}
          movieCLick={movieCLick}
          topic="Xếp hạng cao"
        />
      </div>
      <div className="empty" style={{ height: "120px" }}></div>
      <div className="list-film">
        <MovieList
          direction="row"
          list={action}
          currentPost={moviePost}
          newInfo={selectMovieObject}
          movieCLick={movieCLick}
          topic="Hành động"
        />
      </div>
      <div className="empty" style={{ height: "120px" }}></div>
      <div className="list-film">
        <MovieList
          direction="row"
          list={comedy}
          currentPost={moviePost}
          newInfo={selectMovieObject}
          movieCLick={movieCLick}
          topic="Phim Hài"
        />
      </div>
      <div className="empty" style={{ height: "120px" }}></div>
      <div className="list-film">
        <MovieList
          direction="row"
          list={horror}
          currentPost={moviePost}
          newInfo={selectMovieObject}
          movieCLick={movieCLick}
          topic="Kinh Dị"
        />
      </div>
      <div className="empty" style={{ height: "120px" }}></div>
      <div className="list-film">
        <MovieList
          direction="row"
          list={romance}
          currentPost={moviePost}
          newInfo={selectMovieObject}
          movieCLick={movieCLick}
          topic="Lãng Mạn"
        />
      </div>
      <div className="empty" style={{ height: "120px" }}></div>
      <div className="list-film">
        <MovieList
          direction="row"
          list={document}
          currentPost={moviePost}
          newInfo={selectMovieObject}
          movieCLick={movieCLick}
          topic="Tài Liệu"
        />
      </div>
    </Fragment>
  );
};
export default MovieSection;
