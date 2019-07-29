import { combineReducers } from "redux";
import recipes from './recipes';
import selections from './selections';
import editedRecipe from './edited';
import pantry from './pantry';
import week from './week';
export default combineReducers({ recipes, selections, editedRecipe, pantry, week });
