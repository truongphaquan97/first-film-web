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
