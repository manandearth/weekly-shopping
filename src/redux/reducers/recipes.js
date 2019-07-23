import _ from 'lodash';
import { ADD_RECIPE, TOGGLE_TITLE, TOGGLE_SERVINGS, UPDATE_TITLE } from "../actionTypes";

const initialState = {
	
	'rice pudding': {
		title: 'rice pudding',
		servings: 2,
		editableTitle: false,
		editableServings: false,
		ingredients: {
			1: {
				name: 'rice',
				qty: 50,
				unit: 'gr',
				editable: null},
			2: {
				name: 'unsalted butter',
				qty: 25,
				unit: 'gr',
				editable: null},
			3: {
				name: 'whole milk',
				qty: 500,
				unit: 'ml',
				editable: null},
			4: {
				name: 'caster sugar',
				qty: 25,
				unit: 'gr',
				editable: null}
			
		}
	},
	'mash potatoes': {
		title: 'mash potatoes',
		editableTitle: false,
		editableServings: false,
		servings: 5,
		ingredients: {
			1: {
				name: 'potatoes',
				qty: 1,
				unit: 'kg',
				editable: null},
			2: {
				name: 'whole milk',
				qty: 250,
				unit: 'ml',
				editable: null},
			3: {
				name: 'butter',
				qty: 50,
				unit: 'gr',
				editable: null},
			4: {
				name: 'salt',
				qty: 2,
				unit: 'gr',
				editable: null}}
	}
}; 

export default function(state = initialState, action) {
	switch (action.type) {
    case ADD_RECIPE: {
			const { recipe , content } = action.payload;
      return {
        ...state,
				...state.recipes,
				[recipe]: content
      };
    }
		case TOGGLE_TITLE: {
			const { title } = action.payload;
			return {
				...state,
				[title]: {...state[title],
					editableTitle: !state[title].editableTitle 
				}	
			};
		}
		case TOGGLE_SERVINGS: {
			const { title } = action.payload;
			return {
				...state,
				[title]: {...state[title],
					editableServings: !state[title].editableServings 
				}	
			};
		}
			//TODO MAKE THIS WORK -> UPDATE THE TITLE
		case UPDATE_TITLE: {
			const { recipe, title } = action.payload;
			const tempState = {
				...state,
				[title]: {...state[recipe],
					title: title }
			};
			delete tempState[recipe];
			return (tempState);
		}
		
		default: return state;}
}
