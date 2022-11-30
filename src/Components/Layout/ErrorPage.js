import React from "react";
import errorImg from "../../IMAGES/error-img.png";
import styled from "styled-components";

const ErrorPage = ({ msg }) => {
	return (
		<Container>
			<ErrorContainer>
				<h2>{msg}</h2>
			</ErrorContainer>
		</Container>
	);
};

export const Container = styled.div`
	width: 80%;
	margin: auto;
	max-width: 1300px;

	@media (max-width: 768px) {
		width: 100%;
	}
`;

const ErrorContainer = styled.div`
	background: url("${errorImg}") no-repeat;
	background-position: center;
	height: 100vh;
	width: 100%;
	display: flex;
	text-align: center;
	align-items: center;
	justify-content: center;
	opacity: 0.8;

	h2 {
		font-size: 40px;
		color: #ae2012;
		text-shadow: 1px 2px 2px #3f3d56;

		@media (max-width: 768px) {
			font-size: 30px;
			color: #e9d8a6;
		}
	}
`;

export default ErrorPage;
