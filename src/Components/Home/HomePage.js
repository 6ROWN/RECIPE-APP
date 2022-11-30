import React from "react";
import Hero from "./Hero/Hero";
import Icon from "./Icon/Icon";
import RandomMenu from "./RandomMenu/RandomMenu";
import Industry from "./Industry/Industry";
import Professionals from "./Professionals/Professionals";
import Testimonials from "./Testimonials/Testimonials";
import FAQ from "./FAQ/FAQ";
import Newsletter from "./Newsletter/Newsletter";

const HomePage = () => {
	return (
		<>
			<Hero />
			<RandomMenu />
			<Icon />
			<Industry />
			<Professionals />
			<Testimonials />
			<FAQ />
			<Newsletter />
		</>
	);
};

export default HomePage;
