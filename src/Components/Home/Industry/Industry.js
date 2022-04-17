import React from "react";
import { Container } from "../../Context/GlobalStyless";
import { Wrapper, GridContainer } from "./Industry.Styles";
import {
	SiPepsi,
	SiKfc,
	SiBurgerking,
	SiMcdonalds,
	SiUbereats,
	SiStarbucks,
	SiUnilever,
} from "react-icons/si";

const Industry = () => {
	return (
		<div>
			<Wrapper>
				<Container>
					<h1>We are powered by industry.</h1>
					<p>
						Our Recipes programs are built in partnership with the
						world’s most innovative cullinary companies and taught
						by industry leaders.
					</p>
					<GridContainer>
						<SiKfc></SiKfc>
						<SiBurgerking></SiBurgerking>
						<SiPepsi></SiPepsi>
						<SiMcdonalds></SiMcdonalds>
						<SiUbereats></SiUbereats>
						<SiStarbucks></SiStarbucks>
						<SiUnilever></SiUnilever>
					</GridContainer>
				</Container>
			</Wrapper>
		</div>
	);
};

export default Industry;
