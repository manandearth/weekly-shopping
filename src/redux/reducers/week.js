import _ from 'lodash';
import { ADD_CELL, REMOVE_CELL, TOGGLE_FIELD, UPDATE_CELL } from '../actionTypes';

const initialState = {
	 
};

function renameKey (key) {
	const splitKey = key.split('-');
	return splitKey[0] + '-' + (splitKey[1]- 1);
}

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
					servings: 1
				} 
			};
		}
			
		case REMOVE_CELL: {
			const { cellID } = action.payload;
			const weekday = cellID.split('-')[0];
			const column = _.keys(state).filter(key => key.split('-')[0] === weekday);
			const biggerThanRemoved = column.filter(key => parseInt(key.split('-')[1]) > parseInt(cellID.split('-')[1]));
			const newState = Object.assign({}, state);
			delete newState[cellID];
			_.keys(newState).map(key => {
				if (biggerThanRemoved.includes(key))  {
					newState[renameKey(key)] = newState[key];
					delete newState[key];}});
		 
			return {...newState
			};
			
		}

		case TOGGLE_FIELD: {
			const { cellID, field } = action.payload;
			return {...state,
				[cellID]: {...state[cellID],
					[field]: !state[cellID][field]
				}
			};
		}

		case UPDATE_CELL: {
			const { cellID, field, value } = action.payload;
			return {...state,
				[cellID]:{...state[cellID],
					[field]: value}
			};
		}

		default: return state;}
	
}
	

	
