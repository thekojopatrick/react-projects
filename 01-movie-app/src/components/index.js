import Navbar from "./Navbar/Navbar";
import Layout from "./Layout/Layout";
import HeroBanner from "./HeroBanner/HeroBanner";
import Button from "./Button/Button";
import MovieCard from "./MovieCard/MovieCard";
import Tab from "./Tab/Tab";
import Search from "./Search/Search";
import Tabs from "./Tabs/Tabs";
import styled from "styled-components";
import Category from "./Category/Category";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 3rem;
`;

const SHeader = styled.h2`
  font-weight: 600;
  font-size: 64px;
  line-height: 80px;
  letter-spacing: -0.02em;
  color: #ebeef5;
`;

export {
  SHeader,
  Search,
  Navbar,
  Layout,
  HeroBanner,
  MovieCard,
  Tab,
  Tabs,
  Category,
  Button,
  Grid,
};
