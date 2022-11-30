import { configureStore } from "@reduxjs/toolkit";
import RecipeReducer from "../Features/Recipe/RecipeSlice";
import DetailedReducer from "../Features/Recipe/DetailedRecipeSlice";
import SearchReducer from "../Features/Recipe/SearchSlice";

const store = configureStore({
	reducer: {
		recipes: RecipeReducer,
		details: DetailedReducer,
		searched: SearchReducer,
	},
});

export default store;
