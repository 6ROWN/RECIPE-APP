import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
		Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
		overflow-x: hidden;
		color: #444;
}

`;

export const Container = styled.div`
	width: 80%;
	margin: auto;
	max-width: 1300px;
`;

export default GlobalStyle;
