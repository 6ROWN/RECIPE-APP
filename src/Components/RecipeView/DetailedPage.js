import React, { useState } from "react";
import { Container } from "../Context/GlobalStyless";
import {
	GridWrapper,
	ImageContainer,
	Heading,
	Button,
	Info,
	ButtonContainer,
} from "./DetailPage.Style";

const DetailedPage = ({ recipe }) => {
	const { title, image, readyInMinutes, instructions, extendedIngredients } =
		recipe;

	const [activeTab, setActiveTab] = useState("instructions");

	return (
		<Container>
			<div>
				<Heading>{title}</Heading>

				<GridWrapper>
					<ImageContainer>
						<img src={image} alt="" />
						<div>
							<h3>Time to cook: {readyInMinutes} minutes</h3>
						</div>
					</ImageContainer>
					<div>
						<ButtonContainer>
							<Button
								onClick={() => setActiveTab("instructions")}
							>
								Instructions
							</Button>

							<Button onClick={() => setActiveTab("ingredients")}>
								Ingredients
							</Button>
						</ButtonContainer>

						<Info>
							{activeTab === "instructions" && (
								<h5
									dangerouslySetInnerHTML={{
										__html: instructions,
									}}
								></h5>
							)}
							{activeTab === "ingredients" && (
								<ul>
									{extendedIngredients.map((x) => (
										<li key={x.id}>{x.original}</li>
									))}
								</ul>
							)}
						</Info>
					</div>
				</GridWrapper>
			</div>
		</Container>
	);
};

export default DetailedPage;
