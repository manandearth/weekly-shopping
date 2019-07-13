import { ADD_RECIPE } from "../actionTypes";

const initialState = {
		
		'rice pudding': {
				title: 'rice pudding',
				servings: 2,
				ingredientes: {
						1: {
								name: 'rice',
								qty: 50,
								unit: 'gr'},
						2: {
								name: 'unsalted butter',
								qty: 25,
								unit: 'gr'},
						3: {
								name: 'whole milk',
								qty: 500,
								unit: 'ml'},
						4: {
								name: 'caster sugar',
								qty: 25,
								unit: 'gr'}
						
				}
		},
		'mash potatoes': {
				title: 'mash potatoes',
				servings: 5,
				ingredientes: {
						1: {
								name: 'potatoes',
								qty: 1,
								unit: 'kg'},
						2: {
								name: 'whole milk',
								qty: 250,
								unit: 'ml'},
						3: {
								name: 'butter',
								qty: 50,
								unit: 'gr'},
						4: {
								name: 'salt',
								qty: 2,
								unit: 'gr'}}
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
		default: return state;}
}
