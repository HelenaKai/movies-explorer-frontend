import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

import Footer from "../Footer/Footer";
import NotFoundPage from '../NotFoundPage/NotFoundPage';

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>

    <Footer /> 
    </div>
  );
}

export default App;
