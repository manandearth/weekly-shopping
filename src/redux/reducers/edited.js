import _ from 'lodash';
import { EDIT_RECIPE, TOGGLE_TITLE, TOGGLE_SERVINGS, UPDATE_TITLE, UPDATE_SERVINGS, TOGGLE_TABLE, UPDATE_TABLE, RESET_EDIT, ADD_INGREDIENT } from '../actionTypes';

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

		case TOGGLE_TABLE: {
			const { id, className } = action.payload;
			return {
				...state,
				recipe: {...state.recipe,
					ingredients: {...state.recipe.ingredients,
						[id]: {...state.recipe.ingredients[id],
							editable: className
						}
					}
				}
			};
		}

		case UPDATE_TABLE: {
			const { id, className, value } = action.payload;
			return {
				...state,
				recipe: {...state.recipe,
					ingredients: {...state.recipe.ingredients,
						[id]: {...state.recipe.ingredients[id],
							[className]: value
						}
					}
				}
			};
		}
			
	
		case RESET_EDIT: {
			return {...state,
				recipe: {}
			};
		}

		case ADD_INGREDIENT: {
			const existingIngredients = _.keys(state.recipe.ingredients).length;
			return {...state,
				recipe: {...state.recipe,
					ingredients: {...state.recipe.ingredients,
						[existingIngredients + 1]: {name: 'new ingredient', qty: 1, unit: 'kg'}
					}
				}
			};
		}
		default: return state;}

}
