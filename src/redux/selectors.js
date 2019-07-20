import _ from 'lodash';

export const getRecipesState = store => store.recipes;

export const getSelectedRecipe = store => 
	store.selections.selectedRecipe.recipe ?
	store.selections.selectedRecipe.recipe :
	'pick a recipe to edit';

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
