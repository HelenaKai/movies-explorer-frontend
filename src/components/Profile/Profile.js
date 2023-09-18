import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

function Profile() {
  // временные значения
  const userName = "Елена";
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState("pochta@yandex.ru");

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  return (
    <>
      <main>
        <section className="profile">
          <h1 className="profile__welcome">{`Привет, ${userName}!`}</h1>
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
                value={name || ""}
                onChange={handleChangeName}
                required
                /* placeholder="Елена" */
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
                value={email || ""}
                onChange={handleChangeEmail}
                required
                /*placeholder="testmail@mail.ru" */
              />
              <span className="profile__error"></span>
            </label>

            <Link
              to="/profile"
              className="profile__button-save  profile__button_type_change hover-button"
              type="submit"
            >
              Редактировать
            </Link>

            <button
              className="profile__button-save profile__button_type_logout hover-button"
              type="submit"
            >
              <Link to="/" className="profile__exit hover-button">
                Выйти из аккаунта
              </Link>
            </button>

          </form>
        </section>
      </main>
    </>
  );
}

export default Profile;
