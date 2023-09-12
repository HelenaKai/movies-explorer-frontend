import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about" id="about-project">
      <h2 className="about__title">О проекте</h2>

      <div className="about__container">
        <div className="about__description">
          <h3 className="about__description-title">
            Дипломный проект включал 5&nbsp;этапов
          </h3>
          <p className="about__description-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>

        <div className="about__description">
          <h3 className="about__description-title">
            На выполнение диплома ушло 5&nbsp;недель
          </h3>
          <p className="about__description-text">
            У каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно
            было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>

      <div className="about__container about__progress-line">
        <h4 className="about__progress-line-title about__progress-line-title_theme_green ">
          1 неделя
        </h4>
        <h4 className="about__progress-line-title about__progress-line-title_theme_grey">4 недели</h4>
        <p className="about__progress-line-text">Back-end</p>
        <p className="about__progress-line-text">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
