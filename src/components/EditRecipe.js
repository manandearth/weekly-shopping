import React from 'react';
import { connect } from 'react-redux';
import _ from  'lodash';
import RecipeTopLevel from './RecipeTopLevel.js';
import RecipeIngredientsTable from './RecipeIngredientsTable';
import { getSelectedRecipe, getSelectedServings, getSelectedIngredients } from '../redux/selectors';

class EditRecipe extends React.Component {

	render() {
		return (
        <div className='edit-recipe'>
          <RecipeTopLevel
            topBar={'Edit recipe'}
            title={this.props.recipe}
            servings={this.props.servings}
          />
          <EditRecipeIngredientsTable
            ingredients={this.props.ingredients}
          />
        </div>
    );
  }
}

class EditRecipeIngredientsTable extends React.Component {

	render(props) {
    return(
      <div>
        <RecipeIngredientsTable
          /* onAddIngredient={this.props.onAddIngredient} */
          ingredients={this.props.ingredients}
          /* onTableChange={this.props.onTableChange} */
          /* onTableClick={this.props.onTableClick} */
          /* onTableEnterKey={this.props.onTableEnterKey} */
          /* onTableBlur={this.props.onTableBlur} */
        />
      </div>
	  );
  }
}

//REACT-REDUX

const mapStateToProps = state => {
  // const { selectedRecipe, recipes } = state;
  const recipe = getSelectedRecipe(state);
  const servings = getSelectedServings(state);
  const ingredients = getSelectedIngredients(state);
  // const ingredients = {1:{name: 'foo', unit: 'kg', qty: 99}};
  return {
    recipe,
    servings,
    ingredients
  };
};


export default connect(mapStateToProps)(EditRecipe);



