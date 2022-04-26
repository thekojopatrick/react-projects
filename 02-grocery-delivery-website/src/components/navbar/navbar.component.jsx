import "./navbar.styles.scss";
import { Logo } from "../../constants/images";
import { SearchField } from "../components";
import { useContext } from "react";
import { AppContext } from "../../App";

const Navbar = () => {
	const { openMenu, setOpenMenu } = useContext(AppContext);

	return (
		<nav className={`navbar ${openMenu && "navbar__open"}`}>
			<div className="navbar-logo">
				<img src={Logo} alt="Grover" />
				<span>Grover</span>
			</div>
			<ul onMouseLeave={() => setOpenMenu(false)} className="navbar-list">
				<li className="navbar-item">
					<a href="/" className="navbar-link">
						Home
					</a>
				</li>
				<li className="navbar-item navbar-item--search">
					<a href="/search" className="navbar-link">
						Search
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
