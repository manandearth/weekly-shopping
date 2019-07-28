import _ from 'lodash';
import { editRecipeTitlePH } from '../constants/placeholders';

export const getRecipesState = store => store.recipes;

export const getEdited = store =>
	store.editedRecipe.recipe ?
	store.editedRecipe.recipe :
	{};

export const getSelectedRecipe = store => 
	store.selections.selectedRecipe.recipe ?
	store.selections.selectedRecipe.recipe :
	editRecipeTitlePH;

export const getSelectedFromRecipes = store => {
	const recipes = getRecipesState(store);
	const selectedRecipeTitle = getSelectedRecipe(store);
	return _.values(recipes).filter(recipe => (recipe.title === selectedRecipeTitle));
};

export const getSelectedServings = store => {
	return( 
		store.selections.selectedRecipe.recipe && store.recipes ?
			_.values(getSelectedFromRecipes(store))[0].servings :
			'' );};

export const getSelectedIngredients = store => {
	return (
		store.selections.selectedRecipe.recipe && store.recipes ?
			_.values(getSelectedFromRecipes(store))[0].ingredients :
			{}
	);
};

export const getSelectedEditableServings = store => {
	return( 
		store.selections.selectedRecipe.recipe && store.recipes ?
			_.values(getSelectedFromRecipes(store))[0].editableServings :
			'' );};

export const getSelectedEditableTitle = store => {
	return( 
		store.selections.selectedRecipe.recipe && store.recipes ?
			_.values(getSelectedFromRecipes(store))[0].editableTitle :
			'' );};

export const getSelectedToEdit = store => {
	return (
		store.selections.selectedRecipe.recipe && store.recipes ?
			_.values(getSelectedFromRecipes(store))[0] : {}
	);};

export const getProducts = store => {
	return (
		store.pantry.pantry);
};
