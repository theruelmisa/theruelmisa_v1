import React from "react";
import GlobalStyles, { MainContainer } from "./globalStyles";
import { Header, Hero, Work, About, Footer } from "./components";

const App = () => {
	return (
		<>
			<GlobalStyles />
			<MainContainer>
				<Header />
				<Hero />
				<Work />
				<About />
			</MainContainer>
			<Footer />
		</>
	);
};

export default App;
