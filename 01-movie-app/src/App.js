import Pages from "./pages";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Layout } from "./components";
import { useState, createContext } from "react";
export const AppContext = createContext(null);

function App() {
  const [movies, setMovies] = useState([]);
  const [tvshows, setTvshows] = useState([]);
  const [activeTab, setActiveTab] = useState("");
  const [discover, setDiscover] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState("");

  return (
    <AppContext.Provider
      value={{
        movies,
        setMovies,
        tvshows,
        isLoading,
        setIsLoading,
        isError,
        setError,
        setTvshows,
        discover,
        activeTab,
        setActiveTab,
        filtered,
        setDiscover,
        setFiltered,
      }}
    >
      <BrowserRouter>
        <Layout>
          <Pages />
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
