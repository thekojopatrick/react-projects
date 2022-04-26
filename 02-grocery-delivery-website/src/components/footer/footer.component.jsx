import { Logo } from "../../constants/images";
import "./footer.styles.scss";

const Footer = () => {
	return (
		<footer className="footer">
			<nav>
				<div className="section section-1">
					<div className="footer-logo">
						<img src={Logo} alt="Grover" />
						Grover
					</div>
					<p>Fast delivery,which is active all over the world,serves with many transportation vehicles.</p>
				</div>
				<div className="section section-2">
					<h4>Company</h4>
					<ul className="footer-list">
						<li className="footer-item">
							<a href="/about">About Us</a>
						</li>
						<li className="footer-item">
							<a href="/blog">Blog</a>
						</li>
						<li className="footer-item">
							<a href="/products">All Products</a>
						</li>
						<li className="footer-item">
							<a href="/office_location">Locations Map</a>
						</li>
					</ul>
				</div>
				<div className="section section-3">
					<h4>Services</h4>
					<ul className="footer-list">
						<li className="footer-item">
							<a href="/order_tracking">Order tracking</a>
						</li>
						<li className="footer-item">
							<a href="/wishlist">Wish List</a>
						</li>
						<li className="footer-item">
							<a href="/login">My account</a>
						</li>
						<li className="footer-item">
							<a href="/policies">Terms & Conditions</a>
						</li>
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
					<li>
						<a href="/policies">Terms & Conditions</a>
					</li>
					<li>
						<a href="/policies">Privacy & Policy</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
