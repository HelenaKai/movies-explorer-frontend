import React from 'react';
import '../Form/Form.css';
import Form from '../Form/Form';

function Login() {
  return (
    <>
      <Form
        welcome="Рады видеть!"
        button="Войти"
        question="Ещё не зарегистрированы?"
        path="/signup"
        link="Регистрация"
      >
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
          <span className="form__input-error">
            Адрес электронной почты должен содержать символ "@".
          </span>
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
          <span className="form__input-error">Введите пароль</span>
        </label>
      </Form>
    </>
  );
}

export default Login;
