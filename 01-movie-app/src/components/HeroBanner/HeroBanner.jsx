import { avengersBanner } from "../../constants/images";
import Button from "../Button/Button";
import "./HeroBanner.scss";

const HeroBanner = () => {
  return (
    <div className="hero-banner group">
      <img
        className="hero-banner__img"
        src={avengersBanner}
        alt="Movie Banner"
      />
      <div className="hero-banner__content">
        <h1 className="hero-banner__title">Avengers:Endgame</h1>
        <p className="hero-banner__desc">
          After the devastating events of Avengers: Infinity War, the universe
          is in ruins due to the efforts of the Mad Titan, Thanos. With the help
          of remaining allies, the Avengers......
        </p>
        <Button className={"btn-primary"} icon={true}>
          Watch Trailer
        </Button>
      </div>
    </div>
  );
};

export default HeroBanner;
