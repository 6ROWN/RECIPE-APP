import styled from "styled-components";

export const Wrapper = styled.div`
	background: #e8e8e4;
	padding: 4rem 0;
	text-align: center;
	z-index: -1;
`;

export const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 2rem;
	align-items: center;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		text-align: center;
	}
`;

export const TextInfo = styled.div`
	h1 {
		color: #ae2012;
	}
	p {
		line-height: 1.5rem;
		padding: 15px 0;
	}
`;

export const ImgWrapper = styled.div`
	height: 300px;
	width: 350px;
	border-radius: 20px;
	box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
	background: #ece4db;

	img {
		height: 100%;
		width: 100%;
		border-radius: 20px;
	}

	@media (max-width: 768px) {
		height: 250px;
		width: 300px;
	}
`;
