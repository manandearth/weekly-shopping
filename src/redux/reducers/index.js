import { combineReducers } from "redux";
import recipes from './recipes';
import selections from './selections';
import editedRecipe from './edited.js';
export default combineReducers({ recipes, selections, editedRecipe });
