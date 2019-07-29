import _ from 'lodash';
import { ADD_CELL, REMOVE_CELL, TOGGLE_FIELD } from '../actionTypes';

const initialState = {
	 
};

export default function(state = initialState, action) {
	switch (action.type) {
    case ADD_CELL: {
			const { cellID } = action.payload;
      return {...state,
				[cellID]: {
					editable: true,
					editableDish: false,
					dish: '',
					editableServings: false,
					servings: 0
				} 
			};
		}
			
		case REMOVE_CELL: {
			const { cellID } = action.payload;
			const newState = Object.assign({}, state);
			delete newState[cellID];
			return newState;
			};

		case TOGGLE_FIELD: {
			const { cellID, field } = action.payload;
			return {...state,
				[cellID]: {...state[cellID],
					[field]: !state[cellID][field]
				}
			};
		}

		default: return state;}

}
