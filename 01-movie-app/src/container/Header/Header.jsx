import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useEffect } from "react";
import { useState } from "react";
import { HeroBanner } from "../../components";
import makeRequest from "../../utils/FetchApi";

const Header = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    getTrending();
  }, []);

  const getTrending = async () => {
    const data = await makeRequest(
      `https://api.themoviedb.org/3/trending/all/week`
    );
    setTrending(data.results);
  };

  return (
    <header>
      <Splide
        options={{
          rewind: true,
          autoplay: true,
          drag: "free",
          gap: "2rem",
        }}
      >
        {trending.map((trends, id) => {
          return (
            <SplideSlide key={id}>
              <HeroBanner banner={trends} />
            </SplideSlide>
          );
        })}
      </Splide>
    </header>
  );
};

export default Header;
