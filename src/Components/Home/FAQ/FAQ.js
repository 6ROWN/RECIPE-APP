import React from "react";
import { Container } from "../../Context/GlobalStyless";
import { Accordion, Wrapper } from "./FAQ.styles";

const FAQ = () => {
	return (
		<Wrapper>
			<Container>
				<h1>Frequently Asked Questions</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

				<Accordion>
					<details>
						<summary>Why shop with us</summary>
						<ul>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Et, pariatur?
						</ul>
					</details>
					<details>
						<summary>Why shop with us</summary>
						<ul>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Et, pariatur?
						</ul>
					</details>
					<details>
						<summary>
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Nobis laboriosam quidem aspernatur sit
							deleniti commodi.
						</summary>
						<ul>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Et, pariatur?Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Deserunt, laborum?
						</ul>
					</details>
				</Accordion>
				<span>Still have Questions?</span>
				<p>
					If you cannot find answers to your questions in our FAQ. You
					can always contact us. We will answer to you shortly.
				</p>
			</Container>
		</Wrapper>
	);
};

export default FAQ;
