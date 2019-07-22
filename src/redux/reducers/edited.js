import { EDIT_RECIPE } from '../actionTypes';

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
		default: return state;}
}
