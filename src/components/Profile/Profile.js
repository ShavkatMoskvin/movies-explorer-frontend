import { useState, useEffect } from "react";
import api from '../../utils/MainApi'
import isEmail from 'validator/es/lib/isEmail';
import "./Profile.css"

export default function Profile({ currentUser, signOut }) {
  const [name, enterName] = useState(currentUser.name);
  const [email, enterEmail] = useState(currentUser.email);
  const [errorMessage, setErrorMessage] = useState();
  const [successMessage, setSuccessMessage] = useState()
  const [isValid, setIsValid] = useState(true)

  useEffect(() => {
    api.getUserInfo()
      .then((user) => {
        enterName(user.name)
        enterEmail(user.email)
      })
    console.log()
  }, [currentUser])

  const handleInputChange = (e) => {
    const target = e.target
    const type = e.target.name
    const value = e.target.value

    if (target === 'email') {
      if (!isEmail(value)) {
        target.setCustomValidity(validationEmailErrorMessage);
      } else {
        target.setCustomValidity('');
      }
    }
    setIsValid(target.closest('form').checkValidity());
    if (type === "name") {
      enterName(value)
    } else {
      enterEmail(value)
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    api.setUserInfo({ name, email })
      .then(() => {
        setSuccessMessage('Данные изменены!')
        setTimeout(() => setSuccessMessage(''), 5000)
      })
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
            />
          </div>
          <span className="profile__success">{successMessage}</span>
          <span className="profile__error">{errorMessage}</span>
          <button
            disabled={!isValid}
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