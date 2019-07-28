import { ADD_PRODUCT } from '../actionTypes.js';

const initialState = {
	pantry: {
		'salt': [{qty: 1, unit: 'kg'}, {qty: 500, unit: 'gr'}],
		'rice': [{qty: 1, unit: 'kg'}],
		'unsalted butter': [{qty: 250, unit: 'gr'}],
		'salted butter': [{qty: 250, 'unit': 'gr'}],
		'whole milk': [{qty: 1, unit: 'litre'}],
		'semiskimmed milk': [{qty: 1, unit: 'litre'}],
		'caster sugar': [{qty: 1, unit: 'kg'}],
		'potatoes': [{qty: 2, unit: 'kg'}, {qty: 3, unit: 'kg'}, {qty: 5, unit: 'kg'}]}
};

export default function(state = initialState, action) {
	switch (action.type) {
		case ADD_PRODUCT: {
			const { product, formats } = action.payload;
			return {
				product,
				formats
			};
		}
		default: return state;
	}
}

