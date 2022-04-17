import React from "react";
import { Wrapper, LeftContent, RightContent, Wrap } from "./Hero.Styles";
import showcase from "../../../IMAGES/showcase3.png";
import { BsArrowRight } from "react-icons/bs";
import { Container } from "../../Context/GlobalStyless";

const Hero = () => {
	return (
		<Wrap>
			<Container style={{ background: " #ece4db" }}>
				<Wrapper>
					<LeftContent>
						<h1>It's not just food. It is the experience</h1>
						<p>
							Take control of what goes into your body. Enjoy your
							own spice
						</p>
						<button>
							Explore menu
							<BsArrowRight
								style={{
									marginLeft: "20px",
									fontSize: "20px",
									alignItems: "center",
								}}
							></BsArrowRight>
						</button>
					</LeftContent>
					<RightContent>
						<img src={showcase} alt={showcase} />
					</RightContent>
				</Wrapper>
			</Container>
		</Wrap>
	);
};

export default Hero;
