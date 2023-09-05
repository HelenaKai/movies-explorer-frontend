import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import "./Form.css";

function Form(props) {
  const { welcome, children, button, question, path, link } = props;

  return (
    <section className="form">
      <div className="form__container">
        <Link to="/">
          <img className="form__logo" src={logo} alt="Смайлик-логотип" />
        </Link>

        <h2 className="form__title"> {welcome} </h2>

        <form className="form__inputs">
          {children}
          <button className="form__button-save" type="submit" disabled>
            {button}
          </button>
        </form>

        <p className="form__text">
          {question}
          <Link to={path} className="form__link">
            {link}
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Form;
