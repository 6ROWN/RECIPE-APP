import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetails } from "../../Features/Recipe/DetailedRecipeSlice";
import Loading from "../Layout/Loading";
import ErrorPage from "../Layout/ErrorPage";
import DetailedPage from "./DetailedPage";

const Recipe = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const detailedRecipes = useSelector((state) => state.details);

	const { loading, error, recipe } = detailedRecipes;
	const errMsg = " Could not retieve recipes at this time. Try again later.";

	useEffect(() => {
		dispatch(fetchDetails(id));
	}, [dispatch, id]);

	return (
		<div>
			{loading && <Loading />}
			{!loading && error ? <ErrorPage msg={errMsg} /> : null}
			{!loading && recipe ? <DetailedPage recipe={recipe} /> : null}
		</div>
	);
};

export default Recipe;
