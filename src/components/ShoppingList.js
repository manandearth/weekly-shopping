import React from 'react';
import { connect } from 'react-redux';
import { getWeekArray, getProducts, getRecipes, getWeek } from '../redux/selectors';
import { units, unitsMap } from '../constants/shared';
import { weightToGramms, volumeToMl } from '../utilities/unitConversion';
import _ from 'lodash';

const CalcDishes = (props) => {
  const weekArray = props.weekArray;
  const products = props.products;
  const recipes = props.recipes;
  const week = props.week;

  const unitConverter = (name, qty, unit) => {
    if (unitsMap.weight[unit]) {
      const newQty = weightToGramms(qty);
      return([name, newQty, 'gr']);
    }
    else if (unitsMap.volume[unit]) {
      const newQty = weightToGramms(qty);
      return([name, newQty, 'ml']);
    }
    else if (unitsMap.units[unit]) {
      return ([name, qty, unit]);
    }
    else return null;
  };
  
  const allMeals = (weekArray && weekArray !== undefined) ?
        weekArray.map( ([dish, servings])  =>
          recipes[dish] ? _.keys(recipes[dish].ingredients).map(
            ingredient => {

              const ingredientInRecipe = recipes[dish].ingredients[ingredient];
              
              return([
                ingredientInRecipe.name,
                ingredientInRecipe.qty * (servings / recipes[dish].servings),
                recipes[dish].ingredients[ingredient].unit
              ]);
            })
          : dish)
        : null;

  const converted = (allMeals && allMeals !== undefined) ?
        allMeals.map(ingredients => _.isArray(ingredients) ? //isArray means it was a dish recognised in store/recipes (AllMeals)
          ingredients.map(([name, qty, unit]) =>
            unitConverter(name, qty, unit)   
            )  : '#' + ingredients + '#')
        : null;
  
  return (<div>
            <h2>The total of ingredients is:</h2>
            <div>{allMeals}</div>
            <h2>Which translates to:</h2>
            <div>{converted}</div>
          </div>);
};


const ShoppingList = (props) => {

  const weekArray = props.weekArray;
  
  return(
    <div>
      <h2 className='button'>Show me the shopping list for this week, please.</h2>
      {_.isEmpty(weekArray) ?
        <p>'waiting...'</p>
        :
        <CalcDishes
          week={props.week}
          weekArray={props.weekArray}
          products={props.products}
          recipes={props.recipes} />}
      
    </div>);
	

};

const mapStateToProps = state => {
  const week = getWeek(state);
  const weekArray = getWeekArray(state);
  const products = getProducts(state);
  const recipes = getRecipes(state);
  return {
    week,
    weekArray,
    products,
    recipes
  };
};


export default connect(mapStateToProps)(ShoppingList);
