import { ADD_RECIPE } from './actionTypes.js';


// let nextRecipeId = 1;

export const addRecipe = ( recipe, content ) => ({
		type: ADD_RECIPE,
		payload: {
				recipe,
				content
				
		}
})
;
