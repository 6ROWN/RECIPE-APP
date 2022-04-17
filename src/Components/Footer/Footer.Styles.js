import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
	padding: 4rem 0;
	background: #ae2012;
	bottom: 0;

	footer {
		span {
			text-align: center;
			display: block;
			padding-top: 3rem;
			font-size: 14px;
			color: #e9d8a6;
		}
		hr {
			border: 1px solid #e9d8a6;
			margin-top: 20px;
		}
	}
`;

export const FlexContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

	div {
		padding: 10px;
		h4 {
			color: #f3ffb6;
			padding: 5px 0;
		}

		li {
			list-style: none;
			padding: 10px 0;
			text-decoration: none;
		}
	}

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const Links = styled(Link)`
	text-decoration: none;
	color: #ece4db;
`;
