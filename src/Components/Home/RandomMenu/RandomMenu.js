import React from "react";
import { Container } from "../../Context/GlobalStyless";
import {
	GridContainer,
	TextInfo,
	ImgWrapper,
	Wrapper,
} from "./RandomMenu.Styles";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const RandomMenu = () => {
	return (
		<div>
			<Wrapper>
				<Container>
					<GridContainer>
						<Fade left>
							<TextInfo>
								<h1>Today's Special</h1>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit.
								</p>
							</TextInfo>
						</Fade>
						<ImgWrapper>
							<Zoom>
								<img
									src="https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?cs=srgb&dl=pexels-daria-shevtsova-704569.jpg&fm=jpg"
									alt=""
								/>
							</Zoom>
						</ImgWrapper>
					</GridContainer>
				</Container>
			</Wrapper>
		</div>
	);
};

export default RandomMenu;
