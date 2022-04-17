import React from "react";
import { Container } from "../../Context/GlobalStyless";
import { Wrapper, GridContainer, ImgSection, Card } from "./Testimonial.Style";
import testimonial from "../../../IMAGES/testimonial.png";
import { ImQuotesLeft } from "react-icons/im";
import Slide from "react-reveal/Slide";
import { Carousel } from "./Carousel";

const Testimonials = () => {
	return (
		<Wrapper>
			<Container>
				<h1>Testimonials</h1>
				<p>
					Hear first-hand how we have given others confidence in their
					kitchen.
				</p>
				<GridContainer>
					<ImgSection>
						<img src={testimonial} alt="" />
					</ImgSection>
					<>
						<Carousel defaultWait={3000}>
							<Slide right>
								<Card>
									<div>
										<img
											src="https://images.pexels.com/photos/3777557/pexels-photo-3777557.jpeg"
											alt=""
										/>
									</div>
									<span>
										<ImQuotesLeft></ImQuotesLeft>
									</span>
									<p>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit.
									</p>
									<h3>Harry Styles</h3>
									<i>MDS manufacturing</i>
								</Card>
							</Slide>
							<Slide right>
								<Card>
									<div>
										<img
											src="https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg"
											alt=""
										/>
									</div>
									<span>
										<ImQuotesLeft></ImQuotesLeft>
									</span>
									<p>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit.
									</p>
									<h3>Opera Winfery</h3>
									<i>MDS manufacturing</i>
								</Card>
							</Slide>
							<Slide right>
								<Card>
									<div>
										<img
											src="https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
											alt=""
										/>
									</div>
									<span>
										<ImQuotesLeft></ImQuotesLeft>
									</span>
									<p>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit.
									</p>
									<h3>JImmy Fowler</h3>
									<i>MDS manufacturing</i>
								</Card>
							</Slide>
						</Carousel>
					</>
				</GridContainer>
			</Container>
		</Wrapper>
	);
};

export default Testimonials;
