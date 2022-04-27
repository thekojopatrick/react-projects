import "./navbar.styles.scss";
import { Logo } from "../../constants/images";
import { SearchField } from "../components";
import { useContext } from "react";
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";
import { navlinks } from "../../constants/data";

const Navbar = () => {
	const { openMenu, setOpenMenu } = useContext(AppContext);

	const handleMenuOpen = () => {
		setOpenMenu(false);
	};

	return (
		<nav className={`navbar ${openMenu && "navbar__open"}`}>
			<NavLink onClick={handleMenuOpen} to="/" className="navbar-logo">
				<img src={Logo} alt="Grover" />
				<span>Grover</span>
			</NavLink>
			<ul onMouseLeave={handleMenuOpen} className="navbar-list">
				{navlinks.map((navlink) => {
					const { id, name, route } = navlink;
					return (
						<li key={id} className={`navbar-item ${route === "/#search" ? "navbar-item--search" : ""}`}>
							<NavLink onClick={handleMenuOpen} to={route} className="navbar-link">
								{name}
							</NavLink>
						</li>
					);
				})}
			</ul>
			<SearchField />
			<div className="mobile-nav">
				<button
					onClick={() => setOpenMenu(!openMenu)}
					className={`hamburger-menu ${openMenu && "hamburger-menu__open"}`}
				>
					<span class="hamburger-icon"></span>
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
