import { Person3 } from "../../constants/images";
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
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos.
          </p>
          <Button type={"btn-secondary"}>Explore Now</Button>
        </div>
      </div>
      <div className="col">
        <img src={Person3} alt="person 2" />
      </div>
    </section>
  );
};

export default Features;
