import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Form.css";

function Form(props) {
  const {
    welcome,
    name,
    children,
    button,
    question,
    path,
    link,
    onSubmit,
    isDisabledButton,
    isLoading,
  } = props;
  

  return (
    <section className="form">
      <div className="form__container">
        <Logo />

        <h1 className="form__title"> {welcome} </h1>

        <form
          action="#"
          method="post"
          className="form__inputs"
          name={`${name}-form`}
          id="form"
          autoComplete="off"
          onSubmit={onSubmit}
          noValidate
        >
          {children}

          <button
            type="submit"
            disabled={isDisabledButton ? true : false}
            className={
              isDisabledButton || isLoading
                ? "form__button-save form__button-save_inactive"
                : "form__button-save"
            }
          >
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
