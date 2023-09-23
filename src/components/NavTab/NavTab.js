import "./NavTab.css";

function NavTab() {
  return (
    <nav className="nav-tab">
      <ul className="nav-tab__list">
        <li className="nav-tab__link">
          <a href="#about-project" className="nav-tab__link-text">
            О проекте
          </a>
        </li>
        <li className="nav-tab__link">
          <a href="#techs" className="nav-tab__link-text">
            Технологии
          </a>
        </li>
        <li className="nav-tab__link">
          <a href="#about-me" className="nav-tab__link-text">
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
