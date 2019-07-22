import _ from 'lodash';
import { editRecipeTitlePH } from '../constants/placeholders';

export const getRecipesState = store => store.recipes;

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
	const selectedRecipe = getSelectedFromRecipes(store);
	return( 
		store.selections.selectedRecipe.recipe && store.recipes ?
			_.values(getSelectedFromRecipes(store))[0].servings :
			'' );};

export const getSelectedIngredients = store => {
	const selectedRecipe = getSelectedFromRecipes(store);
	return (
		store.selections.selectedRecipe.recipe && store.recipes ?
			_.values(getSelectedFromRecipes(store))[0].ingredients :
			{}
	);
};

export const getSelectedEditableServings = store => {
	const selectedRecipe = getSelectedFromRecipes(store);
	return( 
		store.selections.selectedRecipe.recipe && store.recipes ?
			_.values(getSelectedFromRecipes(store))[0].editableServings :
			'' );};

export const getSelectedEditableTitle = store => {
	const selectedRecipe = getSelectedFromRecipes(store);
	return( 
		store.selections.selectedRecipe.recipe && store.recipes ?
			_.values(getSelectedFromRecipes(store))[0].editableTitle :
			'' );};

export const getSelectedToEdit = store => {
	const selectedRecipe = getSelectedFromRecipes(store);
	return (
		store.selections.selectedRecipe.recipe && store.recipes ?
			_.values(getSelectedFromRecipes(store))[0] : {}
	);};
