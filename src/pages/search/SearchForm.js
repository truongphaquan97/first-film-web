import React, { useState } from "react";
import "./SearchForm.css";

const SearchForm = (props) => {
  const [result, setResult] = useState("");
  const [isValid, setIsValid] = useState(true);

  //Hàm này validate khi click vào nút search
  const changeResultHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }

    setResult(event.target.value);
  };

  //Hàm chuyển đổi từ tứ tự viết rời sang viết liền và có dấu '-' ở giữa các từ
  const formHandler = (event) => {
    event.preventDefault();
    if (result.trim().length === 0) {
      setIsValid(false);
      return;
    }
    if (result.includes(" ")) {
      let arr = [];
      arr = result.split(" ");
      console.log(arr);
      const addResult = arr.join("-");
      console.log(addResult);
      //gửi kết qu3 lên parent
      props.onAddQuery(addResult);
    } else {
      //gửi kết qu3 lên parent
      props.onAddQuery(result);
      console.log(result);
    }
  };

  return (
    <div className="wrap-form">
      {!isValid && <p style={{ color: "white" }}>Please input movie name!</p>}
      <div className="form">
        <div className="input-movie container">
          <input placeholder="movie" onChange={changeResultHandler}></input>
          <div className="img-search">
            <img src="/search.svg" alt="search" />
          </div>
        </div>
        <div className="btn">
          <button className="btn-1">RESET</button>
          <button className="btn-2" type="submit" onClick={formHandler}>
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
