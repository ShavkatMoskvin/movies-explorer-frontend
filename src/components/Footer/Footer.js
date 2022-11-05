import React from 'react';

import './Footer.css'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
                <div class="footer__navigation">
                    <p class="footer__copyright">©2022</p>
                    <ul class="footer__links-list">
                        <li><a href="https://practicum.yandex.ru/" class="footer__link">Яндекс.Практикум</a></li>
                        <li><a href="https://github.com/ShavkatMoskvin" class="footer__link">Github</a></li>
                        <li><a href="https://vk.com/shafkat0" class="footer__link">ВКонтакте</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}