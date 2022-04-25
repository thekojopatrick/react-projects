import {
  AddCartIcon,
  AlarmClockIcon,
  ArrAbstract,
  Oranges,
  Person1,
  StrawberrySmallIcon,
} from "../../constants/images";
import { Button } from "../components";
import "./header.styles.scss";

const Header = () => {
  return (
    <header className="hero">
      <div className="col">
        <div className="hero-ad">
          More than Faster
          <img src={StrawberrySmallIcon} alt="icon" />
        </div>
        <h1 className="hero-title">
          Groceries delivered in as little as <span>2 hours</span>
        </h1>
        <p className="hero-desc">
          Grocen atssures fresh grocery every morning to your family without
          getting out in this pandemic.
        </p>
        <div className="btn-group">
          <Button type={"btn-primary"}>Order Now</Button>
          <Button>
            <svg
              width="12"
              height="15"
              viewBox="0 0 12 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.5 6.63397C12.1667 7.01888 12.1667 7.98112 11.5 8.36602L1.75 13.9952C1.08333 14.3801 0.249999 13.899 0.249999 13.1292L0.25 1.87083C0.25 1.10103 1.08333 0.619909 1.75 1.00481L11.5 6.63397Z" />
            </svg>
            Order Process
          </Button>
        </div>
      </div>
      <div className="col hero-illustration">
        <div className="ad-product">
          <img src={Oranges} className="ad-product-img" alt="oranges" />
          <p className="ad-product-name">Fresh Orange</p>
          <p className="ad-product-price">$44.60</p>
          <p className="ad-product-cost">Free Shipping</p>
          <button className="ad-product-btn">
            <img src={AddCartIcon} alt="add cart" />
          </button>
        </div>
        <img src={Person1} className="hero-image" alt="Person with grocery" />
        <div className="delivery-time">
          <img src={AlarmClockIcon} alt="time" />
          <div className="desc">
            <h3>Delivery</h3>
            <p>30 min</p>
          </div>
        </div>
        <img className="abstract" src={ArrAbstract} alt="abstract" />
      </div>
    </header>
  );
};

export default Header;
