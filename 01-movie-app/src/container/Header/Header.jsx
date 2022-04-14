import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useEffect } from "react";
import { useState } from "react";
import { HeroBanner } from "../../components";
import { getTrending } from "../../utils/FetchApi";

const Header = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    fetchTrending();
  }, []);

  const fetchTrending = async () => {
    const data = await getTrending();
    setTrending(data);
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
