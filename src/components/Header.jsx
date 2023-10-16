import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Header = ({ setSearchValue }) => {
  const [value, setValue] = useState("");

  const handleSearchValue = () => {
    if (value === "") {
      return;
    }
    const text = value.trim();
    setSearchValue(text);
  };

  if (value === "") {
    setSearchValue(value);
  }

  return (
    <div className="Header">
      <div className="logo">
        <span>AWD</span>Movie
      </div>

      <form action="">
        <label htmlFor="search" onClick={handleSearchValue}>
          <AiOutlineSearch />
        </label>
        <input
          type="text"
          id="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Header;
