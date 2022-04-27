import React from "react";
import Home from "./home/home";
import Shop from "./shop/shop";
import OurServices from "./our-services/our-services";
import AboutUs from "./about-us/about-us";
import { Routes, Route } from "react-router-dom";

function Pages() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/shop" element={<Shop />} />
			<Route path="/our-services" element={<OurServices />} />
			<Route path="/about-us" element={<AboutUs />} />
		</Routes>
	);
}

export default Pages;
