import React from "react";

import './SavedMovies.css'

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import cards from "../../utils/Movies2"

export default function SavedMovies() {
    return (
        <section className="savedMovies">
            <SearchForm />
            <MoviesCardList cards={cards} />
        </section>
    );
}