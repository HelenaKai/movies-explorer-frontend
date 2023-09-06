import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <>
      <section className="profile">
        <h1 className="profile__welcome">Привет, Елена!</h1>
        <form id="form" className="profile__form">
          <label className="profile__label">
            Имя
            <input
              name="name"
              className="profile__input"
              id="name-input"
              type="text"
              minLength="2"
              maxLength="40"
              required
              placeholder="Елена"
            />
            <span className="profile__error"></span>
          </label>

          <div className="profile__border"></div>
          <label className="profile__label">
            E-mail
            <input
              name="email"
              className="profile__input"
              id="email-input"
              type="email"
              required
              placeholder="testmail@mail.ru"
            />
            <span className="profile__error"></span>
          </label>
          <button type="submit" className="profile__button-save">
            Редактировать
          </button>
          <button type="button" className="profile__exit">
            Выйти из аккаунта
          </button>
        </form>
      </section>
    </>
  );
}

export default Profile;
