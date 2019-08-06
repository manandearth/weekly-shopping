import React from 'react';
import { connect } from 'react-redux';
import { getWeekArray, getProducts, getRecipes, getWeek } from '../redux/selectors';
import { units } from '../constants/shared';
import _ from 'lodash';


//MEASUREMENT HELPER FUNCTIONS:
const convertKgGr = (qty) => qty * 1000;
const convertKgLb = (qty) => qty * 0.4535924;
const convertKgOz = (qty) => qty * 0.02834952;

const convertGrKg = (qty) => qty / 1000;
const convertGrLb = (qty) => qty * 0.002204623;
const convertGrOz = (qty) => qty * 28.34952;

const convertLitreMl = (qty) => qty * 1000;
const convertMlLitre = (qty) => qty / 1000;

const convertTsbpGr = (qty) => qty * 12.78;

const convertTspGr = (qty) => qty * 4.92;

const convertLbKg = (qty) => qty * 2.204623;
const convertLbGr = (qty) => qty * 2204.623;
const covertLbOz = (qty) => qty * 0.0625;

const convertOzKg = (qty) => qty * 35.27396;
const convertOzLb = (qty) => qty * 16;
const convertOzGr = (qty) => qty * 0.03527396;

      
const CalcDishes = (props) => {
  const weekArray = props.weekArray;
  const products = props.products;
  const recipes = props.recipes;
  const week = props.week;

  const unitConverter = (name, qty, unit) => {
    if (unit === products[name][0].unit) //just testing...
    {return ([name, qty, unit]);}
    switch (unit) {
      case 'kg': {
        switch (products[name].unit) {
          case 'gr': {
            const newQty = convertKgGr(qty);
            return([name, newQty, 'gr']);
          }
          case 'oz': {
            const newQty = convertKgOz(qty);
            return([name, newQty, 'oz']);
          }
          case 'lb': {
            const newQty = convertKgLb(qty);
            return([name, newQty, 'lb']);
          } 
          default: return([name, qty, unit]);
        }
      }
      case 'gr': {
        switch (products[name].unit) {
          case 'kg': {
            const newQty = convertGrKg(qty);
            return([name, newQty, 'kg']);
          }
          case 'oz': {
            const newQty = convertGrOz(qty);
            return ([name, newQty, 'oz']);
          }
          case 'lb': {
            const newQty = convertGrLb(qty);
            return([name, newQty, 'lb']);
          }
          default: return([name, qty, unit]);
        }
      }
  };
  }
  
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
