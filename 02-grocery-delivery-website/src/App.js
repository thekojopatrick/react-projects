import { createContext, useState } from "react";
import "./App.scss";
import { Footer, Navbar } from "./components/components";
import Pages from "./pages/pages";

export const AppContext = createContext();

function App() {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<AppContext.Provider value={{ openMenu, setOpenMenu }} className="">
			<Navbar />
			<Pages />
			<Footer />
		</AppContext.Provider>
	);
}

export default App;
