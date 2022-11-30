import React from "react";
import { Container } from "../../Context/GlobalStyless";
import { Wrapper, GridContainer } from "./Industry.Styles";
import {
	SiPepsi,
	SiKfc,
	SiBurgerking,
	SiMcdonalds,
	SiUbereats,
	SiStarbucks,
	SiUnilever,
} from "react-icons/si";
import Jump from "react-reveal/Jump";
import Jello from "react-reveal/Jello";

const Industry = () => {
	return (
		<div>
			<Wrapper>
				<Container>
					<Jump>
						<h1>We are powered by industry.</h1>
					</Jump>
					<p>
						Our Recipes programs are built in partnership with the
						world’s most innovative cullinary companies and taught
						by industry leaders.
					</p>
					<GridContainer>
						<Jello>
							<SiKfc />
						</Jello>
						<Jello>
							<SiBurgerking />
						</Jello>
						<Jello>
							<SiPepsi />
						</Jello>
						<Jello>
							<SiMcdonalds />
						</Jello>
						<Jello>
							<SiUbereats />
						</Jello>
						<Jello>
							<SiStarbucks />
						</Jello>
						<Jello>
							<SiUnilever />
						</Jello>
					</GridContainer>
				</Container>
			</Wrapper>
		</div>
	);
};

export default Industry;
