import { useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.css"

export default function Profile(props) {
  const [name, enterName] = useState("");
  const [email, enterEmail] = useState("");

  function handleChangeProfileName(evt) {
    enterName(evt.target.value);
  }

  function handleChangeProfileEmail(evt) {
    enterEmail(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.getProfile(name, email);
  }

  return (
    <>
      <div className="profile">
        <h2 className="profile__title">Привет, {name}</h2>
        <form className="profile__form" onSubmit={handleSubmit}>
          <div className="profile__input">
            <p className="profile__placeholder">Имя</p>
            <input
              id="name"
              type="name"
              name="name"
              className="profile__info"
              value={name}
              placeholder=""
              minLength="3"
              maxLength="40"
              required
              onChange={handleChangeProfileName}
            />
          </div>
          <div className="profile__input">
            <p className="profile__placeholder">E-mail</p>
            <input
              id="email"
              type="email"
              name="email"
              className="profile__info"
              value={email}
              placeholder=""
              minLength="5"
              maxLength="40"
              required
              onChange={handleChangeProfileEmail}
            />
          </div>
          <Link
            className="profile__button"
            type="submit"
            aria-label=""
            to="/"
          >
            Редактировать
          </Link>
        </form>
        <Link className={"profile__button-logout"} to="/">
          Выйти из аккаунта
        </Link>
      </div>
    </>
  );
}