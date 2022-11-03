import './MoviesCard.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function MoviesCard({ card }) {
  const [favorite, setFavorite] = React.useState(false);

  function handleFavoriteToogle() {
    setFavorite(!favorite);
  }

  const { pathname } = useLocation();

  return (
    <li className="card">

      <div className="card__element">
        <div>
          <p className="card__title">{card.title}</p>
          <p className="card__duration">{card.duration}</p>
        </div>
        <div className="card__buttons">
          {pathname === '/saved-movies' ? (
            <button type="button" className="card__button card__button_delete" />
          ) : (
            <button
              type="button"
              className={`card__button card__button${favorite ? '_active' : '_inactive'}`}
              onClick={handleFavoriteToogle}
            />
          )}
        </div>
      </div>

      <img src={card.image} alt={card.title} className="card__image"></img>
    </li>
  );
};