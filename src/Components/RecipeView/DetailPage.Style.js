import styled from "styled-components";

export const Heading = styled.h1`
	text-align: center;
	padding: 2rem 0;
	font-weight: bold;
`;

export const GridWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	min-height: 100vh;
	grid-gap: 4rem;

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

export const ImageContainer = styled.div`
	height: 350px;
	width: 100%;

	h3 {
		text-align: center;
		padding: 1rem;
	}

	@media screen and (max-width: 768px) {
		height: 30vh;
		width: 80%;
		margin: auto;
	}

	img {
		height: 100%;
		width: 100%;
		border-radius: 15px;
	}
`;

export const ButtonContainer = styled.div`
	@media screen and (max-width: 768px) {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const Button = styled.button`
	padding: 1rem 2rem;
	margin-right: 1rem;
	cursor: pointer;
	outline: none;
	border: none;
	border-radius: 8px;
	color: #ae2012;
	font-size: 15px;
	font-weight: 600;
	background: #ece4db;
	&:focus {
		background: #dcbe2f;
	}

	@media screen and (max-width: 768px) {
		display: inline-flex;
	}
`;

export const Info = styled.div`
	padding: 1rem 0;
	line-height: 2rem;
	text-align: justify;
	text-justify: inter-word;
`;
