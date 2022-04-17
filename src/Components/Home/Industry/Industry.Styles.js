import styled from "styled-components";

export const Wrapper = styled.div`
	padding: 4rem 0;
	text-align: center;

	h1 {
		color: #ae2012;
	}

	p {
		padding: 2rem 0;
		line-height: 1.5rem;
	}
`;

export const GridContainer = styled.div`
	font-size: 4rem;
	padding: 2rem 0;
	display: flex;
	justify-content: space-between;
	grid-gap: 2rem;

	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1rem 0;
	}
`;
