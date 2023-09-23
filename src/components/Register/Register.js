import React from 'react';
import '../Form/Form.css';
import Form from '../Form/Form';

function Register(props) {

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
      <main>
        <Form
          name="register"
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
              placeholder="Введите имя"
              minLength="2"
              maxLength="30"
              required
              onInput={handleInputChange}

            />
            <span className="form__input-error"></span>
          </label>

          <label className="form__item">
            E-mail
            <input
              name="email"
              className="form__input"
              type="email"
              id="email-input"
              placeholder="Введите email"
              required
              onInput={handleInputChange}
            />
            <span className="form__input-error"></span>
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
              onInput={handleInputChange}
            />
            <span className="form__input-error"></span>
          </label>
        </Form>
      </main>
    </>
  );
}

export default Register;
