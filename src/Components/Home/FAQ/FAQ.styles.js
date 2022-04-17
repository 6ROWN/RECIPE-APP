import styled from "styled-components";

export const Wrapper = styled.div`
	background: #e8e8e4;
	padding: 4rem 0;
	text-align: center;

	h1 {
		color: #ae2012;
	}
	p {
		line-height: 2rem;
		padding: 1.5rem 0;
	}

	span {
		color: #ae2012;
		font-size: 24px;
	}
`;

export const Accordion = styled.div`
	width: 70%;
	padding: 2rem 0;
	align-items: center;
	margin: 0 auto;
	details {
		background: white;
		padding: 20px;
		border-radius: 10px;
		margin-bottom: 15px;
		line-height: 1.6rem;
		text-align: left;
		cursor: pointer;

		summary {
			color: #ae2012;
			font-weight: bold;

			&::webkit-details-marker {
				display: none;
			}
		}

		ul {
			padding: 15px;
		}
	}
	@media (max-width: 768px) {
		width: 100%;
	}
`;
