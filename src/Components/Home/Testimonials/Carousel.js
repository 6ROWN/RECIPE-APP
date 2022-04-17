import makeCarousel from "react-reveal/makeCarousel";

import styled, { css } from "styled-components";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";

const height = "410px",
	width = "100%";

export const CarouselContainer = styled.div`
	position: relative;
	overflow: hidden;
	width: ${width};
	height: ${height};
	z-index: -1;
`;
export const Arrow = styled.div`
	text-shadow: 1px 1px 1px #fff;
	line-height: ${height};
	text-align: center;
	position: absolute;
	top: 0;
	width: 10%;
	font-size: 3em;
	cursor: pointer;
	user-select: none;
	color: #ae2012;
	${(props) =>
		props.right
			? css`
					left: 75%;
			  `
			: css`
					left: 15%;
			  `}
`;
export const CarouselUI = ({ position, handleClick, children }) => (
	<CarouselContainer>
		{children}
		<Arrow onClick={handleClick} data-position={position - 1}>
			{<HiOutlineChevronLeft></HiOutlineChevronLeft>}
		</Arrow>
		<Arrow right onClick={handleClick} data-position={position + 1}>
			{<HiOutlineChevronRight></HiOutlineChevronRight>}
		</Arrow>
	</CarouselContainer>
);
export const Carousel = makeCarousel(CarouselUI);
