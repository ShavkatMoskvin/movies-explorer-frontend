import React, { useState } from 'react';

import './Movies.css'

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

export default function Movies(props) {
    const [movies, setMovies] = useState('')
    const [search, setSearch] = useState(false)
    const [shortedMovies, setShortedMovies] = useState(false)

    const submit = (e) => {
        setMovies(e)
        setSearch(true)
    }

    const checkboxState = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        if (value === true) { setShortedMovies(true) }
        else (setShortedMovies(false))
    }

    return (
        <section className="movies">
            <SearchForm cards={props.cards} submit={submit} checkbox={checkboxState} />
            <MoviesCardList cards={search ? movies : props.cards} shortedMovies={shortedMovies} />
        </section>
    );
}