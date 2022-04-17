import styled from "styled-components";

export const Wrap = styled.div`
	background: #ece4db;
	height: 100vh;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-basis: 100%;
	align-items: center;
	height: calc(100vh - 6rem);
	color: #ae2012;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

export const LeftContent = styled.div`
	flex-basis: 50%;
	h1 {
		font-size: 3.5rem;
	}

	p {
		margin: 3.5rem 0;
		font-size: 1.5rem;
	}

	button {
		padding: 15px 40px;
		outline: none;
		border: none;
		color: #f3ffb6;
		background: #ae2012;
		border-radius: 10px;
		cursor: pointer;
		font-size: 1rem;
		font-weight: bold;

		&:hover {
			background: transparent;
			color: #ae2012;
			border: 1px solid #ae2012;
		}
	}
	@media (max-width: 768px) {
		order: 2;
		text-align: center;

		h1 {
			font-size: 2rem;
		}

		p {
			font-size: 1rem;
			margin: 3rem 0;
			line-height: 1.5rem;
		}

		button {
			padding: 10px 20px;
		}
	}
`;

export const RightContent = styled.div`
	justify-content: flex-end;
	flex-basis: 50%;

	/* height: 100%;
	width: 100%;
    */

	img {
		height: 950px;
		width: 100%;
	}

	@media (max-width: 768px) {
		order: 1;

		img {
			height: 400px;
		}
	}
`;
