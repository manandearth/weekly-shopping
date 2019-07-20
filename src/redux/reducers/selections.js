import { SELECT_RECIPE } from '../actionTypes';

const initialState = {
	selectedRecipe: {}
};

export default function(state = initialState, action) {
	switch (action.type) {
      case SELECT_RECIPE: {
		const { recipe } = action.payload;
      return {
        ...state,
				selectedRecipe:{
				recipe
				}
			};
			}
		default: return state;}
}
