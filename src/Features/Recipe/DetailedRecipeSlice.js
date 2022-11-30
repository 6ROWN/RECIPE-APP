import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	loading: false,
	recipe: [],
	error: "",
};

export const fetchDetails = createAsyncThunk(
	"details/fetchDetails",
	async (id, { rejectWithValue }) => {
		try {
			const response = await axios.get(
				`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
			);
			return response.data;
		} catch (error) {
			// return rejectWithValue(error.response.message);
			console.log("failed");
		}
	}
);

const DetailedRecipeSlice = createSlice({
	name: "details",
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchDetails.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchDetails.fulfilled, (state, action) => {
			state.loading = false;
			state.recipe = action.payload;
			state.error = "";
		});
		builder.addCase(fetchDetails.rejected, (state, action) => {
			state.loading = false;
			state.recipe = [];
			state.error = action.error.message;
		});
	},
});

export default DetailedRecipeSlice.reducer;
