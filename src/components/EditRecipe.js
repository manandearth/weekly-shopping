import React from 'react';
import { connect } from 'react-redux';
import _ from  'lodash';
import RecipeTopLevel from './RecipeTopLevel.js';
import RecipeIngredientsTable from './RecipeIngredientsTable';
import { toggleTitle, toggleServings } from '../redux/actions';
import { getSelectedRecipe, getSelectedServings, getSelectedIngredients, getSelectedEditableServings, getSelectedEditableTitle  } from '../redux/selectors';
import { editRecipeTitlePH } from '../constants/placeholders';

class EditRecipe extends React.Component {

  handleTitleClick = (e) =>
    e.target.innerHTML !== editRecipeTitlePH ?
    this.props.toggleTitle(e.target.innerHTML) :
      null;
  
	render(props) {
		return (
        <div className='edit-recipe'>
          <RecipeTopLevel
            topBar={'Edit recipe'}
            title={this.props.recipe}
            editableTitle={this.props.editableTitle}
            editableServings={this.props.editableServings}
            servings={this.props.servings}
            onTitleClick={this.handleTitleClick}
            onServingsClick={() =>  this.props.toggleServings(this.props.recipe, this.props.servings)}
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
          onAddIngredient={this.props.onAddIngredient}
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
  const editableTitle = getSelectedEditableTitle(state);
  const editableServings = getSelectedEditableServings(state);
  // const ingredients = {1:{name: 'foo', unit: 'kg', qty: 99}};
  return {
    recipe,
    servings,
    ingredients,
    editableTitle,
    editableServings
    
  };
};

export default connect(mapStateToProps, { toggleTitle, toggleServings })(EditRecipe);



