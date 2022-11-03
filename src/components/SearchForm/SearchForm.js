import React from "react";

import './SearchForm.css';

export default function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__box">
        <div className="search-form__icon"></div>
        <input
          className="search-form__search_input"
          type="text"
          placeholder="Фильм"
          name="film"
          required
        />
        <button className="search-form__search_button" type="submit"></button>
      </form>
      
      <div className="search-form__switch">

        <label className="search-form__switch_label">
          <input className="search-form__switch_input" type="checkbox"></input>
          <div className="search-form__switch_div"></div>
        </label>

        <p className="search-form__switch_text">Короткометражки</p>
      </div>
    </section>
  );
}