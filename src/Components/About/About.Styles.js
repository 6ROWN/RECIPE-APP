import styled from "styled-components";

export const BackgroundImg = styled.div`
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	color: #fff;
	text-shadow: 1px 2px 2px red;
	p {
		padding: 6rem 3rem;
		line-height: 3rem;
		font-size: 20px;
		font-weight: 600;

		@media (max-width: 768px) {
			padding: 3rem 1rem;
			font-size: 16px;
			line-height: 2rem;
		}
	}
`;

export const Heading = styled.h1`
	text-align: center;
	padding-top: 2rem;
	color: #ae2012;
`;

export const Body = styled.div`
	line-height: 2rem;
	padding: 2rem 0;
	text-align: justify;
	text-justify: inter-word;
`;

export const Content = styled.div`
	text-align: center;
	h3 {
		padding: 2rem;
		color: #aa4a30;
	}
`;
