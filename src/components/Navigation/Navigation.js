import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
import account from "../../images/account_button.svg";

function Navigation({ handleClose }) {
  const setActiveLink = ({ isActive }) =>
    isActive ? "nav__link_active" : "nav__link";

  return (
    <div className="nav__page-overlay">
      <div className="nav__overlay-container"></div>
      <div className="nav__menu">
        <button
          className="nav__close-button"
          onClick={handleClose}
          type="button"
        ></button>
        <nav className="nav__links">
          <NavLink exact to="/" className={setActiveLink} onClick={handleClose}>
            Главная
          </NavLink>
          <NavLink to="/movies" className={setActiveLink} onClick={handleClose}>
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={setActiveLink}
            onClick={handleClose}
          >
            Сохранённые фильмы
          </NavLink>
        </nav>
        <Link
          to="/profile"
          className="nav__account-button"
          onClick={handleClose}
        >
          <p className="nav__account-title">Аккаунт</p>
          <img
            className="nav__accont-icon"
            src={account}
            alt="Кнопка входа в аккаунт"
          />
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
