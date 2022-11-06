import React from 'react';

import './AboutProject.css'

export default function AboutProject() {
    return (
        <section className='about-project'>
            <div className='about-project__container'>
                <h2 className='about-project__title'>O проекте</h2>
                <div className='about-project__stroke-landing'></div>
                <ul class="about-project__list">
                    <li class="about-project__item">
                        <h3 class="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
                        <p class="about-project__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </li>
                    <li class="about-project__item">
                        <h3 class="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
                        <p class="about-project__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </li>
                </ul>
                <div class="about-project__scheme"><div class="about-project__backend">
                    <span class="about-project__backend-duration">1 неделя</span>
                    <span class="about-project__scheme-title">Back-end</span>
                </div><div class="about-project__frontend">
                        <span class="about-project__frontend-duration">4 недели</span>
                        <span class="about-project__scheme-title">Front-end</span>
                    </div>
                </div>
            </div>
        </section>
    )
}