import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar.js';

import './Header.css'

export default function Header({ loggedIn }) {
    return (
        <header className='header'>
            <div className='header__container'>
                <Link to="/">
                    <div className='header__img' src="../../images/logo.svg"></div>
                </Link>
                {!loggedIn &&
                    <div className='header__item'>
                        <a href='sign-up' className='header__link'>Регистрация</a>
                        <a href='sign-in' className='header__link header__link-green'>Войти</a>
                    </div>}
                {loggedIn &&
                    <>

                        <div className="header__item nav">
                            <div>
                                <Link className="header__link header__link-media" to="/movies">
                                    Фильмы
                                </Link>
                                <Link className="header__link header__link-media" to="/savedMovies">
                                    Сохраненные фильмы
                                </Link>
                            </div>
                            <Link className="header__acc-button header__link-media" type="button" to="/profile">
                                Аккаунт
                            </Link>
                        </div>
                        <NavBar></NavBar>
                    </>}
            </div>
        </header>
    )
}