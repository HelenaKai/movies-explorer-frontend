import "./Header.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";


function Header() {

  return (
    <header className="header">
      <Link to="/">
        <img 
        className="header__logo" 
        src={logo} 
        alt="Логотип приложения" 
        />
      </Link>      
      
    </header>
  );
}

export default Header;
