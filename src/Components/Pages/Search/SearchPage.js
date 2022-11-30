import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSearched } from "../../../Features/Recipe/SearchSlice";
import Loading from "../../Layout/Loading";
import ErrorPage from "../../Layout/ErrorPage";
import RecipeList from "../../RecipeView/RecipeList";
import styled from "styled-components";

const SearchPage = () => {
	const errMsg = "Error detected";
	const params = useParams();

	const dispatch = useDispatch();

	const receivedData = useSelector((state) => state.searched);

	const { loading, error, recipe } = receivedData;

	useEffect(() => {
		dispatch(getSearched(params.search));
	}, [params.search, dispatch]);

	return (
		<div>
			<>
				{loading && <Loading />}
				{!loading && error ? <ErrorPage msg={errMsg} /> : null}
				{!loading && recipe.length ? (
					<Wrapper>
						<Header>Recipes</Header>
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
				) : (
					<ErrorPage msg="Oops! Search value not found! Try something else" />
				)}
			</>
		</div>
	);
};

export default SearchPage;

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
