import { CheckoutIcon, DeliveryIcon, MoneyIcon } from "../../constants/images";
import "./our-services.styles.scss";

const OurServices = () => {
  return (
    <section className="our-services">
      <div className="our-services-content">
        <h3>What we Serve</h3>
        <h2>fruit and vegetable delivered to your home</h2>
        <div className="services">
          <div className="service">
            <img src={DeliveryIcon} alt="delivery" />
            <h4>Free shipping</h4>
            <p>Enjoy Order in a hand using the freshness of groceries</p>
          </div>
          <div className="service service-active">
            <img src={MoneyIcon} alt="refunds" />
            <h4>15 days returns</h4>
            <p>Order in a handy way using the freshness of the groceries.</p>
          </div>
          <div className="service">
            <img src={CheckoutIcon} alt="checkout" />
            <h4>Secure checkout</h4>
            <p>Order in a handy way using the freshness of the groceries.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
