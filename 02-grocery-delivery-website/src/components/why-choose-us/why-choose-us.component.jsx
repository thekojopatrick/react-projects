import { Person2, Strawberry, AddCartIcon } from "../../constants/images";
import { Button } from "../components";
import "./why-choose-us.styles.scss";

const WhyChooseUs = () => {
	return (
		<section className="why-choose-us">
			<div className="col illustration">
				<div className="ad-product-2">
					<h4 className="ad-product-name">Melting Cheese</h4>
					<p className="ad-product-subdesc">Red Stovery</p>
					<img src={Strawberry} className="ad-product-img" alt="oranges" />
					<div className="ad-product-bottom">
						<div className="">
							<div className="rating">⭐️ 3.8</div>
							<p className="ad-product-price">$49.66</p>
						</div>
						<button className="ad-product-btn">
							<img src={AddCartIcon} alt="add cart" />
						</button>
					</div>
				</div>
				<img src={Person2} alt="person 2" />
			</div>
			<div className="col">
				<div className="col-content">
					<h3>WHY CHOOSE US</h3>
					<h2>Find Favorites and Discover New Ones</h2>
					<p>At vero eos et accusamus et iusto odio dignissimos ducimus blanditiis praesen voluptatum deleniti.</p>
					<Button type={"btn-primary"}>Explore Now</Button>
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
