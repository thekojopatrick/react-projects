import { logo } from "../../constants/images";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="main-nav" aria-label="Main">
      <img className="main-nav__logo" src={logo} alt="Movie App" />
      <ul className="main-nav__list">
        <li className="main-nav__item">
          <a href="/" className="main-nav__link">
            Movies
          </a>
        </li>
        <li className="main-nav__item">
          <a href="/" className="main-nav__link">
            Tv Shows
          </a>
        </li>
        <li className="main-nav__item">
          <a href="/" className="main-nav__link">
            Bookmarks
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
