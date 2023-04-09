import YouTube from "react-youtube";
import "./MovieDetailSearch.css";
import React, { useEffect, useState, useCallback } from "react";

//đây là detail của search page
const MovieDetailSearch = (props) => {
  const [video, setVideo] = useState([]);
  const [error, setError] = useState(null);

  //Hàm fetch video
  const fetchVideoHandler = useCallback(async () => {
    setError(null);
    try {
      const respone = await fetch(
        `https://api.themoviedb.org/3//movie/${props.newInfo.id}/videos?api_key=7e3b780c025dafb9df6da358137d5a9c`
      );
      if (!respone.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await respone.json();
      console.log(data);

      if (data.results) {
        var filterBeforeGetKey = data.results.filter((e) => {
          return e.site === "YouTube" && e.type === "Trailer";
        });
        console.log(filterBeforeGetKey);
      }

      const request = filterBeforeGetKey.map((videoData) => {
        return {
          code: videoData.key,
        };
      });
      console.log(request);

      setVideo(request);
    } catch (error) {
      setError(error.message);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchVideoHandler();
  }, [fetchVideoHandler, props.newInfo.id]);

  if (error) {
    console.log(error);
  }

  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="search-detail">
      <div className="detail-frame">
        <h2>{props.newInfo.name}</h2>
        <hr />
        <p>{props.newInfo.date}</p>
        <p>{props.newInfo.vote}</p>
        <p>{props.newInfo.review}</p>
      </div>
      {video[0] && (
        <YouTube videoId={video[0].code} opts={opts} className="video-search" />
      )}
      {!video[0] && (
        <img
          src={`https://image.tmdb.org/t/p/original${props.newInfo.backdrop}`}
          alt="abc"
          width="600px"
          height="300px"
        />
      )}
    </div>
  );
};

export default MovieDetailSearch;
