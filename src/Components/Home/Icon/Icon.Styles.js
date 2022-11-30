import styled from "styled-components";

export const Wrapper = styled.div`
	background: #e8e8e4;
	width: 100%;
	padding: 4rem 0;
	text-align: center;

	h1 {
		font-size: 2.5rem;
		color: #ae2012;
		position: relative;
	}
	p {
		padding: 1rem 0;
		font-size: 1rem;
		line-height: 2rem;
	}

	@media (max-width: 768px) {
		text-align: center;
	}
`;

export const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 2rem;
	padding: 3rem 0;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

export const IconContainer = styled.div`
	text-align: center;

	div {
		font-size: 20px;
		padding: 15px 0;
		font-weight: bold;
		color: #ae2012;
	}
	p {
		line-height: 1.5rem;
	}
`;
