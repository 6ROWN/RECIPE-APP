import styled from "styled-components";

export const Wrapper = styled.div`
	padding: 3rem 0;
	text-align: center;

	p {
		padding: 3rem 0;

		@media (max-width: 768px) {
			padding: 2rem 0;
		}
	}
`;

export const FormWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 1.5rem 4rem;
	align-items: center;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		grid-gap: 1rem;
	}
`;

export const FormControl = styled.div``;

export const FormGroup = styled.div`
	text-align: left;
`;

export const Error = styled.div`
	color: #ae2012;
	font-size: 14px;
`;

export const Input = styled.input`
	width: 100%;
	padding: 10px 45px;
	border-radius: 10px;
	outline: none;
	margin: 10px 0;
	resize: none;
	&:focus {
		border: 1px solid green;
	}
`;

export const Button = styled.button`
	width: 100%;
	align-items: center;
	align-self: center;
	padding: 20px;
	background: #ae2012;
	border-radius: 15px;
	justify-content: center;
	margin-top: 2rem;
	cursor: pointer;
	outline: none;
	border: none;
	span {
		font-size: 15px;
		letter-spacing: 5px;
		font-weight: bold;
		color: #f3ffb6;
	}
`;
