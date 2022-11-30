import React, { useState } from "react";
import { GiCook, GiHamburgerMenu } from "react-icons/gi";
import { MdRestaurantMenu } from "react-icons/md";
import { Container } from "../../Context/GlobalStyless";
import {
	Nav,
	NavBar,
	Logo,
	MenuIcon,
	NavList,
	StyledLink,
	ListItem,
} from "./Navbar.Styles";

const Navbar = () => {
	const [menuStatus, setMenuStatus] = useState(false);

	const handleClick = () => {
		setMenuStatus((previousState) => !previousState);
	};

	return (
		<Nav>
			<Container>
				<NavBar>
					<Logo to="/">
						{" "}
						<GiCook /> Brown's Kitchen
					</Logo>
					<MenuIcon onClick={handleClick}>
						{menuStatus ? (
							<MdRestaurantMenu />
						) : (
							<GiHamburgerMenu />
						)}
					</MenuIcon>
					<NavList onClick={handleClick} menuStatus={menuStatus}>
						<ListItem>
							<StyledLink to="/">Home</StyledLink>
						</ListItem>
						<ListItem>
							<StyledLink to="/recipes"> Recipe</StyledLink>
						</ListItem>
						<ListItem>
							<StyledLink to="/about"> About</StyledLink>
						</ListItem>
						<ListItem>
							<StyledLink to="/contact"> Contact</StyledLink>
						</ListItem>
					</NavList>
				</NavBar>
			</Container>
		</Nav>
	);
};

export default Navbar;
