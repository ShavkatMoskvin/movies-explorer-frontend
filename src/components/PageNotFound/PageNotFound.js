import React from 'react';
import { Link } from 'react-router-dom';

import './PageNotFound.css';

export default function PageNotFound() {
    return (
        <main class="page-not-found">
            <h1 class="page-not-found__title">404</h1>
            <p class="page-not-found__text">Страница не найдена</p>
            <Link to="/"><button class="page-not-found__button">Назад</button></Link>
        </main>
    )
}