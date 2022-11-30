import styled from "styled-components";

export const SearchContainer = styled.form`
	width: 500px;
	margin: auto;
	input {
		width: 100%;
		outline: none;
		border: none;
		border-radius: 8px;
		height: 2.5rem;
		text-align: center;
		cursor: pointer;
		letter-spacing: 1.3px;

		&:focus {
			border: 1px solid yellow;
			color: red;
		}
	}

	@media (max-width: 768px) {
		width: 300px;
	}
`;
