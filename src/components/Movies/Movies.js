import React, { useState } from 'react';

import './Movies.css'

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

export default function Movies(props) {

    const [movies, setMovies] = useState('')
    const [search, setSearch] = useState(false)
    const [shortedMovies, setShortedMovies] = useState(false)
    const [valueM, setValueM] = useState('')
    const [currentVisibleOnButtonClick, setVisibleOnButtonClick] = React.useState(0)
    const [checked, setChecked] = useState()

    function searchMovie(value) {
        const searchedMovies = props.cards.filter((movie) => movie.nameRU.toLowerCase().includes(valueM.toLowerCase()))
        const foundMovies = value ? searchedMovies.filter((item) => item.duration <= 60) : searchedMovies
        localStorage.setItem('foundMovies', JSON.stringify(foundMovies))
        localStorage.setItem('searchMovieName', valueM)
        localStorage.setItem('shortFilms', value)

    }
    const submit = (e) => {
        setMovies(e)
        setSearch(true)
        searchMovie(shortedMovies)
        setVisibleOnButtonClick(0)
    }

    async function checkboxState(e) {
        const value = e.target.checked;
        setChecked(value)
        setShortedMovies(value)
        searchMovie(value)
        setVisibleOnButtonClick(0)

    }

    React.useEffect(() => {
        const v = localStorage.getItem('searchMovieName')
        setValueM(v)
        const savedMovies = JSON.parse(localStorage.getItem('foundMovies'))
        if (savedMovies) {
            setMovies(savedMovies)
            setSearch(true)
        }
    }, []);

    return (
        <section className="movies">
            <SearchForm cards={props.cards} submit={submit} checkbox={checkboxState} setValueM={setValueM} setChecked={setChecked} checked={checked} />
            <MoviesCardList cards={search ? movies : props.cards} shortedMovies={shortedMovies} setVisibleOnButtonClick={setVisibleOnButtonClick} currentVisibleOnButtonClick={currentVisibleOnButtonClick} />
        </section>
    );
}