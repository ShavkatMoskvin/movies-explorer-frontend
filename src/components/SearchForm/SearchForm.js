import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"

import './SearchForm.css';

export default function SearchForm(props) {
  const [value, setValue] = useState('')
  const { pathname } = useLocation();

  const filteredMovies = props.cards.filter(movie => {
      return movie.nameRU.toLowerCase().includes(value.toLowerCase())
  })

  return (
    <section className="search-form">
      <form className="search-form__box" onSubmit={e => {
        e.preventDefault()
        props.submit(filteredMovies)
      }}>
        <div className="search-form__icon"></div>
        <input
          onChange={(e) => setValue(e.target.value)}
          className="search-form__search_input"
          type="text"
          placeholder="Фильм"
          name="film"
        />
        <button className="search-form__search_button"></button>
      </form>

      <div className="search-form__switch">

        <label className="search-form__switch_label">
          <input onChange={props.checkbox} className="search-form__switch_input" type="checkbox"></input>
          <div className="search-form__switch_div"></div>
        </label>

        <p className="search-form__switch_text">Короткометражки</p>
      </div>
    </section>
  );
}