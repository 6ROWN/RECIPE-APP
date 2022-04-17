import React from "react";
import { Container } from "../../Context/GlobalStyless";
import { SiCodechef } from "react-icons/si";
import { CgMenuHotdog } from "react-icons/cg";
import { MdNoFood } from "react-icons/md";
import { GiBowlOfRice } from "react-icons/gi";
import { IconContainer, Wrapper, GridContainer } from "./Icon.Styles";

const Icon = () => {
	return (
		<Wrapper>
			<Container>
				<h1>Why us?</h1>
				<p>Cook better with support along the way.</p>
				<GridContainer>
					<IconContainer>
						<CgMenuHotdog
							style={{ color: "#ae2012", fontSize: "4rem" }}
						></CgMenuHotdog>
						<div>Menu Variations</div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Praesentium, voluptatibus?
						</p>
					</IconContainer>
					<IconContainer>
						<SiCodechef
							style={{ color: "#ae2012", fontSize: "4rem" }}
						></SiCodechef>
						<div>Best Chef</div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Praesentium, voluptatibus?
						</p>
					</IconContainer>
					<IconContainer>
						<MdNoFood
							style={{ color: "#ae2012", fontSize: "4rem" }}
						></MdNoFood>
						<div>Healthy food</div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Praesentium, voluptatibus?
						</p>
					</IconContainer>
					<IconContainer>
						<GiBowlOfRice
							style={{ color: "#ae2012", fontSize: "4rem" }}
						></GiBowlOfRice>
						<div>Warm Served</div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Praesentium, voluptatibus?
						</p>
					</IconContainer>
				</GridContainer>
			</Container>
		</Wrapper>
	);
};

export default Icon;
