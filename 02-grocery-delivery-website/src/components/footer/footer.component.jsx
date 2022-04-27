import { NavLink } from "react-router-dom";
import { Logo } from "../../constants/images";
import "./footer.styles.scss";

const Footer = () => {
	return (
		<footer className="footer">
			<nav>
				<div className="section section-1">
					<NavLink to="/" className="footer-logo">
						<img src={Logo} alt="Grover" />
						Grover
					</NavLink>
					<p>Fast delivery,which is active all over the world,serves with many transportation vehicles.</p>
				</div>
				<div className="section section-2">
					<h4>Company</h4>
					<ul className="footer-list">
						<li className="footer-item">
							<NavLink to="/about-us">About Us</NavLink>
						</li>
						<li className="footer-item">Blog</li>
						<li className="footer-item">All Products</li>
						<li className="footer-item">Locations Map</li>
					</ul>
				</div>
				<div className="section section-3">
					<h4>Services</h4>
					<ul className="footer-list">
						<li className="footer-item">Order tracking</li>
						<li className="footer-item">Wish List</li>
						<li className="footer-item">My account</li>
						<li className="footer-item">Terms & Conditions</li>
					</ul>
				</div>
				<div className="section section-4">
					<h4>Get in Touch</h4>
					<p>Subscribe to our weekly Newsletter and receive updates via email.</p>
				</div>
			</nav>
			<div className="divider"></div>
			<div className="footnote">
				<div className="copyright">All Rights Resevered &copy; BESINK 2021</div>
				<ul>
					<li>Terms & Conditions</li>
					<li>Privacy & Policy</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
