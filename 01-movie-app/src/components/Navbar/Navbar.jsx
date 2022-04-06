import { NavLink } from "react-router-dom";
import { navlinks } from "../../constants/data";
import { logo } from "../../constants/images";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="main-nav" aria-label="Main">
      <img className="main-nav__logo" src={logo} alt="Movie App" />
      <ul className="main-nav__list">
        {navlinks.map((navlink, id) => {
            const { title, route } = navlink;
            return (
              <li key={id} className="main-nav__item">
                <NavLink to={route} className="main-nav__link">
                  {title}
                </NavLink>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

export default Navbar;
