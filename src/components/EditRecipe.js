import  React, { useEffect }  from 'react';
import { connect } from 'react-redux';
import _ from  'lodash';
import RecipeTopLevel from './RecipeTopLevel.js';
import RecipeIngredientsTable from './RecipeIngredientsTable';
import { toggleTitle, toggleServings, updateTitle } from '../redux/actions';
import {  getSelectedFromRecipes, getSelectedRecipe, getSelectedServings, getSelectedIngredients, getSelectedEditableServings, getSelectedEditableTitle  } from '../redux/selectors';
import { editRecipeTitlePH } from '../constants/placeholders';

class EditRecipe extends React.Component {

  constructor(props) {
    super(props);
  }
  
  handleTitleClick = (e) =>
    e.target.innerHTML !== editRecipeTitlePH ?
    this.props.toggleTitle(e.target.innerHTML) :
    null;
  
  handleServingsClick = ( recipe, servings ) =>
    servings !== '' ?
    this.props.toggleServings(recipe, servings) :
    null;

  handleUpdateTitle = title => {
    this.props.updateTitle(this.props.recipe, title);
  }

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
            onUpdateTitle={this.handleUpdateTitle}
            onServingsClick={() => this.handleServingsClick(this.props.recipe, this.props.servings)}
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
  const selectedRecipe = getSelectedFromRecipes(state);
  const recipe = getSelectedRecipe(state);
  const servings = getSelectedServings(state);
  const ingredients = getSelectedIngredients(state);
  const editableTitle = getSelectedEditableTitle(state);
  const editableServings = getSelectedEditableServings(state);
  // const ingredients = {1:{name: 'foo', unit: 'kg', qty: 99}};
  return {
    selectedRecipe,
    recipe,
    servings,
    ingredients,
    editableTitle,
    editableServings
  };
};

export default connect(mapStateToProps, { toggleTitle, toggleServings, updateTitle })(EditRecipe);



