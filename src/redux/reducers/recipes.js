import { ADD_RECIPE } from "../actionTypes";

const initialState = {
	recipes: {1: "Recipe"},
  ingredients: []
}; 

export default function(state = initialState, action) {
	switch (action.type) {
      case ADD_RECIPE: {
		const { recipe , content } = action.payload;
      return {
        ...state,
          recipes:recipe,
					ingridients: [content]
      };
      }
		default: return state;}
}
