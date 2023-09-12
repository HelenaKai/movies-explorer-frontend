import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import cards from "../../utils/FilmsDB";
import "./MoviesCardList.css";
import Preloader from "../Preloader/Preloader";

function MoviesCardList() {
  const [isLoading, setLoading] = React.useState(false);

  const handlePreloader = () => {
    setLoading(true);
  };

  return (
    <section className="cards">
      <ul className="cards__grid">
        {cards.map((card) => (
          <MoviesCard key={card.id} card={card} />
        ))}
      </ul>
      {isLoading ? (<Preloader />) : (
        <div className="cards__button-container">
          <button
            className="cards__loader-button"
            type="button"
            onClick={handlePreloader}
          >
            Ещё
          </button>
        </div>
      )}
    </section>
  );
}

export default MoviesCardList;
