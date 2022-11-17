import React from 'react';
import isEmail from 'validator/es/lib/isEmail';

import './Register.css';

export default function Register({register, errorMessage}) {
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
        register(values);
    };
    return (
        <main class="register">
            <form class="register__form" name="register" onSubmit={handleSubmit} novalidate=""><a class="register__link" href="/">
                <div alt="Логотип" class="register__img"/>
            </a>
                <h1 class="register__title">Добро пожаловать!</h1>
                <div class="register__labels-container">
                    <label class="register__label">
                        <span class="register__label-text">Имя</span>
                        <input onChange={handleInputChange} name="name" class={`register__input ${errors.text ? 'register__error_input' : ''}`} type="name" required minlength="2" maxlength="30" pattern="^[A-Za-zА-Яа-яЁё /s -]+$"/><span class="register__error">{errors.text}</span>
                    </label>
                    <label class="register__label">
                        <span class="register__label-text">E-mail</span>
                        <input onChange={handleInputChange} name="email" class={`register__input ${errors.email ? 'register__error_input' : ''}`} type="email" required /><span class="register__error">{errors.email}</span>
                    </label>
                    <label class="register__label">
                        <span class="register__label-text">Пароль</span>
                        <input onChange={handleInputChange} name="password" class={`register__input ${errors.password ? 'register__error_input' : ''}`} type="password" minlength="8" required /><span class="register__error">{errors.password}</span>
                        <span class="register__error">{errorMessage}</span> 
                    </label>
                </div>
                <button disabled={!isValid} className="register__submit-button" type="submit">
                    Зарегистрироваться
                </button>
                <span class="register__support">Уже зарегистрированы?&nbsp;<a class="register__link" href="/sign-in">Войти</a></span>
            </form>
        </main>
    )
}