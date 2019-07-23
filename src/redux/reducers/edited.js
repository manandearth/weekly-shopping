import { EDIT_RECIPE, TOGGLE_TITLE, TOGGLE_SERVINGS, UPDATE_TITLE, UPDATE_SERVINGS } from '../actionTypes';

const initialState = {
	recipe: {}
};

export default function(state = initialState, action) {
	switch (action.type) {
    case EDIT_RECIPE: {
			const { recipe } = action.payload;
      return {
				recipe
			};
		}
			
		case TOGGLE_TITLE: {
			const { } = action.payload;
			return {
				...state,
				recipe: {...state.recipe,
					editableTitle: !state.recipe.editableTitle 
				}	
			};
		}

	case TOGGLE_SERVINGS: {
			const { } = action.payload;
			return {
				...state,
				recipe: {...state.recipe,
					editableServings: !state.recipe.editableServings 
				}	
			};
	}

		case UPDATE_TITLE: {
			const { title } = action.payload;
			return {
				...state,
				recipe: {...state.recipe,
					title: title
				}
			};
		}

		case UPDATE_SERVINGS: {
			const { servings } = action.payload;
			return {
				...state,
				recipe: {...state.recipe,
					servings: servings
				}
			};
		}

		default: return state;}

}
