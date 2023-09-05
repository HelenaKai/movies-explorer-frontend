import React from "react";
import "./MoviesCard.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function MovieCard({ card }) {
  const [isLiked, setIsLiked] = useState(false);
  const location = useLocation();

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const likeButtonClassName =
    location.pathname === "/saved-movies"
      ? "card__button-delete"
      : `card__like-button ${isLiked ? "card__like-button_active" : ""}`;

  return (
    <li className="card">
      <img className="card__image" src={card.image} alt={card.title}></img>
      <div className="card__element">
        <div className="card__info">
          <h2 className="card__title">{card.title}</h2>
          <p className="card__length">{card.length}</p>
        </div>
        <button
          className={likeButtonClassName}
          type="button"
          aria-label="Сохранить"
          onClick={handleLikeClick}
        ></button>
      </div>
    </li>
  );
}

export default MovieCard;
