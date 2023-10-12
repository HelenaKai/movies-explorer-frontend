import React, { useEffect, useContext, useState } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { EMAIL_REGEX, NAME_REGEX } from "../../utils/constants";
import useForm from "../../hooks/useForm";
import "./Profile.css";

function Profile({ isLoading, signOut, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);

  const { inputValues, errorMessages, handleChange, isValid, resetForm } =
    useForm();

  const [isLastValues, setIsLastValues] = useState(false);

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser);
    }
  }, [currentUser, resetForm]);

  function submitUserInfo(event) {
    event.preventDefault();
    onUpdateUser({
      name: inputValues.name,
      email: inputValues.email,
    });
  }

  useEffect(() => {
    if (
      currentUser.name === inputValues.name &&
      currentUser.email === inputValues.email
    ) {
      setIsLastValues(true);
    } else {
      setIsLastValues(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValues]);

  return (
    <>
      <main className="profile">
        <div className="profile__container">
          <h1 className="profile__welcome">Привет, {currentUser.name}!</h1>

          <form
            className="profile__form"
            name="profile"
            id="form"
            onSubmit={submitUserInfo}
            noValidate
          >
            <label className="profile__field">
              <span className="profile__label">Имя</span>

              <input
                className="profile__input"
                type="text"
                name="name"
                id="name-input"
                placeholder="Ваше имя"
                minLength="2"
                maxLength="35"
                required
                onChange={handleChange}
                pattern={NAME_REGEX}
                value={inputValues.name || ""}
                autoComplete="off"
              />
              <span className="profile__error">{errorMessages.name}</span>
            </label>

            <label className="profile__field">
              <span className="profile__label">E-mail</span>
              <input
                className="profile__input"
                type="email"
                name="email"
                id="email-input"
                placeholder="E-mail"
                minLength="2"
                maxLength="35"
                required
                onChange={handleChange}
                pattern={EMAIL_REGEX}
                value={inputValues.email || ""}
                autoComplete="off"
              />
              <span className="profile__error">{errorMessages.email}</span>
            </label>

            <button
              type="submit"
              disabled={!isValid ? true : false}
              className={
                !isValid || isLoading || isLastValues
                  ? "profile__button-save form__button-save_inactive"
                  : "profile__button-save"
              }
            >
              Редактировать
            </button>

            <button
              className="profile__logout hover-button"
              type="button"
              onClick={signOut}
            >
              Выйти из аккаунта
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Profile;
