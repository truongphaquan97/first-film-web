import React, { useState } from "react";
import "./NavBar.css";
const NavBar = () => {
  const [isScrollValid, setIsScrollValid] = useState(true);
  const [scrollTop, setScrollTop] = useState(0);

  //Tính vị trí đang cuộn
  const handleScroll = (event) => {
    setScrollTop(window.scrollY);
    if (scrollTop > 100) {
      setIsScrollValid(false);
    } else if (scrollTop === 0) {
      setIsScrollValid(true);
    }
  };
  window.addEventListener("scroll", handleScroll);
  console.log(scrollTop);

  //scroll về đầu trang
  const scrollToHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsScrollValid(false);
  };

  //Đổi màu NavBar
  const classScroll = isScrollValid ? "top-header" : "scroll-style";

  const search = (e) => {
    console.log("load...");
    window.location.replace("/search");
  };

  const searchIcon = (
    <svg
      className="svg-inline--fa fa-search fa-w-16 look"
      fill="#ccc"
      aria-hidden="true"
      data-prefix="fas"
      data-icon="search"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      onClick={search}
    >
         {" "}
      <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
         {" "}
    </svg>
  );
  return (
    <div className={classScroll}>
      <p className="movie" onClick={scrollToHandler}>
        Movie App
      </p>
      <img className="look" src="/search.svg" alt="search" onClick={search} />
    </div>
  );
};

export default NavBar;
