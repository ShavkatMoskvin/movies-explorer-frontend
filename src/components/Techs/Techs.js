import React from 'react';

import './Techs.css'

export default function Techs() {
    return (
        <section className='techs'>
            <div className='techs__container'>
                <h2 className='techs__title'>Технологии</h2>
                <div className='techs__stroke-landing'></div>
                <h2 className='techs__subtitle'>7 технологий</h2>
                <p className='techs__description'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <ul class="techs__stack">
                    <li class="techs__stack-item">
                        <p class="techs__stack-name">HTML</p>
                    </li>
                    <li class="techs__stack-item">
                        <p class="techs__stack-name">CSS</p>
                    </li>
                    <li class="techs__stack-item">
                        <p class="techs__stack-name">JS</p>
                    </li>
                    <li class="techs__stack-item">
                        <p class="techs__stack-name">React</p>
                    </li>
                    <li class="techs__stack-item">
                        <p class="techs__stack-name">Git</p>
                    </li>
                    <li class="techs__stack-item">
                        <p class="techs__stack-name">Express.js</p>
                    </li>
                    <li class="techs__stack-item">
                        <p class="techs__stack-name">mongoDB</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}