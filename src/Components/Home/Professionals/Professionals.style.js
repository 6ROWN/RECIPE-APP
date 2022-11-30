import styled from "styled-components";

export const Wrapper = styled.div`
	background: #e8e8e4;
	width: 100%;
	padding: 4rem 0;
	text-align: center;

	h1 {
		font-size: 2.5rem;
		color: #ae2012;
	}
	p {
		padding: 1rem 0;
		font-size: 1rem;
		line-height: 2rem;
	}
`;

export const GridContainer = styled.div`
	padding: 2rem 0;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 3rem;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

export const Card = styled.div`
	height: 300px;
	background: red;
	text-align: center;
	border-radius: 10px;
	box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
	background: #fff;
	padding: 1rem;
	border-top: 5px solid #ae2012;

	h3 {
		padding: 1rem 0;
		color: #ae2012;
	}

	span {
		display: block;
		line-height: 1.5rem;
		padding: 10px;
	}
`;

export const ImgContainer = styled.div`
	width: 120px;
	height: 120px;
	text-align: center;
	margin: 0 auto;

	img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		border: 2px solid #ae2102;
	}
`;
