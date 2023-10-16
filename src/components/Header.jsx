import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <div className="Header">
      <div className="logo">
        <span>AWD</span>Movie
      </div>

      <form action="">
        <label htmlFor="search">
          <AiOutlineSearch />
        </label>
        <input type="text" id="search" />
      </form>
    </div>
  );
};

export default Header;
