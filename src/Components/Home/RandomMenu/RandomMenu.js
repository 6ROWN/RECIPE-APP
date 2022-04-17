import React from "react";
import { Container } from "../../Context/GlobalStyless";
import {
	GridContainer,
	TextInfo,
	ImgWrapper,
	Wrapper,
} from "./RandomMenu.Styles";

const RandomMenu = () => {
	return (
		<div>
			<Wrapper>
				<Container>
					<GridContainer>
						<TextInfo>
							<h1>Today's Special</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit.
							</p>
						</TextInfo>
						<ImgWrapper>
							<img
								src="https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?cs=srgb&dl=pexels-daria-shevtsova-704569.jpg&fm=jpg"
								alt=""
							/>
						</ImgWrapper>
					</GridContainer>
				</Container>
			</Wrapper>
		</div>
	);
};

export default RandomMenu;
