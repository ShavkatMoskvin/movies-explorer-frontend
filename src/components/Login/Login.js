import React from 'react';
import isEmail from 'validator/es/lib/isEmail';

import './Login.css'

export default function Login({ login, errorMessage }) {
    const [values, setValues] = React.useState()
    const [isValid, setIsValid] = React.useState(false)
    const [errors, setErrors] = React.useState({})

    const handleInputChange = (e) => {
        const target = e.target
        const type = e.target.type
        const value = e.target.value

        if (target === 'email') {
            if (!isEmail(value)) {
                target.setCustomValidity(validationEmailErrorMessage);
            } else {
                target.setCustomValidity('');
            }
        }
        setIsValid(target.closest('form').checkValidity());
        setErrors({ ...errors, [type]: target.validationMessage });
        setValues({ ...values, [type]: value });
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        login(values);
    };
    return (
        <section class="login">
            <form class="login__form" name="login" novalidate="" onSubmit={handleSubmit}>
                <a class="login__link" href="/">
                    <div class="login__img" src="../../images/logo.svg"></div>
                </a>
                <h1 class="login__title">Рады видеть!</h1>
                <div class="login__labels-container">
                    <label class="login__label">
                        <span class="login__label-text">E-mail</span>
                        <input placeholder="Введите почту" onChange={handleInputChange} name="email" class={`login__input ${errors.email ? 'login__error_input' : ''}`} type="email" required="" />
                        <span class="login__error">{errors.email}</span>
                    </label>
                    <label class="login__label">
                        <span class="login__label-text">Пароль</span>
                        <input placeholder="Введите пароль" onChange={handleInputChange} minlength="8" name="password" class={`login__input ${errors.password ? 'login__error_input' : ''}`} type="password" required="" />
                        <span class="login__error">{errors.password}</span>
                        <span class="login__error">{errorMessage}</span> 
                    </label>
                </div>
                <button disabled={!isValid} className="login__submit-button" type="submit">
                    Войти
                </button>
                <span class="login__support">Ещё не зарегистрированы?&nbsp;<a class="login__link" href="/sign-up">Регистрация</a></span>
            </form>
        </section>
    )
}