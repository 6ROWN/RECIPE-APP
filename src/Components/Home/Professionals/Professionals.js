import React from "react";
import { Container } from "../../Context/GlobalStyless";
import {
	Wrapper,
	GridContainer,
	Card,
	ImgContainer,
} from "./Professionals.style";

const Professionals = () => {
	return (
		<div>
			<Wrapper>
				<Container>
					<h1>Chefs</h1>
					<p>Instructors who have achieved the career you want.</p>
					<GridContainer>
						<Card>
							<ImgContainer>
								<img
									src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg"
									alt=""
								/>
							</ImgContainer>
							<h3>Dave Chapalle</h3>
							<h4>Head Chef</h4>
							<span>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. A, debitis.
							</span>
						</Card>
						<Card>
							<ImgContainer>
								<img
									src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg"
									alt=""
								/>
							</ImgContainer>

							<h3>Dave Chapalle</h3>
							<h4>Head Chef</h4>
							<span>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. A, debitis.
							</span>
						</Card>
						<Card>
							<ImgContainer>
								<img
									src="https://images.pexels.com/photos/5907616/pexels-photo-5907616.jpeg"
									alt=""
								/>
							</ImgContainer>

							<h3>Dave Chapalle</h3>
							<h4>Head Chef</h4>
							<span>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. A, debitis.
							</span>
						</Card>
					</GridContainer>
				</Container>
			</Wrapper>
		</div>
	);
};

export default Professionals;
