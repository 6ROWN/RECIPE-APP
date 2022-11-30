import React from "react";
import { Container } from "../../Context/GlobalStyless";
import { Wrapper, NewsletterWrapper } from "./Newsletter.Styles";

const Newsletter = () => {
	return (
		<Wrapper>
			<Container>
				<NewsletterWrapper>
					<h2>Take the next step in your cullinary journey today.</h2>
					<form>
						<input
							type="email"
							placeholder="Enter your email to receive latest updates"
						/>
						<button>Subscribe to Newsletter</button>
					</form>
				</NewsletterWrapper>
			</Container>
		</Wrapper>
	);
};

export default Newsletter;
