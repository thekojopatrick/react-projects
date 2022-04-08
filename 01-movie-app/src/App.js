import Pages from "./pages";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Layout, Navbar } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Pages />
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
