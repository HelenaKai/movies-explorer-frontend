import React from 'react';
import '../Form/Form.css';
import Form from '../Form/Form';

function Register() {

  return (
    <>
      <Form
        welcome="Добро пожаловать!"
        button="Зарегистрироваться"
        question="Уже зарегистрированы?"
        path="/signin"
        link="Войти"
      >
        <label className="form__item">
          Имя
          <input
            name="name"
            className="form__input"
            type="text"
            id="name-input"
            defaultValue="Елена"
            minLength="2"
            maxLength="30"
            required
        
          />
          <span className="form__input-error">Заполните поле "Имя".</span>
        </label>

        <label className="form__item">
          E-mail
          <input
            name="email"
            className="form__input"
            type="email"
            id="email-input"
            defaultValue="testmail@yandex.ru"
            required
          />
          <span className="form__input-error">Адрес электронной почты должен содержать символ "@".</span>
        </label>

        <label className="form__item">
          Пароль
          <input
            name="password"
            className="form__input"
            type="password"
            id="password-input"
            defaultValue=""
            minLength="2"
            maxLength="30"
            placeholder="Введите пароль" 
            required
          />
          <span className="form__input-error">Заполните поле "Пароль".</span>
        </label>
      </Form>
    </>
  );
}

export default Register;
