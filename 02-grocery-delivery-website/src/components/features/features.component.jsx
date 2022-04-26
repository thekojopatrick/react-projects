import { BikeIcon, Person3 } from "../../constants/images";
import { Button } from "../components";
import "./features.styles.scss";

const Features = () => {
	return (
		<section className="features">
			<div className="col">
				<div className="col-content">
					<h3>HOME DELIVERY</h3>
					<h2>Sit at Home We Will Take Care Your Order</h2>
					<p>
						At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
						atque corrupti quos.
					</p>
					<Button type={"btn-secondary"}>Explore Now</Button>
				</div>
			</div>
			<div className="col illustration">
				<img src={Person3} alt="person 2" />
				<div className="feature">
					<div className="img-card">
						<img src={BikeIcon} alt="Bike" />
					</div>
					<h4>Bike Delivery</h4>
					<p>Bicycle service ensures that your package arrive quickly.</p>
				</div>
				<div className="ellipse"></div>
			</div>
		</section>
	);
};

export default Features;
