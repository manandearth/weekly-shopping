import { ADD_PRODUCT, REMOVE_PRODUCT, UPDATE_PRODUCT_TITLE, ADD_FORMAT, REMOVE_FORMAT } from '../actionTypes.js';

const initialState = {
	
		'salt': [{qty: 1, unit: 'kg'}, {qty: 500, unit: 'gr'}],
		'rice': [{qty: 1, unit: 'kg'}],
		'unsalted butter': [{qty: 250, unit: 'gr'}],
		'salted butter': [{qty: 250, 'unit': 'gr'}],
		'whole milk': [{qty: 1, unit: 'litre'}],
		'semiskimmed milk': [{qty: 1, unit: 'litre'}],
		'caster sugar': [{qty: 1, unit: 'kg'}],
		'potatoes': [{qty: 2, unit: 'kg'}, {qty: 3, unit: 'kg'}, {qty: 5, unit: 'kg'}]};

export default function(state = initialState, action) {
	switch (action.type) {
		case ADD_PRODUCT: {
			const { product, formats } = action.payload;
			return {
				product,
				formats };
		}
			
		case REMOVE_PRODUCT: {
			const { product } = action.payload;
			const newState = Object.assign({}, state);
			delete newState[product];
			return newState;
		}
			
		case UPDATE_PRODUCT_TITLE: {
			const { product, newTitle } = action.payload;
			state[newTitle] = state[product];
			delete state[product];
			return {...state
				
				 };
		}

		case ADD_FORMAT: {
			const { product, qty, unit } = action.payload;
			return{ ...state,
				[product]: [...state[product],
					{qty: qty, unit: unit}
				]};
		}

		case REMOVE_FORMAT: {
			const { product, id } = action.playload;
			const newState = Object.assign({}, state);
			delete newState[product][id];
			return {...newState};
		}

		default: return state;
	}
}

