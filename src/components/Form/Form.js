import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Form.css";

function Form(props) {
  const { welcome, children, button, question, path, link } = props;

  return (
    <section className="form">
      <div className="form__container">
        <Logo />

        <h1 className="form__title"> {welcome} </h1>

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
