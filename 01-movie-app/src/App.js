import Pages from "./pages";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </>
  );
}

export default App;
