import React from "react";
import { Card, CardLink } from "./RecipeList.Styles";

const RecipeList = ({ x }) => {
	const { title, image, id } = x;
	return (
		<CardLink to={`/recipe/${id}`}>
			<Card>
				<img src={image} alt="" style={{}} />
				<h4>{title}</h4>
			</Card>
		</CardLink>
	);
};

export default RecipeList;
