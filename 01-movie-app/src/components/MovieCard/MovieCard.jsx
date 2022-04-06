import "./MovieCard.css";
import { FiStar } from "react-icons/fi";

const MovieCard = (movie) => {
  const { img, rating, title } = movie;
  return (
    <div>
      <img src={img} alt="" />
      <div className="rating">
        <FiStar />
        {rating}
      </div>
      <p>{title}</p>
    </div>
  );
};

export default MovieCard;
