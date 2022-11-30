import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	loading: false,
	recipe: [],
	error: "",
};

export const getSearched = createAsyncThunk(
	"search/getSearched",
	async (arg, { rejectWithValue }) => {
		try {
			const response = await axios.get(
				`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${arg}`
			);
			return response.data.results;
		} catch (error) {
			console.log("failed to fetch");
		}
	}
);

const SearchSlice = createSlice({
	name: "search",
	initialState,
	extraReducers: (builder) => {
		builder.addCase(getSearched.pending, (state) => {
			state.pending = true;
		});
		builder.addCase(getSearched.fulfilled, (state, action) => {
			state.pending = false;
			state.recipe = action.payload;
			state.error = "";
		});
		builder.addCase(getSearched.rejected, (state, action) => {
			state.pending = false;
			state.recipe = [];
			state.error = action.error.message;
		});
	},
});

export default SearchSlice.reducer;
