import { ADD_RECIPE, SELECT_RECIPE, TOGGLE_TITLE } from './actionTypes';

// let nextRecipeId = 1;

export const addRecipe = ( recipe, content ) => ({
		type: ADD_RECIPE,
		payload: {
				recipe,
				content
		}
});

export const selectRecipe = ( recipe ) => ({
	type: SELECT_RECIPE,
	payload: {
		recipe}
});


export const toggleTitle = ( title ) => ({
	type: TOGGLE_TITLE,
	payload: {
		title}
});
