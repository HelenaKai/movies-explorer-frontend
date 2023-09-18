import React from "react";
import "./MoviesCard.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function MoviesCard({ card }) {
  const [isLiked, setIsLiked] = useState(false);
  const location = useLocation();

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const likeButtonClassName =
    location.pathname === "/saved-movies"
      ? "movie__button-delete"
      : `movie__like-button ${isLiked ? "movie__like-button_active" : ""}`;

  return (
    <li className="movie">
      <img className="movie__picture" src={card.image} alt={card.title} />

      <div className="movie__header">
        <h2 className="movie__title">{card.title}</h2>

        <button
          className={likeButtonClassName}
          type="button"
          onClick={handleLikeClick}
        ></button>
      </div>

      <p className="movie__duration">{card.length}</p>
    </li>
  );
}

export default MoviesCard;
