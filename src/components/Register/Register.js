import React from 'react';
import { Link } from 'react-router-dom';

import './Register.css';

export default function Register() {
    return (
        <main class="register">
            <form class="register__form" name="register" novalidate=""><a class="register__link" href="/">
                <div alt="Логотип" class="register__img"/>
            </a>
                <h1 class="register__title">Добро пожаловать!</h1>
                <div class="register__labels-container">
                    <label class="register__label">
                        <span class="register__label-text">Имя</span>
                        <input name="name" class="register__input" type="text" required="" minlength="2" maxlength="30" pattern="^[A-Za-zА-Яа-яЁё /s -]+$"/><span class="register__error">
                        </span>
                    </label>
                    <label class="register__label">
                        <span class="register__label-text">E-mail</span>
                        <input name="email" class="register__input " type="email" required="" /><span class="register__error"></span>
                    </label>
                    <label class="register__label">
                        <span class="register__label-text">Пароль</span>
                        <input name="password" class="register__input register__error-input" type="password" required="" /><span class="register__error">Что-то пошло не так...</span>
                    </label>
                </div>
                <Link className="register__submit-button" type="submit" to="/movies">
                    Зарегистрироваться
                </Link>
                <span class="register__support">Уже зарегистрированы?&nbsp;<a class="register__link" href="/sign-in">Войти</a></span>
            </form>
        </main>
    )
}