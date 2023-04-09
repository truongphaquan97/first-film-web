import React from "react";
import MovieDetail from "./MovieDetail";
import "./MovieList.css";
import MovieOriginal from "./MovieOriginal";

//Đây là component chưa list phim và MovieDetail nàm ngoài cùng của mỗi list phim
function MovieList(props) {
  const { list } = props;

  //Tìm object tương ứng với mã post đóng vai trò như key, thay thê id để tránh trùng id giữa 2 list phim mà có chung 1 bộ phim
  const getDetailByCurrentObject = list.find(
    (listMovie) => listMovie?.post === props.currentPost
  );

  console.log(getDetailByCurrentObject);

  return (
    <section className="frame-list">
      <div
        className={
          props.topic === "Original" ? "list-original" : "list-general"
        }
      >
        <h2 className="topic">{props.topic}</h2>
        {list &&
          list.map((original, index) => (
            <MovieOriginal
              code={original.id}
              poster={original.poster}
              backdrop={original.backdrop}
              direction={props.direction}
              key={original.post}
              onClick={() => {
                props.movieCLick(original);
              }}
            />
          ))}
      </div>
      {props.currentPost !== "" && getDetailByCurrentObject && (
        <MovieDetail
          newInfo={getDetailByCurrentObject}
          key={getDetailByCurrentObject?.id}
          oriClass={props.topic}
        />
      )}
    </section>
  );
}

export default MovieList;
