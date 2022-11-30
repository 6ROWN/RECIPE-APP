import React from "react";
import { Container } from "../Context/GlobalStyless";
import { BackgroundImg, Body, Heading, Content } from "./About.Styles";
import Industry from "../Home/Industry/Industry";
import Professionals from "../Home/Professionals/Professionals";
import Newsletter from "../Home/Newsletter/Newsletter";
import Zoom from "react-reveal/Zoom";
import Tada from "react-reveal/Tada";
import Fade from "react-reveal/Fade";

const About = () => {
	return (
		<>
			<BackgroundImg
				style={{
					height: "80vh",
					background: `url(
						"https://images.unsplash.com/photo-1631303494240-7c3bc6bd8c03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
					) center`,
					backgroundSize: "cover",
				}}
			>
				<Container>
					<Zoom>
						<h1>The story of Mindful Chefs</h1>
					</Zoom>
					<Zoom>
						<p>
							We’ve been on a mission to make healthy eating since
							2015. We create delicious recipes designed to make
							you feel great, choose the freshest ingredients from
							award-winning suppliers we love, and deliver them
							straight to your door.
						</p>
					</Zoom>
				</Container>
			</BackgroundImg>

			<Container>
				<Fade left>
					<Heading>Who we are</Heading>
				</Fade>

				<Body>
					<Content>
						<Zoom>
							<p>
								Brown's Kitchen is a platform offering recipe
								meal kit delivery services. The company offers
								provides customers with eight recipes (weekly
								recipe rotations) options based on dietary
								preferences (vegetarian, vegan, gluten-free, and
								dairy-free). Home Chef automatically selects
								meals for users each week based on those
								preferences. It provides ingredients and
								step-by-step instructions delivered to the
								customer's door.
							</p>
						</Zoom>
					</Content>
					<Content>
						<Fade left>
							<Heading>Who we serve</Heading>
						</Fade>

						<Tada>
							<h3>Customers</h3>
						</Tada>
						<Zoom>
							<p>
								With thousands of restaurants, convenience
								stores, pet stores, grocery stores, and more at
								your fingertips, Brown's Kitchen delivers the
								best of your neighborhood on-demand recipes.
							</p>
						</Zoom>
					</Content>
					<Content>
						<Tada>
							<h3>Merchant</h3>
						</Tada>
						<Zoom>
							<p>
								Reach new customers, market your store, and grow
								your business by offering delivery, pickup, and
								direct online ordering with Brown's Kitchen.
							</p>
						</Zoom>
					</Content>

					<Industry />
				</Body>
			</Container>
			<Professionals />
			<Newsletter />
		</>
	);
};

export default About;
