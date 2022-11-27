import React from "react";

import './SavedMovies.css'

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import api from "../../utils/MainApi.js"

export default function SavedMovies() {
    const [movies, setMovies] = React.useState([])
    const [savedMovies, setSavedMovies] = React.useState([])
    const [search, setSearch] = React.useState(false)
    const [shortedMovies, setShortedMovies] = React.useState(false)
    const [currentVisibleOnButtonClick, setVisibleOnButtonClick] = React.useState(0)
    const [valueM, setValueM] = React.useState('')
    const [checked, setChecked] = React.useState()

    React.useEffect(() => {
        api.getMovies()
            .then(data => setSavedMovies(data))

    }, [])
    
    function searchMovie(value) {
        const searchedMovies = savedMovies.filter((movie) => movie.nameRU.toLowerCase().includes(valueM.toLowerCase()))
        const foundMovies = value ? searchedMovies.filter((item) => item.duration <= 60) : searchedMovies
        localStorage.setItem('foundSavedMovies', JSON.stringify(foundMovies))
        localStorage.setItem('searchSavedMovieName', valueM)
        localStorage.setItem('shortSavedFilms', value)
    }


    const checkboxState = (e) => {
        const value = e.target.checked;
        setChecked(value)
        setShortedMovies(value)
        searchMovie(value)
    }

    const submit = (e) => {
        setMovies(e)
        setSearch(true)
        searchMovie(shortedMovies)
    }

    React.useEffect(() => {
        const v = localStorage.getItem('searchSavedMovieName')
        setValueM(v)
        const savedMovies = JSON.parse(localStorage.getItem('foundSavedMovies'))
        if (savedMovies) {
            setMovies(savedMovies)
            setSearch(true)
        }

    }, []);

    return (
        <section className="savedMovies">
            <SearchForm cards={savedMovies} submit={submit} checkbox={checkboxState} valueM={valueM} setValueM={setValueM} checked={checked} setChecked={setChecked} />
            <MoviesCardList cards={search ? movies : savedMovies} shortedMovies={shortedMovies} setVisibleOnButtonClick={setVisibleOnButtonClick} currentVisibleOnButtonClick={currentVisibleOnButtonClick} />
        </section>
    );
}