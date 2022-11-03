import React from 'react';
import { Link } from 'react-router-dom';

import './Login.css'

export default function Login() {
    return (
        <section class="login">
            <form class="login__form" name="login" novalidate="">
                <a class="login__link" href="/">
                <div class="login__img" src="../../images/logo.svg"></div>
                </a>
                <h1 class="login__title">Рады видеть!</h1>
                <div class="login__labels-container">
                    <label class="login__label">
                        <span class="login__label-text">E-mail</span>
                        <input name="email" class="login__input " type="email" required="" />
                        <span class="login__error"></span>
                    </label>
                    <label class="login__label">
                        <span class="login__label-text">Пароль</span>
                        <input name="password" class="login__input " type="password" required="" />
                        <span class="login__error"></span>
                    </label>
                </div>
                <Link className="login__submit-button" type="submit" to="/movies">
                    Войти
                </Link>
                <span class="login__support">Ещё не зарегистрированы?&nbsp;<a class="login__link" href="/sign-up">Регистрация</a></span>
            </form>
        </section>
    )
}