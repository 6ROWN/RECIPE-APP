import React from "react";
import { Container } from "../../Context/GlobalStyless";
import {
	Wrapper,
	GridContainer,
	Card,
	ImgContainer,
} from "./Professionals.style";
import LightSpeed from "react-reveal/LightSpeed";
import Pulse from "react-reveal/Pulse";

const Professionals = () => {
	return (
		<div>
			<Wrapper>
				<Container>
					<LightSpeed left>
						<h1>Chefs</h1>
						<p>
							Instructors who have achieved the career you want.
						</p>
					</LightSpeed>
					<GridContainer>
						<Pulse>
							<Card>
								<ImgContainer>
									<img
										src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
										alt=""
									/>
								</ImgContainer>
								<h3>Brain Kogi</h3>
								<h5>Chief Executive Officer</h5>
								<span>Yum! Brands, Inc.</span>
							</Card>
						</Pulse>
						<Pulse>
							<Card>
								<ImgContainer>
									<img
										src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
										alt=""
									/>
								</ImgContainer>

								<h3>Jerry Skeans</h3>
								<h5>
									Chief Operating Officer & Chief People
									Officer
								</h5>
								<span>Starbucks Corporation</span>
							</Card>
						</Pulse>
						<Pulse>
							<Card>
								<ImgContainer>
									<img
										src="https://images.pexels.com/photos/5907616/pexels-photo-5907616.jpeg"
										alt=""
									/>
								</ImgContainer>

								<h3>Christaina Adams</h3>
								<h5>President & Head Chef</h5>
								<span>Browns Kitchen Intl.</span>
							</Card>
						</Pulse>
					</GridContainer>
				</Container>
			</Wrapper>
		</div>
	);
};

export default Professionals;
