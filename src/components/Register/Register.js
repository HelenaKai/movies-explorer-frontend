import React from "react";
import "../Form/Form.css";
import Form from "../Form/Form";
import useForm from "../../hooks/useForm";
import { EMAIL_REGEX } from "../../utils/constants";

function Register({ onRegister, isLoading, isLoggedIn }) {

  const { inputValues, errorMessages, handleChange, isValid, resetForm } = useForm();

  function submitUserInfo(event) {
    event.preventDefault();
    onRegister({
      name: inputValues.name,
      email: inputValues.email,
      password: inputValues.password,
    });
  }

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);


  return (
   
      <main>
        <Form
          name="register"
          welcome="Добро пожаловать!"
          button="Зарегистрироваться"
          question="Уже зарегистрированы?"
          path="/signin"
          link="Войти"
          onSubmit={submitUserInfo}
          isDisabledButton={!isValid}
          isLoading={isLoading}
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
              onChange={handleChange}
              value={inputValues.name || ""}
              required
            />
            <span className="form__input-error">{errorMessages.name}</span>
          </label>

          <label className="form__item">
            E-mail
            <input
              name="email"
              className="form__input"
              type="email"
              id="email-input"
              placeholder="Введите email"
              onChange={handleChange}
              pattern={EMAIL_REGEX}
              value={inputValues.email || ""}
              required
            />
            <span className="form__input-error">{errorMessages.email}</span>
          </label>

          <label className="form__item">
            Пароль
            <input
              name="password"
              className="form__input"
              type="password"
              id="password-input"
              minLength="2"
              maxLength="30"
              placeholder="Введите пароль"
              onChange={handleChange}
              value={inputValues.password || ""}
              required
            />
            <span className="form__input-error">{errorMessages.password}</span>
          </label>
        </Form>
      </main>
  
  );
}

export default Register;
