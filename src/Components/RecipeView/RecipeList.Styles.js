import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardLink = styled(Link)``;

export const Card = styled.div`
	width: 400px;
	height: 250px;
	border-radius: 30px;
	overflow: hidden;
	abackface-visibility: hidden;
	position: relative;
	cursor: pointer;
	transition: all 0.25s ease;

	@media screen and (max-width: 768px) {
		width: 300px;
		height: 200px;
	}

	&:hover {
		img {
			transform: scale(2);
		}

		h4 {
			color: red;
			text-shadow: 1px 2px 4px #fff;
		}
	}

	img {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}

	h4 {
		z-index: 30;
		position: absolute;
		bottom: 10px;
		color: #fff;
		padding: 20px;
		padding-bottom: 20px;
		font-size: 18px;
		text-shadow: 1px 2px 4px red;
	}
`;
