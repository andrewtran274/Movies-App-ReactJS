import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const API_IMG = "https://image.tmdb.org/t/p/w500";

const CardMovie = ({
  backdrop_path,
  overview,
  poster_path,
  title,
  vote_average,
}) => {
  return (
    <div className="card-movie">
      <img src={`${API_IMG}${poster_path}`} alt="" />
      <div className="card-info">
        <h2 className="title">{title}</h2>
        <p className="des">{overview}</p>
        <div className="rating">
          <AiFillStar className="icon" />
          <AiFillStar className="icon" />
          <AiFillStar className="icon" />
          <AiFillStar className="icon" />
          <AiOutlineStar className="icon" />

          <div className="rate">{vote_average}</div>
        </div>
      </div>
    </div>
  );
};

export default CardMovie;
