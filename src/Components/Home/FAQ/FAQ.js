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
						<summary>CAN I SUBSTITUTE THIS INGREDIENT?</summary>
						<ul>
							I recommend using the specified ingredients listed
							in the recipe whenever possible for optimal results.
							I understand that you may have dietary restrictions
							or simply do not have a particular ingredient on
							hand, but please remember that by using a
							substitution, I cannot speak for how much this will
							change in the overall taste or texture of the dish
							without further recipe testing.
						</ul>
					</details>
					<details>
						<summary>
							I TRIED ONE OF YOUR RECIPES BUT IT DID NOT TURN OUT.
							WHAT DID I DO WRONG?
						</summary>
						<ul>
							Please understand that it is very hard to
							specifically answer this question since I am not in
							the kitchen with you. That being said, I only share
							recipes that have been successful and well-tested in
							my own kitchen, but I understand that failures and
							mishaps can happen. But with a little bit more
							information, we can troubleshoot what went wrong to
							have a successful turnaround next time.
						</ul>
					</details>
					<details>
						<summary>
							HOW DO I SIGN UP FOR EMAIL UPDATES TO
							STAY-UP-TO-DATE WITH YOUR NEW RECIPES? IS THE
							SUBSCRIPTION FREE?
						</summary>
						<ul>
							You can sign up for free email updates here to have
							new recipes delivered right to your inbox. Yes, it’s
							really free!
						</ul>
					</details>
					<details>
						<summary>
							CAN YOU SHARE THE NUTRITIONAL INFORMATION FOR THIS
							RECIPE?
						</summary>
						<ul>
							We recommend you contact a dietician. We are not
							comfortable sharing nutritional information for any
							of our recipes. You could utilize online calorie
							counters at your discretion to obtain such
							information too.
						</ul>
					</details>
					<details>
						<summary>
							CAN I USE A SLOW COOKER OR INSTANT POT FOR THIS
							RECIPE INSTEAD?
						</summary>
						<ul>
							Please understand that it is very difficult to give
							exact conversion information without further recipe
							testing. As always, please use your best judgement
							to convert my recipes to utilize a slow cooker or
							Instant Pot.
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
