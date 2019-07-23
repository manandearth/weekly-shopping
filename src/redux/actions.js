import { ADD_RECIPE, SELECT_RECIPE, TOGGLE_TITLE, TOGGLE_SERVINGS, UPDATE_TITLE, UPDATE_SERVINGS, EDIT_RECIPE } from './actionTypes';

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

export const toggleServings = ( title, servings ) => ({
	type: TOGGLE_SERVINGS,
	payload: {
		title,
		servings}
});

export const updateTitle = ( title ) => ({
	type: UPDATE_TITLE,
	payload: {
		title}
});

export const updateServings = ( servings ) => ({
	type: UPDATE_SERVINGS,
	payload: {
		servings}
});

export const editRecipe = ( recipe ) => ({
	type: EDIT_RECIPE,
	payload: {
		recipe
	}
});
