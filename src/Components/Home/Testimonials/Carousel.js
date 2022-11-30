import makeCarousel from "react-reveal/makeCarousel";

import styled from "styled-components";

const height = "450px",
	width = "100%";

export const CarouselContainer = styled.div`
	position: relative;
	overflow: hidden;
	width: ${width};
	height: ${height};
	z-index: -1;
`;

export const CarouselUI = ({ children }) => (
	<CarouselContainer>{children}</CarouselContainer>
);
export const Carousel = makeCarousel(CarouselUI);
