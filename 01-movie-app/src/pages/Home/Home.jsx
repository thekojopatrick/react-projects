import { Search } from "../../components";
import Layout from "../../components/Layout/Layout";
import { Header, Movies, Tabs } from "../../container";

const Home = () => {
  return (
    <Layout>
      <Header />
      <section className="tabs-search flex justify-between items-center">
        <Tabs />
        <Search />
      </section>
      <Movies />
    </Layout>
  );
};

export default Home;
