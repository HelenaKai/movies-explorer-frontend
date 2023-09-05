import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
import Account from "../../images/account-btn.svg";

function Navigation({ handleClose }) {
  return (
    <div className="nav__page-overlay">
      <div className="nav__overlay-container"></div>
      <div className="nav__menu">
        <button className="nav__close-btn" onClick={handleClose}></button>
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
        <Link to="/profile" className="nav__account-btn">
          <img src={Account} alt="Кнопка входа в аккаунт" />
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
