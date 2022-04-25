import "./navbar.styles.scss";
import { Logo } from "../../constants/images";
import { SearchField } from "../components";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Grover" />
        <span>Grover</span>
      </div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="/" className="navbar-link">
            Home
          </a>
        </li>
        <li className="navbar-item">
          <a href="/menu" className="navbar-link">
            Menu
          </a>
        </li>
        <li className="navbar-item">
          <a href="/service" className="navbar-link">
            Service
          </a>
        </li>
        <li className="navbar-item">
          <a href="/shop" className="navbar-link">
            Shop
          </a>
        </li>
      </ul>
      <SearchField />
    </nav>
  );
};

export default Navbar;
