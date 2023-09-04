import "./AboutMe.css";
import ElenaKa from "../../images/ElenaKa.jpeg";

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">О себе</h2>

      <div className="about-me__container">
        <div className="about-me__content">
          <h3 className="about-me__name">Елена</h3>
          <h4 className="about-me__job">Фронтенд-разработчик, 43 года</h4>
          <p className="about-me__description">
            Я родилась в Санкт-Петербурге, закончила СПБГУПТД, кафедру
            Информационных и управляющих систем. Мне нравиться работать над
            интересными проектами заказчиков. Ранее я это делала с помощью
            издательских и графических программ. Теперь реализую себя в
            веб-разработке, привлекающей своими перспективами и практически
            неограниченными возможностями технологий.
          </p>
          <a
            className="about-me__link"
            href="https://github.com/HelenaKai"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>

        <img className="about-me__photo" src={ElenaKa} alt="Елена" />
      </div>
    </section>
  );
}

export default AboutMe;
