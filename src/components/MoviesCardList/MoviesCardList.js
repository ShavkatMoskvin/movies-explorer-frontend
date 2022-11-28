import React from "react";
import { useLocation } from "react-router-dom";

import './MoviesCardList.css'

import MoviesCard from "../MoviesCard/MoviesCard";
import api from "../../utils/MainApi";

export default function MoviesCardList({ cards, shortedMovies, setVisibleOnButtonClick, currentVisibleOnButtonClick }) {
    const [windowWidth] = useWindowSize();
    const [numberOfFilms, setNumberOfFilms] = React.useState(0);
    const [savedCards, setSavedCards] = React.useState([])
    const shortMovies = cards.filter(card => card.duration < 60);
    const { pathname } = useLocation();

    function useWindowSize() {
        const [size, setSize] = React.useState([0, 0]);

        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }

        React.useLayoutEffect(() => {
            updateSize();
            window.addEventListener('resize', updateSize);
            return () => {
                window.removeEventListener('resize', updateSize);
            };
        }, []);

        return size;
    }

    function calculateCards(currentWidth) {
        if (currentWidth >= 1670) {
            return {
                visibleCards: 24,
                visibleOnButtonClick: 4,
            };
        }
        if (currentWidth >= 1280) {
            return {
                visibleCards: 12,
                visibleOnButtonClick: 3,
            };
        }
        if (currentWidth >= 630) {
            return {
                visibleCards: 8,
                visibleOnButtonClick: 2,
            };
        }
        return {
            visibleCards: 5,
            visibleOnButtonClick: 2,
        };
    }

    const renderNewCards = () => {
        const { visibleOnButtonClick } = calculateCards(windowWidth);
        setVisibleOnButtonClick(currentVisibleOnButtonClick + visibleOnButtonClick);
    };

    React.useEffect(() => {
        api.getMovies()
            .then((movies) => setSavedCards(movies))
            .catch((error) => console.log(error.status, error.statusText));
    }, [])

    React.useEffect(() => {
        const { visibleCards } = calculateCards(windowWidth);
        setNumberOfFilms(visibleCards)
    }, [windowWidth]);

    console.log(numberOfFilms, currentVisibleOnButtonClick)

    return (
        <section className="movies-card-list">
            <div className="movies-card-list__box">
                <ul className="movies-card__list">
                    {(pathname !== '/savedMovies' ? <>
                        {(shortedMovies ? shortMovies.slice(0, numberOfFilms + currentVisibleOnButtonClick) : cards.slice(0, numberOfFilms + currentVisibleOnButtonClick)).map((card) => (
                            <MoviesCard key={card.id} setSavedCards={setSavedCards} savedCards={savedCards} card={card} />
                        ))}
                    </> : <>
                        {(shortedMovies ? shortMovies : cards).map((card) => (
                            <MoviesCard key={card.id} setSavedCards={setSavedCards} savedCards={savedCards} card={card} />
                        ))}
                    </>
                    )}

                </ul>
                {(pathname !== '/savedMovies' && (numberOfFilms + currentVisibleOnButtonClick) < cards.length ?
                    <button onClick={renderNewCards} type="button" className="movies-card-list__box-button">
                        Ещё
                    </button> : '')}
            </div>
        </section>
    );
}