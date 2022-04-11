import { NavLink } from "react-router-dom";
import { Navlinks } from "../../constants/data";
import { logo } from "../../constants/images";
import Search from "../Search/Search";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="main-nav" aria-label="Main">
      <NavLink to={"/"}>
        <img className="main-nav__logo" src={logo} alt="Movie App" />
      </NavLink>
      <ul className="main-nav__list">
        {Navlinks.map((navlink, id) => {
          const { title, route } = navlink;
          return (
            <li key={id} className="main-nav__item">
              <NavLink to={route} className="main-nav__link">
                {title}
              </NavLink>
            </li>
          );
        })}
        {/* <li>
          <Search />
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
