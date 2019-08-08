import React from 'react';
import { connect } from 'react-redux';
import { getWeekArray, getProducts, getRecipes, getWeek } from '../redux/selectors';
import { unitsMap, unit } from '../constants/shared';
import { weightToGramms, volumeToMl } from '../utilities/unitConversion';
import _ from 'lodash';

const CalcDishes = (props) => {
  const weekArray = props.weekArray;
  const products = props.products;
  const recipes = props.recipes;
  const week = props.week;

  const unitConverter = (name, qty, unit) => {
    if (unitsMap.weight.includes(unit)) {
      const newQty = weightToGramms(qty, unit);
      return({name: name, qty: newQty, unit: 'gr'});
    }
    else if (unitsMap.volume.includes(unit)) {
      const newQty = volumeToMl(qty, unit);
      return({name: name, qty: newQty, unit:'ml'});
    }
    else if (unitsMap.units.includes(unit)) {
      return ({name: name, qty: qty,unit: unit});
    }
    else return ({name: name, qty: qty, unit: unit});
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

  const combinedLodash =
        (_.isArray(converted) && _.isObject(converted[0])) ?
         _(converted.flat()
         ).groupBy('name').map((objs, key) =>
           ({name: key, qty: _.sumBy(objs, 'qty')})).value()
        :
    null;

  const combined = 
        (_.isArray(converted)  && _.isObject(converted[0]))
        ?
        converted.flat()
        .reduce((a, c) => {
          (a[c.name] || (a[c.name] = [c.unit]))
            .push(c.qty);
          return a;
        }
          , [])
    :
    null;

  const summed =
        (_.isArray(converted)  && _.isObject(converted[0]))
        ?
         _.keys(combined).map(product =>
          { const [unit, ...rest] = combined[product];
            const summedValues = rest.reduce((a, c) => a + c, 0);
            return( {[product]: summedValues });})
          :
          null;


  
  const handleConversion = () => console.log(summed);
   
  return (<div>
              <h2>The total of ingredients is:</h2>
              <div>{allMeals}</div>
              <h2>Which translates to:</h2>
              {/* <div>{converted}</div> */}
            <h2> now combining:</h2>
            <div><h1 onClick={handleConversion}>click to try</h1>
              <h3>{'a'}</h3></div>
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
