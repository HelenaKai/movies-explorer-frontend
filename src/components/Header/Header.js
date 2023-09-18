import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import Account from "../../images/account-btn.svg";
import Menu from "../../images/burgermenu-button.svg";
import Navigation from "../Navigation/Navigation";

import "./Header.css";

function Header() {
  const location = useLocation();

  // функция проверки отображения второго хедера
  const showSecndHeader = () => {
    const { pathname } = location;
    return (
      pathname === "/movies" ||
      pathname === "/saved-movies" ||
      pathname === "/profile"
    );
  };

  // функция проверки отображения первый хедер
  const showSinglHeader = () => {
    const { pathname } = location;
    return pathname === "/";
  };

  const [isClicked, setIsClicked] = React.useState(false);

  function handleOpen() {
    setIsClicked(true);
  }

  function handleClose() {
    setIsClicked(false);
  }

  return (
    <>
      {showSinglHeader() && (
        <header className="header" id="header">
          <Logo />
          <div className="header__btn-container">
            <Link to="/signup" className="header__btn">
              Регистрация
            </Link>
            <Link to="/signin" className="header__btn header__btn-green">
              Войти
            </Link>
          </div>
        </header>
      )}

      {showSecndHeader() && (
        <header className="header header_theme_dark" id="header_theme_dark">
          <Logo />
          <div className="header__btn-container-movies">
            <NavLink
              to="/movies"
              className="header__btn"
              activeclassname="header__btn_active"
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              className="header__btn"
              activeclassname="header__btn_active"
            >
              Сохранённые фильмы
            </NavLink>
          </div>
          <div className="header__btn-container">
            <Link to="/profile" className="header__account-btn">
              <img
                className="header__account-image"
                src={Account}
                alt="Кнопка входа в аккаунт"
              />
            </Link>
            <button className="header__menu-button" onClick={handleOpen}>
              <img src={Menu} alt="Кнопка меню"/>
            </button>
          </div>
          {isClicked ? <Navigation handleClose={handleClose}/> : ""}
        </header>
      )}
    </>
  );
}

export default Header;