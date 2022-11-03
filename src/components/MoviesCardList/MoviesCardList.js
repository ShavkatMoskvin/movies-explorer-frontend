import React from "react";

import './MoviesCardList.css'

import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({cards}) {
    return (
        <section className="movies-card-list">
            <div className="movies-card-list__box">
                <ul className="movies-card__list">
                    {cards.map((card) => (
                        <MoviesCard key={card.id} card={card} />
                    ))}
                </ul>
                <button type="button" className="movies-card-list__box-button">
                    Ещё
                </button>
            </div>
        </section>
    );
}