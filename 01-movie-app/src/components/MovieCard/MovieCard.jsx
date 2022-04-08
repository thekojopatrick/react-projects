import "./MovieCard.css";
import { FiStar } from "react-icons/fi";
import styled from "styled-components";

const MovieCard = (movie) => {
  const { img, rating, title } = movie;
  return (
    <MovieCardWrapper>
      <img src={img} alt="" />
      <div className="rating">
        <FiStar />
        {rating}
      </div>
      <p>{title}</p>
    </MovieCardWrapper>
  );
};

const MovieCardWrapper = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem 0.5rem 1rem;
  background: rgba(32, 40, 62, 0.8);
  backdrop-filter: blur(80px);
  border-radius: 12px;

  .rating {
    position: absolute;
    top: 10px;
    left: 10px;
    display: flex;
    padding: 0.2rem 0.5rem;
    gap: 0.2rem;
    align-items: baseline;
    background: rgba(0, 0, 0, 0.65);
    backdrop-filter: blur(0.5rem);
    border-radius: 0.5rem;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #ffad49;
  }

  p {
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: 0.02em;
    color: #ebeef5;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: .8rem 0px;
  }
`;

export default MovieCard;
