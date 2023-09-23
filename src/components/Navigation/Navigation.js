import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
import account from "../../images/account_button.svg";

function Navigation({ handleClose }) {
  return (
    <div className="nav__page-overlay">
      <div className="nav__overlay-container"></div>
      <div className="nav__menu">
        <button className="nav__close-button" onClick={handleClose} type="button"></button>
        <nav className="nav__links">
          <NavLink
            exact
            to="/"
            className="nav__link"
            activeClassName="nav__link_active"
          >
            Главная
          </NavLink>
          <NavLink
            to="/movies"
            className="nav__link"
            activeClassName="nav__link_active"
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className="nav__link"
            activeClassName="nav__link_active"
          >
            Сохранённые фильмы
          </NavLink>
        </nav>
        <Link to="/profile" className="nav__account-button">
          <p className="nav__account-title">Аккаунт</p>
          <img className="nav__accont-icon" src={account} alt="Кнопка входа в аккаунт" />
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
