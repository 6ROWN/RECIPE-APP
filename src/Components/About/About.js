import React from "react";
import { Container } from "../Context/GlobalStyless";
import styled from "styled-components";

const About = () => {
	return (
		<Container>
			<Heading>About</Heading>
			<Body>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Accusantium voluptate, quisquam temporibus similique possimus
				provident quidem? Veritatis est repellendus saepe ullam
				obcaecati, illo commodi dolorum molestiae. Debitis eligendi
				nostrum voluptatibus unde necessitatibus assumenda quis soluta
				fugiat architecto. Reiciendis dolor ex, illo molestias odio, sit
				velit repudiandae assumenda error totam minus vel, voluptatibus
				excepturi ea iure facilis impedit praesentium beatae quasi
				tempore fuga. Ratione enim quibusdam cumque illum reiciendis
				optio aut perferendis, quia odit, modi expedita ut. Aliquid
				commodi modi neque aliquam dolores nobis aperiam officiis eaque
				magni eos veritatis, corporis quia cupiditate, eius ratione,
				laboriosam dicta maxime optio non! Asperiores.
			</Body>
		</Container>
	);
};

export default About;

export const Heading = styled.h2`
	text-align: center;
	padding-top: 2.5rem;
`;

export const Body = styled.p`
	line-height: 2rem;
	padding: 2rem 0;
	text-align: justify;
	text-justify: inter-word;
`;
