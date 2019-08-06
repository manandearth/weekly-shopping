import React from 'react';
import { connect } from 'react-redux';
import { getWeekArray, getProducts, getRecipes, getWeek } from '../redux/selectors';
import _ from 'lodash';

const CalcDishes = (props) => {
  const weekArray = props.weekArray;
  const products = props.products;
  const recipes = props.recipes;
  const week = props.week;

  const allMeals = (weekArray && weekArray !== undefined) ?
        weekArray.map( ([dish, servings])  =>
          recipes[dish] ? _.keys(recipes[dish].ingredients).map(
            ingredient =>
              (<p>{
                recipes[dish].ingredients[ingredient].name + ' ' +
                  recipes[dish].ingredients[ingredient].qty *
                  (servings /
                    recipes[dish].servings) + ' ' +
                  recipes[dish].ingredients[ingredient].unit
              }</p>)) : dish)
        : "nothing here...";
            
  // const allIngredients = allMeals ?
  //       allMeals.map(meal =>
  //   recipes[meal.dish] ?
  //   recipes[meal.dish].ingredients
  //         : null) : null;
  
  return (<div>{allMeals}</div>);
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
