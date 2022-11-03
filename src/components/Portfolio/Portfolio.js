import React from 'react';

import './Portfolio.css'

export default function Portfolio() {
    return (
        <section class="portfolio">
            <div class="portfolio__container">
                <h2 class="portfolio__title">Портфолио</h2>
                <ul class="portfolio__projects-list">
                    <li class="portfolio__projects-item"><a href="https://github.com/ShavkatMoskvin/how-to-learn" rel="noreferrer" class="portfolio__link">Статичный сайт</a></li>
                    <li class="portfolio__projects-item"><a href="https://github.com/ShavkatMoskvin/russian-travel" rel="noreferrer" class="portfolio__link">Адаптивный сайт</a></li>
                    <li class="portfolio__projects-item"><a href="https://github.com/ShavkatMoskvin/react-mesto-api-full" rel="noreferrer" class="portfolio__link">Одностраничное приложение</a></li>
                </ul>
            </div>
        </section>
    )
}