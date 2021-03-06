import { ImagePath } from "../../constants/data";
import Button from "../Button/Button";
import "./HeroBanner.scss";

const HeroBanner = ({ banner }) => {
  const { id, backdrop_path, original_title, title, original_name, overview } =
    banner;
  const name = title || original_name || original_title;
  return (
    <div key={id} className="hero-banner group">
      <img
        loading="lazy"
        className="hero-banner__img"
        src={`${ImagePath}w1280${backdrop_path}`}
        alt="Movie Banner"
      />
      <div className="hero-banner__content">
        <h1 className="hero-banner__title">{name}</h1>
        <p className="hero-banner__desc">{overview}</p>
        <Button className={"btn-primary"} icon={true}>
          Watch Trailer
        </Button>
      </div>
    </div>
  );
};

export default HeroBanner;
