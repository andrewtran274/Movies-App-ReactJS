import React from "react";
import Header from "./components/Header";
import "./App.css";
import MoviesList from "./components/MoviesList";

const App = () => {
  // const API_SEARCH = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&query=`;

  return (
    <div className="container">
      <Header />
      <MoviesList />
    </div>
  );
};

export default App;
