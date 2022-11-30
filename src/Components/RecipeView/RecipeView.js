import React, { useEffect } from "react";
import { fetchData } from "../../Features/Recipe/RecipeSlice";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../Layout/Loading";
import ErrorPage from "../Layout/ErrorPage";
import SearchForm from "../Pages/Search/SearchForm";
import RecipeList from "./RecipeList";
import styled from "styled-components";

const errMsg = "Oops! Error loading page. Please try again later";

const RecipeView = () => {
	const dispatch = useDispatch();

	const RecipeData = useSelector((state) => state.recipes);

	const { loading, recipe, error } = RecipeData;

	useEffect(() => {
		dispatch(fetchData());
	}, [dispatch]);

	return (
		<>
			{loading && <Loading />}
			{!loading && error ? <ErrorPage msg={errMsg} /> : null}
			{!loading && recipe.length ? (
				<Wrapper>
					<div>
						<Header>Popular recipes</Header>
						<SearchForm />
					</div>
					<ul
						style={{
							display: "flex",
							flexWrap: "wrap",
							justifyContent: "center",
							gap: "2.5rem",
							padding: "3rem 0",
						}}
					>
						{recipe.map((x) => (
							<RecipeList key={x.id} x={x} />
						))}
					</ul>
				</Wrapper>
			) : null}
		</>
	);
};

export default RecipeView;

const Wrapper = styled.h2`
	background: #e8e8e4;
	padding: 2.5rem 0;
	text-align: center;
`;

const Header = styled.div`
	color: red;
	font-size: 30px;
	padding-bottom: 1rem;
`;
