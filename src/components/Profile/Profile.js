import "./Profile.css";
import React from "react";
import { useEffect, useState } from 'react';
import useForm from "../../hooks/useForm";

function Profile(props) {
  
  const [isEditProfile, setIsEditProfile] = useState(false);
  const { inputValues, errorMessages, isValid, handleChange, setInputValues } = useForm();

  const handleClickEditProfile = (evt) => {
    evt.preventDefault();
    setIsEditProfile(!isEditProfile);
  };

  useEffect(() => {
    setInputValues(
      { name: 'Елена', email: 'pochta@yandex.ru' }
      );
  },{});

  return (
    <>
      <main className="profile">
      <div className="profile__container">
        <h1 className="profile__welcome">Привет, Елена!</h1>

        <form className="profile__form" name="profile">
          <label className="profile__field">
            <span className="profile__label">Имя</span>

            <input
              className={`profile__input ${
                isEditProfile ? "profile__input_active" : ""
              } 
                ${errorMessages.name ? "profile__input_active-error" : ""}`}
              type="text"
              name="name"
              id="name-input"
              placeholder="Ваше имя"
              minLength="2"
              maxLength="35"
              required
              onChange={handleChange}
              value={inputValues.name || ""}
              autoComplete="off"
              disabled={!isEditProfile && "true"}
            />
            <span className="profile__error">{errorMessages.name}</span>
          </label>
          <label className="profile__field">
            <span className="profile__label">E-mail</span>
            <input
              className={`profile__input ${
                isEditProfile ? "profile__input_active" : ""
              } 
                  ${errorMessages.email ? "profile__input_active-error" : ""}`}
              type="email"
              name="email"
              id="email-input"
              placeholder="E-mail"
              minLength="2"
              maxLength="35"
              required
              onChange={handleChange}
              value={inputValues.email  || ""}
              autoComplete="off"
              disabled={!isEditProfile && "true"}
            />
            <span className="profile__error">{errorMessages.email}</span>
          </label>
          {isEditProfile && (
            <>
              <p className="profile__request-error">
                При обновлении профиля произошла ошибка.
              </p>
              <button
                className="profile__button-save hover-button"
                type="submit"
                disabled={!isValid ? true : false}
              >
                {isEditProfile ? "Сохранить" : "Редактировать"}
              </button>
            </>
          )}
          {!isEditProfile && (
            <>
              <button
                className="profile__edit-button hover-button"
                type="button"
                onClick={handleClickEditProfile}
              >
                {isEditProfile ? "Сохранить" : "Редактировать"}
              </button>
              <button className="profile__logout hover-button" type="button">
     {/*          <Link  to="/signin" className="profile__logout hover-button" >
            Выйти из аккаунта
          </Link> */}
               
               
                Выйти из аккаунта
              </button>
            </>
          )}
        </form>
        </div>
      </main>
    </>
  );
};


export default Profile;

