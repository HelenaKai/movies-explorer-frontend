import React from 'react';
import '../Form/Form.css';
import Form from '../Form/Form';

function Login(onSubmit) {

  const handleInputChange = (event) => {
    const input = event.target;
    const errorSpan = input.nextElementSibling; // Следующий элемент после инпута – это span с ошибкой
    if (!input.validity.valid) {
        errorSpan.textContent = input.validationMessage;
    } else {
        errorSpan.textContent = '';
    }
};


  return (
    <>
      <Form
        name="login" 
        welcome="Рады видеть!"
        button="Войти"
        question="Ещё не зарегистрированы?"
        path="/signup"
        link="Регистрация"
        noValidate      
      >
        <label className="form__item">
          E-mail
          <input
            className="form__input"
            name="email"
            id="email-input"
            type="email"
            onInput={handleInputChange}
            placeholder="Введите email"
            autoComplete="off"
            required
          />
          <span className="form__input-error"></span>
        </label>

        <label className="form__item">
          Пароль
          <input
            className="form__input"
            name="password"
            id="password-input"
            type="password"
            minLength="2"
            maxLength="30" 
            onInput={handleInputChange}
            placeholder="Введите пароль"
            autoComplete="off"
            required
          />
          <span className="form__input-error"></span>
        </label>
      </Form>
    </>
  );
}

export default Login;
