import React from "react";
import { Navbar, Header, OurServices, WhyChooseUs, Features, Cta as CTA, Footer } from "../../components/components";

const Home = () => {
	return (
		<>
			<Navbar />
			<Header />
			<OurServices />
			<WhyChooseUs />
			<Features />
			<CTA />
			<Footer />
		</>
	);
};

export default Home;
