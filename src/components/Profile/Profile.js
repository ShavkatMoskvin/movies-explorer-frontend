import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from '../../utils/MainApi'
import "./Profile.css"

export default function Profile({ currentUser, signOut }) {
  const [name, enterName] = useState(currentUser.name);
  const [email, enterEmail] = useState(currentUser.email);
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    enterName(currentUser.name)
    enterEmail(currentUser.email)
  }, [currentUser])

  function handleChangeProfileName(evt) {
    enterName(evt.target.value);
  }

  function handleChangeProfileEmail(evt) {
    enterEmail(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    api.setUserInfo({ name, email })
      .catch((err) => {
        setErrorMessage(`Oшибка: ${err.status}. Что-то пошло не так!`)
      });
  };

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
          <span className="profile__error">{errorMessage}</span>
          <button
            className="profile__button"
            type="submit"
            aria-label=""
          >
            Редактировать
          </button>
        </form>
        <button onClick={signOut} className={"profile__button-logout"}>
          Выйти из аккаунта
        </button>
      </div>
    </>
  );
}