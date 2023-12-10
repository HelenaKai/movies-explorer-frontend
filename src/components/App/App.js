import React, { useState, useEffect } from "react";
import {
  Route,
  Routes,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

import InfoPopup from "../InfoPopup/InfoPopup";
import InfoPopupUpdate from "../InfoPopupUpdate/InfoPopupUpdate";

import Preloader from "../Preloader/Preloader";

import ScrollToTop from '../../utils/ScrollToTop/ScrollToTop';

import "./App.css";

import * as api from "../../utils/MainApi";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [savedMovies, setSavedMovies] = useState([]);

  const [isInfoPopupOpen, setInfoPopupOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [isInfoPopupUpdateOpen, setInfoPopupUpdateOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  //Проверка токена и авторизация пользователя
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    console.log(jwt);
    if (jwt) {
      api
        .getContent(jwt)
        .then((res) => {
          if (res) {
            localStorage.removeItem("allMovies");
            setIsLoggedIn(true);
          }
          navigate(path, { replace: true });
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // Комментарий ниже помогает избавиться от предупреждения от eslint.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Получение данных о пользователе при успешной авторизации
  useEffect(() => {
    if (isLoggedIn) {
      api
        .getUserInfo()
        .then((profileInfo) => {
          setCurrentUser(profileInfo);
        })
        .catch((err) => {
          console.log(err);
        });

      // Получаем сохраненные фильмы пользователя
      api
        .getMovies()
        .then((cardsData) => {
          console.log(cardsData);
          setSavedMovies(cardsData.reverse());
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoggedIn]);

  // Регистрация пользователя
  function handleRegister({ name, email, password }) {
    api
      .register(name, email, password)
      .then(() => {
        setInfoPopupOpen(true);
        setIsSuccess(true);
        // Проходим авторизацию, в случае успешной регистрации
        handleLogin({ email, password });
      })
      .catch((err) => {
        setInfoPopupOpen(true);
        setIsSuccess(false);
        console.log(err);
      });
  }

  // Авторизация  пользователя
  function handleLogin({ email, password }) {
    setIsLoading(true);
    api
      .login(email, password)
      .then((res) => {
        if (res) {
          setInfoPopupOpen(true);
          setIsSuccess(true);
          localStorage.setItem("jwt", res.token);
          navigate("/movies", { replace: true });
          setIsLoggedIn(true);
        }
      })
      .catch((err) => {
        setInfoPopupOpen(true);
        setIsSuccess(false);
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }


  // Обновление данных пользователя
  function handleUpdateProfile(newUserInfo) {
    setIsLoading(true);
    api
      .updateProfileUserInfo(newUserInfo)
      .then((data) => {
        setInfoPopupUpdateOpen(true);
        setIsUpdate(true);
        setCurrentUser(data);
      })
      .catch((err) => {
        setInfoPopupUpdateOpen(true);
        setIsUpdate(false);
        console.log(err);
        errorHandler(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  // Сохранение карточек с фильмом (визуально - постановка лайка):
  function handleCardLike(card) {
    api
      .addCard(card)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
      })
      .catch((err) => {
        setIsSuccess(false);
        console.log(err);
        errorHandler(err);
      });
  }

  // Удаление карточки фильма из сохранённых (визуально - снятие лайка или нажатие на крестик):
  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setSavedMovies((state) =>
          state.filter((item) => item._id !== card._id)
        );
      })
      .catch((err) => {
        setIsSuccess(false);
        console.log(err);
        errorHandler(err);
      });
  }

  // Проверяем, ошибка  является ли ошибкой авторизации
  function errorHandler(err) {
    if (err === "Error: 401") {
      handleSignOut();
    }
  }

  // Выход
  const handleSignOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("jwt");
    localStorage.removeItem("movies");
    localStorage.removeItem("movieSearch");
    localStorage.removeItem("shortMovies");
    localStorage.removeItem("allMovies");
    localStorage.clear();
    navigate("/");

    
  /*   setIsLoggedIn(false);
    localStorage.clear();
    setCurrentUser({
      name: '',
      email: '',
    });
    navigate("/"); */
  };

  //-----------Модальные окна-------------------------------------

  //-----------Закрыть
  function closeAllPopUps() {
    setInfoPopupOpen(false);
    setInfoPopupUpdateOpen(false);
  }

  //----------Закрыть по оверлею
  function closeByOverlay(event) {
    if (event.target === event.currentTarget) {
      closeAllPopUps();
    }
  }

  //----------Закрыть по ESC:
  const isOpen = setInfoPopupOpen || setInfoPopupOpen;
  useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === "Escape") {
        closeAllPopUps();
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", closeByEscape);
      return () => {
        document.removeEventListener("keydown", closeByEscape);
      };
    }
  }, [isOpen]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {isLoading && <Preloader />}
      <ScrollToTop />
     
      <div className="app">
        {location.pathname === "/" ||
        location.pathname === "/profile" ||
        location.pathname === "/movies" ||
        location.pathname === "/saved-movies" ? (
          <Header LoggedIn={isLoggedIn} />
        ) : (
          <></>
        )}

      
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route
            path={"/signin"}
            element={
              isLoggedIn ? (
                <Navigate to="/movies" replace />
              ) : (
                <Login onLogin={handleLogin} isLoading={isLoading} />
              )
            }
          />

          <Route
            path={"/signup"}
            element={
              isLoggedIn ? (
                <Navigate to="/movies" replace />
              ) : (
                <Register onRegister={handleRegister} isLoading={isLoading} />
              )
            }
          />

          <Route
            path={"/movies"}
            element={
              <ProtectedRoute
                path="/movies"
                component={Movies}
                loggedIn={isLoggedIn}
                savedMovies={savedMovies}
                handleLikeFilm={handleCardLike}
                onDeleteCard={handleCardDelete}
                isLoading={isLoading}
              />
            }
          />

          <Route
            path={"/saved-movies"}
            element={
              <ProtectedRoute
                path="/saved-movies"
                loggedIn={isLoggedIn}
                savedMovies={savedMovies}
                onDeleteCard={handleCardDelete}
                component={SavedMovies}
              />
            }
          />

          <Route
            path={"/profile"}
            element={
              <ProtectedRoute
                path="/profile"
                isLoading={isLoading}
                signOut={handleSignOut}
                onUpdateUser={handleUpdateProfile}
                loggedIn={isLoggedIn}
                component={Profile}
              />
            }
          />

          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>

        <InfoPopup
          isOpen={isInfoPopupOpen}
          onClose={closeAllPopUps}
          isSuccess={isSuccess}
          onCloseOverlay={closeByOverlay}
        />

        <InfoPopupUpdate
          isOpen={isInfoPopupUpdateOpen}
          onClose={closeAllPopUps}
          isUpdate={isUpdate}
          onCloseOverlay={closeByOverlay}
        />

        {location.pathname === "/" ||
        location.pathname === "/movies" ||
        location.pathname === "/saved-movies" ? (
          <Footer />
        ) : (
          <></>
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

/*  // функция проверки Header на текущей странице
  const showHeader = () => {
    const { pathname } = location;
    return (
      pathname === "/" ||
      pathname === "/movies"  ||
      pathname === "/saved-movies"  ||
      pathname === "/profile"
    );
    
  };

  // функция проверки Footer на текущей странице
  const showFooter = () => {
    const { pathname } = location;
    return (
      pathname === "/"  || 
      pathname === "/movies" || 
      pathname === "/saved-movies" 
    );
  }; 
  {showFooter() && <Footer />}
  {showHeader() && <Header />}
  
  */
