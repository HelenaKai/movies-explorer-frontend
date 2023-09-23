import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import cards from "../../utils/FilmsDB";
import "./MoviesCardList.css";

function MoviesCardList() {

  return (
    <section className="movies-list">
      <ul className="movies-list__grid">
        {cards.map((card) => (
          <MoviesCard key={card.id} card={card} />
        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
