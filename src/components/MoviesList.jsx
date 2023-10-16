import React, { useEffect, useState } from "react";
import axios from "axios";
import CardMovie from "./CardMovie";

const API_KEY = "12382fd24de464c9617822243688dc23";
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

const MoviesList = ({ searchValue }) => {
  const API_SEARCH = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=${API_KEY}`;

  const [dataMovies, setDataMovies] = useState([]);

  const getDataMovies = async () => {
    try {
      const response = await axios.get(`${API_URL}`);
      const data = await response.data;
      setDataMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getDataMoviesSearch = async () => {
    try {
      const response = await axios.get(`${API_SEARCH}`);
      const data = await response.data;
      setDataMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataMovies();
  }, []);

  useEffect(() => {
    if (searchValue == "") {
      getDataMovies();
    } else {
      getDataMoviesSearch();
    }
  }, [searchValue]);
  return (
    <div className="movie-list">
      <div className="heading">Best Of Movies</div>
      <div className="movies-list">
        {dataMovies.map((movie) => (
          <CardMovie key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
