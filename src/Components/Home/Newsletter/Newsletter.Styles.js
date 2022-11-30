import styled from "styled-components";

export const Wrapper = styled.div`
	padding: 5rem 0;
	/* background: #ece4db; */
`;

export const NewsletterWrapper = styled.div`
	text-align: center;
	align-items: center;

	input {
		margin: 3rem 0;
		padding: 15px;
		width: 70%;
		border-radius: 8px;
		border: 1px solid #ae2012;
		outline: none;
		font-weight: bold;
		text-align: center;
	}

	button {
		display: block;
		margin: 0 auto;
		padding: 15px 20px;
		outline: none;
		border: none;
		background: #ae2012;
		border-radius: 8px;
		color: #fff;
		font-weight: bold;
		cursor: pointer;
		transition: all 0.3s ease-in;
		&:hover {
			background: #fff;
			border: 1px solid #ae2012;
			color: #ae2012;
		}
	}
`;
