import styled from "styled-components";

export const Wrapper = styled.div`
	padding: 4rem 0;
	width: 100%;
	text-align: center;
	z-index: -1;
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
	display: flex;
	justify-content: space-between;
	align-items: center;
	grid-gap: 3rem;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

export const ImgSection = styled.div``;

export const Card = styled.div`
	width: 370px;
	height: 400px;
	text-align: center;
	border-radius: 10px;
	box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
	margin: 0 auto;

	div {
		width: 100%;
		height: 200px;
		border-bottom: 5px solid #ae2012;

		img {
			height: 100%;
			width: 100%;
			border-top-left-radius: 10px;
			border-top-right-radius: 10px;
		}
	}

	span {
		padding: 20px;
		background: #fff;
		border-radius: 50%;
		color: #ae2012;
		font-size: 20px;
	}
	p {
		padding: 5px 10px;
	}

	h3 {
		color: #ae2012;
	}

	i {
		display: block;
		margin-top: 20px;
	}
`;
