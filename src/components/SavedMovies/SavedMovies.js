import React from "react";

import './SavedMovies.css'

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import api from "../../utils/MainApi.js"

export default function SavedMovies() {
    const [movies, setMovies ] = React.useState([])
    const [savedMovies, setSavedMovies ] = React.useState([]) 
    const [search, setSearch] = React.useState(false)
    const [shortedMovies, setShortedMovies] = React.useState(false)

    React.useEffect(() => {
        api.getMovies()
            .then(data => setSavedMovies(data))   
    }, [])

    const checkboxState = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        if (value === true) { setShortedMovies(true)}
        else (setShortedMovies(false))
    }
    
    const submit = (e) => {
        setMovies(e)
        setSearch(true)
    }

    return (
        <section className="savedMovies">
            <SearchForm cards={savedMovies} submit={submit} checkbox={checkboxState} />
            <MoviesCardList cards={search ? movies : savedMovies} shortedMovies={shortedMovies} />
        </section>
    );
}