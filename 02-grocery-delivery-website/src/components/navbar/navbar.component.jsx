import "./navbar.styles.scss";
import { Logo } from "../../constants/images";
import { SearchField } from "../components";
import { useContext } from "react";
import { AppContext } from "../../App";
import { NavLink, Link } from "react-router-dom";

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
				<li className="navbar-item">
					<NavLink onClick={handleMenuOpen} to="/" className="navbar-link">
						Home
					</NavLink>
				</li>
				<li className="navbar-item">
					<NavLink onClick={handleMenuOpen} to="/shop" className="navbar-link">
						Order Now
					</NavLink>
				</li>
				<li className="navbar-item navbar-item--search">
					<NavLink onClick={handleMenuOpen} to="/#search" className="navbar-link">
						Search
					</NavLink>
				</li>
				<li className="navbar-item">
					<NavLink onClick={handleMenuOpen} to="/our-services" className="navbar-link">
						Services
					</NavLink>
				</li>
				<li className="navbar-item">
					<NavLink onClick={handleMenuOpen} to="/about-us" className="navbar-link">
						About Us
					</NavLink>
				</li>
				<li className="navbar-item">
					<Link onClick={handleMenuOpen} to="/#download-app" className="navbar-link">
						Download App
					</Link>
				</li>
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
