import React from 'react';

import './Navtab.css';

export default function Navtab() {
  return (
    <section className='navtab'>
      <a href='#about-project' className='navtab__link'>
        О проекте
      </a>
      <a href='#techs' className='navtab__link'>
        Технологии
      </a>
      <a href='#about-me' className='navtab__link'>
        Студент
      </a>
    </section>
  );
}