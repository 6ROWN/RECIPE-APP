import React from "react";
import { Wrapper, LeftContent, RightContent, Wrap } from "./Hero.Styles";
import showcase from "../../../IMAGES/showcase3.png";
import { BsArrowRight } from "react-icons/bs";
import { Container } from "../../Context/GlobalStyless";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const Hero = () => {
	return (
		<Wrap>
			<Container style={{ background: " #ece4db" }}>
				<Wrapper>
					<LeftContent>
						<Fade left cascade>
							<h1>It's not just food. It is the experience</h1>
							<p>
								Take control of what goes into your body. Enjoy
								your own spice
							</p>
						</Fade>
						<Zoom>
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
						</Zoom>
					</LeftContent>
					<RightContent>
						<Fade right>
							<img src={showcase} alt={showcase} />
						</Fade>
					</RightContent>
				</Wrapper>
			</Container>
		</Wrap>
	);
};

export default Hero;
