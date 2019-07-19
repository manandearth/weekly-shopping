import { combineReducers } from "redux";
import recipes from './recipes';
import selections from './selections';

export default combineReducers({ recipes, selections });
