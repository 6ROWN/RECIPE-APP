import React from "react";
import { Container } from "../../Context/GlobalStyless";
import { Wrapper, GridContainer, ImgSection, Card } from "./Testimonial.Style";
import testimonial from "../../../IMAGES/testimonial.png";
import { ImQuotesLeft } from "react-icons/im";
import Slide from "react-reveal/Slide";
import Jump from "react-reveal/Jump";
import { Carousel } from "./Carousel";

const Testimonials = () => {
	return (
		<Wrapper>
			<Container>
				<Jump>
					<h1>Testimonials</h1>
				</Jump>
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
										I am a busy mom who happens to be a good
										cook, but one of my hardest struggles
										was knowing WHAT to cook!
									</p>
									<h3>Harry Styles</h3>
									<i>South Mexico</i>
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
										Thanks for your wonderful idea of
										planning meals for the week. It is
										exactly what I've been looking for!!
									</p>
									<h3>Lauryn Hill</h3>
									<i> New York</i>
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
										My family loves your service. This is
										truly something we've been needing to
										help with our nightly dinner decisions
									</p>
									<h3>Jimmy Fowler</h3>
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
										I love Dinner Select because the recipes
										are creative, yet easy to prepare. The
										grocery list is definitely a plus too.
									</p>
									<h3>Helen Gings</h3>
									<i>New Zealand</i>
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
