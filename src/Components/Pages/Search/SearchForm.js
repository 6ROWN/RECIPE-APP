import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContainer } from "./SearchForm.Styles";

const SearchForm = () => {
	const [input, SetInput] = useState("");

	const navigate = useNavigate();

	const submitHandler = (e) => {
		e.preventDefault();
		navigate(`/searched/${input}`);
	};

	return (
		<>
			<SearchContainer onSubmit={submitHandler}>
				<input
					type="search"
					placeholder="Search recipe by name"
					value={input}
					onChange={(e) => SetInput(e.target.value)}
				/>
			</SearchContainer>
		</>
	);
};

export default SearchForm;
