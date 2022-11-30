import React from "react";
import { Container } from "../../Context/GlobalStyless";
import { SiCodechef } from "react-icons/si";
import { CgMenuHotdog } from "react-icons/cg";
import { MdNoFood } from "react-icons/md";
import { GiBowlOfRice } from "react-icons/gi";
import { IconContainer, Wrapper, GridContainer } from "./Icon.Styles";
import LightSpeed from "react-reveal/LightSpeed";
import Pulse from "react-reveal/Pulse";

const Icon = () => {
	return (
		<Wrapper>
			<Container>
				<LightSpeed>
					<h1>Why us?</h1>
					<p>Cook better with support along the way.</p>
				</LightSpeed>
				<GridContainer>
					<Pulse>
						<IconContainer>
							<CgMenuHotdog
								style={{ color: "#ae2012", fontSize: "4rem" }}
							></CgMenuHotdog>
							<div>Menu Variations</div>
							<p>
								Discover Delicious Soups, Desserts, And Much
								More From All Over The World.
							</p>
						</IconContainer>
					</Pulse>
					<Pulse>
						<IconContainer>
							<SiCodechef
								style={{ color: "#ae2012", fontSize: "4rem" }}
							></SiCodechef>
							<div>Best Chef</div>
							<p>
								Our instructors comprises of highly recognized
								professionals from around the world.
							</p>
						</IconContainer>
					</Pulse>
					<Pulse>
						<IconContainer>
							<MdNoFood
								style={{ color: "#ae2012", fontSize: "4rem" }}
							></MdNoFood>
							<div>Healthy food</div>
							<p>
								Your health, our concern. We make sure we
								deliver best healthy recipes to our customers
							</p>
						</IconContainer>
					</Pulse>
					<Pulse>
						<IconContainer>
							<GiBowlOfRice
								style={{ color: "#ae2012", fontSize: "4rem" }}
							></GiBowlOfRice>
							<div>Warm Served</div>
							<p>
								Enjoy the taste of your own kitchen with just a
								little help from us
							</p>
						</IconContainer>
					</Pulse>
				</GridContainer>
			</Container>
		</Wrapper>
	);
};

export default Icon;
