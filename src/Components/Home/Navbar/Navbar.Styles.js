import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.div`
	width: 100%;
	background: #ae2012;
	position: sticky;
	top: 0;
	z-index: 100;
`;

export const NavBar = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	line-height: 5rem;
`;

export const Logo = styled(Link)`
	text-decoration: none;
	font-size: 25px;
	color: #f3ffb6;
`;

export const NavList = styled.ul`
	display: flex;

	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		height: 90vh;
		width: 100%;
		position: absolute;
		top: 80px;
		text-align: center;
		left: ${({ menuStatus }) => (menuStatus ? 0 : "-100%")};
		opacity: 1;
		transition: all 0.5s ease-in;
		background-color: #e9d8a6;
		padding: 30px 0;
	}
`;

export const ListItem = styled.li`
	list-style: none;
	padding: 0 15px;
`;

export const StyledLink = styled(Link)`
	text-decoration: none;
	color: #f3ffb6;

	&:hover {
		color: black;
	}

	@media only screen and (max-width: 768px) {
		font-size: 20px;
		color: #ae2012;
	}
`;

export const MenuIcon = styled.div`
	display: none;
	cursor: pointer;
	font-size: 25px;
	color: #f3ffb6;

	@media (max-width: 768px) {
		display: block;
	} ;
`;
