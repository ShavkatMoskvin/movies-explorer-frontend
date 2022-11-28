import React from 'react';

import './AboutMe.css'

export default function AboutProject() {
    return (
        <section className='about-me'>
            <div className='about-me__container'>
                <h2 className='about-me__title'>Студент</h2>
                <div className='about-me__stroke-landing'></div>
                <div class="about-me__bio-container">
                    <div class="about-me__bio">
                        <h3 class="about-me__name">Шавкат</h3>
                        <p class="about-me__age">Фронтенд-разработчик, 30 лет</p>
                        <p class="about-me__text">Я родился и живу в Пензе, закончил факультет экономики СГУ. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                        <ul class="about-me__socials">
                            <li><a href="https://vk.com/shafkat0" target="_blank" rel="noreferrer" class="about-me__social-link">ВКонтакте</a></li>
                            <li><a href="https://github.com/ShavkatMoskvin" target="_blank" rel="noreferrer" class="about-me__social-link">Github</a></li>
                        </ul>
                    </div>
                    <div className='about-me__img' alt='фотография студента'></div>
                </div>
            </div>
        </section>
    )
}