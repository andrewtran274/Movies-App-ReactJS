import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import MoviesList from "./components/MoviesList";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="container">
      <Header setSearchValue={setSearchValue} />
      <MoviesList searchValue={searchValue} />
    </div>
  );
};

export default App;
