import { createContext, useState } from "react";
import "./App.scss";
import Pages from "./pages/pages";

export const AppContext = createContext();

function App() {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<AppContext.Provider value={{ openMenu, setOpenMenu }} className="">
			<Pages />
		</AppContext.Provider>
	);
}

export default App;
