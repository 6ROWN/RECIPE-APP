import React from "react";
import { Container } from "../../Context/GlobalStyless";
import { FlexContainer, Wrapper, Links } from "./Footer.Styles";

const Footer = () => {
	return (
		<Wrapper>
			<Container>
				<footer>
					<FlexContainer>
						<div>
							<h4> Company</h4>
							<ul>
								<li>
									<Links to="/">About</Links>
								</li>
								<li>
									<Links to="/">Blog</Links>
								</li>
								<li>
									<Links to="/">In the News</Links>
								</li>
								<li>
									<Links to="/">Find Job</Links>
								</li>
							</ul>
						</div>
						<div>
							<h4>Resources</h4>
							<ul>
								<li>
									<Links to="/">Catalog</Links>
								</li>
								<li>
									<Links to="/">Career Services</Links>
								</li>
								<li>
									<Links to="/">Brown Talks</Links>
								</li>
								<li>
									<Links to="/">Vlogs</Links>
								</li>
							</ul>
						</div>
						<div>
							<h4>Support</h4>
							<ul>
								<li>
									<Links to="/">Contact Us</Links>
								</li>
								<li>
									<Links to="/">Help and FAQ</Links>
								</li>
								<li>
									<Links to="/">Service Status</Links>
								</li>
								<li>
									<Links to="/">Legal and Privacy</Links>
								</li>
							</ul>
						</div>
						<div>
							<h4>Socials</h4>
							<ul>
								<li>
									<Links to="/">Facebook</Links>
								</li>
								<li>
									<Links to="/">Instagram</Links>
								</li>
								<li>
									<Links to="/">Twitter</Links>
								</li>
								<li>
									<Links to="/">Pinterest</Links>
								</li>
							</ul>
						</div>
					</FlexContainer>
					<hr />
					<span>
						<p> © 2011–2021 Brown's Kitchen, Inc.</p>
					</span>
				</footer>
			</Container>
		</Wrapper>
	);
};

export default Footer;
