import React from "react";
import "./MoviesCard.css";
import { durationConverterTime } from "../../utils/utils";

function MoviesCard({
  card,
  isSavedFilms,
  handleLikeFilm,
  onDeleteCard,
  saved,
  savedMovies,
}) {
  function onCardClick() {
    if (saved) {
      onDeleteCard(savedMovies.filter((m) => m.movieId === card.id)[0]);
    } else {
      handleLikeFilm(card);
    }
  }

  function onDelete() {
    console.log("delete card");
    console.log(card);
    onDeleteCard(card);
  }

  const cardLikeButton = `${
    saved
      ? "movie__like-button movie__like-button_active"
      : "movie__like-button"
  }`;

  return (
    <li key={card.id} className="movie">
      <a href={card.trailerLink} target="_blank" rel="noreferrer">
        <img
          className="movie__picture"
          src={
            isSavedFilms
              ? card.image
              : `https://api.nomoreparties.co/${card.image.url}`
          }
          alt={card.nameRU}
        />
      </a>
      <div className="movie__header">
        <h2 className="movie__title">{card.nameRU}</h2>

        {isSavedFilms ? (
          <button
            type="button"
            className="movie__button-delete"
            onClick={onDelete}
          ></button>
        ) : (
          <button
            type="button"
            className={cardLikeButton}
            onClick={onCardClick}
          ></button>
        )}
      </div>

      <p className="movie__duration"> {durationConverterTime(card.duration)}</p>
    </li>
  );
}

export default MoviesCard;


