import React from "react";
import GlobalStyles, { MainContainer } from "./globalStyles";
import { Header, Hero, Process, Work, About, Footer } from "./components";

const App = () => {
	return (
		<>
			<GlobalStyles />
			<MainContainer>
				<Header />
				<Hero />
				<Process />
				<Work />
				<About />
			</MainContainer>
			<Footer />
		</>
	);
};

export default App;
