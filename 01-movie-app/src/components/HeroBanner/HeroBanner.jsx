import Button from "../Button/Button";
import "./HeroBanner.scss";

const HeroBanner = ({ banner }) => {
  const { id, backdrop_path, original_title, title, original_name, overview } =
    banner;
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280/";
  return (
    <div key={id} className="hero-banner group">
      <img
        loading="lazy"
        className="hero-banner__img"
        src={`${IMAGE_PATH}${backdrop_path}`}
        alt="Movie Banner"
      />
      <div className="hero-banner__content">
        <h1 className="hero-banner__title">
          {title === "" ? title : original_title || original_name}
        </h1>
        <p className="hero-banner__desc">{overview}</p>
        <Button className={"btn-primary"} icon={true}>
          Watch Trailer
        </Button>
      </div>
    </div>
  );
};

export default HeroBanner;
