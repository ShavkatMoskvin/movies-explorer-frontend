import './MoviesCard.css';
import React from 'react';
import { useLocation } from 'react-router-dom';
import api from '../../utils/MainApi.js';

export default function MoviesCard({ card, savedCards, setSavedCards }) {
  const [favorite, setFavorite] = React.useState(false);
  const [savedCard, setSavedCard] = React.useState({})
  const [deletedCard, setDeletedCard] = React.useState(false)
  const { pathname } = useLocation();

  function handleFavoriteToogle() {
    const objFilm = {
      nameRU: card.nameRU,
      nameEN: card.nameEN,
      image: 'https://api.nomoreparties.co' + card.image.url,
      trailerLink: card.trailerLink,
      thumbnail: 'https://api.nomoreparties.co' + card.image.url,
      movieId: card.id,
      country: card.country || 'Неизвестно',
      director: card.director,
      duration: card.duration,
      year: card.year,
      description: card.description,

    };
    if (favorite === false) {
      api.addMovie(objFilm)
        .then(() => { setFavorite(true); })
        .catch(err => console.log(err));
    } else {
      api.deleteMovie(savedCard._id)
        .then(() => { setFavorite(false); })
        .catch((err) => console.log(err))
    }

    api.getMovies()
      .then((movies) => setSavedCards(movies))
      .catch((error) => console.log(error));
  }

  function getDuration(mins) {
    return `${Math.floor(mins / 60)}ч ${mins % 60}м`;
  }

  function handleDelete() {
    api.deleteMovie(card._id)
      .then(() => {
        setDeletedCard(true);
        api.getMovies()
          .then((movies) => setSavedCards(movies))
          .catch((error) => console.log(error.status, error.statusText));
      })
      .catch((err) => console.log(err.status, err.statusText));
  }

  React.useEffect(() => {
    if (pathname !== '/saved-movies') {
      const savedFilm = savedCards.filter((obj) => {
        return obj.movieId == card.id;
      });
      if (savedFilm.length > 0) {
        setFavorite(true);
      } else {
        setFavorite(false);
      }
    }

    savedCards.map((movie) => {
      if (movie.movieId == card.id) {
        setSavedCard(movie)
      }
    })
  }, [pathname, savedCards, card.id]);

  return (
    <li className={deletedCard === true ? "card__deleted" : "card"}>
      <div className="card__element">
        <div>
          <p className="card__title">{card.nameRU}</p>
          <p className="card__duration">{getDuration(card.duration)}</p>
        </div>
        <div className="card__buttons">
          {pathname === '/savedMovies' ? (
            <button type="button" className="card__button card__button_delete" onClick={handleDelete} />
          ) : (
            <button
              type="button"
              className={`card__button card__button${favorite ? '_active' : '_inactive'}`}
              onClick={handleFavoriteToogle}
            />
          )}
        </div>
      </div>

      <img src={pathname === '/savedMovies' ? `${card.image}` : `https://api.nomoreparties.co${card.image.url}`} alt={card.nameRU} className="card__image"></img>
    </li>
  );
};