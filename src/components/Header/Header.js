import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import account from "../../images/account_button.svg";
import Menu from "../../images/burgermenu-button.svg";
import Navigation from "../Navigation/Navigation";

import "./Header.css";

function Header({ LoggedIn }) {
  const [isClicked, setIsClicked] = useState(false);
  const location = useLocation();

  const setActiveLink = ({ isActive }) =>
    isActive ? "header__btn_active" : "header__btn";

  function handleOpen() {
    setIsClicked(true);
  }

  function handleClose() {
    setIsClicked(false);
  }

  return (
    <>
      {!LoggedIn ? (
        <header
          className={`header ${ location.pathname === "/" && "header_location_home" }`} >
          <Logo />
          <nav className="header__btn-container">
            <Link to="/signup" className="header__btn">
              Регистрация
            </Link>
            <Link to="/signin" className="header__btn header__btn-green">
              Войти
            </Link>
          </nav>
        </header>
      ) : (
        <header
        className={
            location.pathname === "/" ? `header header_location_home` : `header`
          } 
        >
          <Logo />

          <nav className="header__btn-container-movies">
            <NavLink
              to="/movies"
               className={setActiveLink}
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              className={setActiveLink}
            >
              Сохранённые фильмы
            </NavLink>
          </nav>

          <nav className="header__btn-container">
            <Link
              to="/profile" 
              className={`header__account-btn ${
                location.pathname === "/" && "header__account-btn__blue"
              }`}
             >
              <p className="header__account-title">Аккаунт</p>
              <img
                className={`header__account-image ${
                  location.pathname === "/" && "header__account-image__blue"
                }`}
                src={account}
                alt="Кнопка входа в аккаунт"
              />
            </Link>

            <button className="header__menu-button" onClick={handleOpen}>
              <img
                className={`header__menu-button ${
                  location.pathname === "/" && "header__menu-button__blue"
                }`}
                src={Menu}
                alt="Кнопка меню"
              />
            </button>
          </nav>
          {isClicked ? (
            <Navigation handleClose={handleClose} />
          ) : (
            ""
          )}
        </header>
      )}
    </>
  );
}

export default Header;
