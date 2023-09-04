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
            У каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>

      <div className="about__container about__container_progressline">
        <div className="about__progressline">
          <h4 className="about__progressline-title">1 неделя</h4>
          <p className="about__progressline-text">Back-end</p>
        </div>

        <div className="about__progressline">
          <h4 className="about__progressline-title about__progressline-title_grey">
            4 недели
          </h4>
          <p className="about__progressline-text">Front-end</p>
        </div>
      </div>
    </section>
  );
} 

export default AboutProject;
