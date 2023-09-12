import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

import "./App.css";

function App() {
  const location = useLocation();

  // функция проверки Header на текущей странице
  const showHeader = () => {
    const { pathname } = location;
    return (
      pathname === "/" ||
      pathname === "/movies" ||
      pathname === "/saved-movies" ||
      pathname === "/profile"
    );
  };

  // функция проверки Footer на текущей странице
  const showFooter = () => {
    const { pathname } = location;
    return (
      pathname === "/" || 
      pathname === "/movies" || 
      pathname === "/saved-movies"
    );
  };

  return (
    <div className="app">
      {showHeader() && <Header />}

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>

      {showFooter() && <Footer />}
    </div>
  );
}

export default App;
