import "./cta.styles.scss";
import {
  AppStoreIcon,
  PlayStoreIcon,
  MobileMockup,
} from "../../constants/images";
import { Button } from "../components";

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta-content">
        <div className="col">
          <img src={MobileMockup} alt="mobile-mockup" />
        </div>
        <div className="col">
          <div className="col-content">
            <h3>Download our app</h3>
            <h2>Get the Groceries app order more easily.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut.
            </p>
            <div className="btn-group">
              <Button type={"btn-outline"}>
                <img src={AppStoreIcon} alt="app" />
                App Store
              </Button>
              <Button>
                <img src={PlayStoreIcon} alt="app" />
                Play Store
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
