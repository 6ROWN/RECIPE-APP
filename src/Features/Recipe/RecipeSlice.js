import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=30`;

const initialState = {
	loading: false,
	recipe: [],
	error: "",
};

export const fetchData = createAsyncThunk(
	"recipe/fetchData",
	async (arg, { rejectWithValue }) => {
		try {
			const response = await axios.get(API);
			return response.data.recipes.map((x) => x);
		} catch (error) {
			return rejectWithValue(error.response.message);
		}
	}
);

const RecipeSlice = createSlice({
	name: "recipe",
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchData.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchData.fulfilled, (state, action) => {
			state.loading = false;
			state.recipe = action.payload;
			state.error = "";
		});
		builder.addCase(fetchData.rejected, (state, action) => {
			state.loading = false;
			state.recipe = [];
			state.error = action.error.message;
		});
	},
});

export default RecipeSlice.reducer;
