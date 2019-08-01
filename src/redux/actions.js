import { ADD_RECIPE, SELECT_RECIPE, TOGGLE_TITLE, TOGGLE_SERVINGS, UPDATE_TITLE, UPDATE_SERVINGS, EDIT_RECIPE, TOGGLE_TABLE, UPDATE_TABLE, RESET_EDIT, ADD_INGREDIENT, ADD_PRODUCT, REMOVE_PRODUCT, UPDATE_PRODUCT_TITLE, ADD_FORMAT, ADD_CELL, REMOVE_CELL, TOGGLE_FIELD, UPDATE_CELL } from './actionTypes';

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

export const toggleTable = ( id, className ) => ({
	type: TOGGLE_TABLE,
	payload: {
		id,
		className}
	});

export const updateTable = ( id, className, value ) => ({
	type: UPDATE_TABLE,
	payload: {
		id,
		className,
		value}
});

export const resetEdit = () => ({
	type: RESET_EDIT
});

export const addIngredient = () => ({
	type: ADD_INGREDIENT
});


export const addProduct = ( product, formats ) => ({
	type: ADD_PRODUCT,
	payload: {
		product,
		formats
	}
});

export const removeProduct = ( product ) => ({
	type: REMOVE_PRODUCT,
	payload: {
		product
	}
});

export const updateProductTitle = ( product ) => ({
	type: UPDATE_PRODUCT_TITLE,
	payload: {
		product
	}
});

export const addFormat = ( product, qty, unit ) => ({
	type: ADD_FORMAT,
	payload: {
		product,
		qty,
		unit
	}
});

export const addCell = ( cellID ) => ({
	type: ADD_CELL,
	payload: {
		cellID}
});

export const removeCell = ( cellID ) => ({
	type: REMOVE_CELL,
	payload: {
		cellID }
});

export const toggleField = ( cellID, field ) => ({
	type: TOGGLE_FIELD,
	payload: {
		cellID,
		field}
});

export const updateCell = ( cellID, field, value ) => ({
	type: UPDATE_CELL,
	payload: {
		cellID,
		field,
		value}
});
	
