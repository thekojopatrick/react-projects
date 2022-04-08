import { Search, Tabs } from "../../components";
import { Header, MoviesContainer } from "../../container";
import { tabs } from "../../constants/data";
const Home = () => {
  return (
    <>
      <Header />
      <section className="tabs-search flex justify-between items-center my-10">
        <Tabs categories={tabs} />
        <Search />
      </section>
      <MoviesContainer />
    </>
  );
};

export default Home;
