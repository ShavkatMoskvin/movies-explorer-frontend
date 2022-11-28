import React from 'react';
import './NavBar.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    const [showItems, setShowItems] = useState(false);

    const handleToggleMenu = () => setShowItems(!showItems);

    return (<>
        <div onClick={handleToggleMenu} className={`navbar ${showItems ? 'active' : ''}`}>
            <div className={`navbar__slider ${showItems ? 'active' : ''} `}>
                <div className="navbar__links">
                    <div className='navbar__container'>
                        <Link className="navbar__link" to="/">
                            Главная
                        </Link>
                        <Link className="navbar__link " to="/movies">
                            Фильмы
                        </Link>
                        <Link className="navbar__link" to="/savedMovies">
                            Сохраненные фильмы
                        </Link>
                    </div>
                    <Link className="navbar__acc" type="button" to="/profile">
                        Аккаунт
                    </Link>
                </div>
            </div>
            <div>
                <span className='navbar_bar'></span>
                <span className='navbar_bar'></span>
                <span className='navbar_bar'></span>
            </div>
        </div>
    </>)
}