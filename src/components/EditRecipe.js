import  React, { useEffect }  from 'react';
import { connect } from 'react-redux';
import _ from  'lodash';
import RecipeTopLevel from './RecipeTopLevel.js';
import RecipeIngredientsTable from './RecipeIngredientsTable';
import { toggleTitle, toggleServings, updateTitle } from '../redux/actions';
import { getEdited,  getSelectedFromRecipes, getSelectedRecipe, getSelectedIngredients } from '../redux/selectors';
import { editRecipeTitlePH } from '../constants/placeholders';

class EditRecipe extends React.Component {

  constructor(props) {
    super(props);
    // this.handleGetIngredients = this.handleGetIngredients.bind(this);
  }


  handleGetIngredients = () => 
    this.props.edited.ingredients ?
    {1: {name: 's', qty: 8, unit: 'kg'}} :
  {1: {name: 't', qty: 5, unit: 'litre'}};
  
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
    const here = {
      1: {unit: 'kg', qty: 2, name: 'hummus'},
      2: {unit: 'litre', qty: 3, name: 'tahini'}
    };
    const there = this.props.edited.ingredients;
		return (
        <div className='edit-recipe'>
          <RecipeTopLevel
            topBar={'Edit recipe'}
            title={this.props.edited.title}
            editableTitle={this.props.edited.editableTitle}
            editableServings={this.props.edited.editableServings}
            servings={this.props.edited.servings}
            onTitleClick={this.handleTitleClick}
            onUpdateTitle={this.handleUpdateTitle}
            onServingsClick={() => this.handleServingsClick(this.props.recipe, this.props.servings)}
          />
          <EditRecipeIngredientsTable
            ingredients={this.handleGetIngredients}
              /* {this.handleGetIngredients} */
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
  const ingredients = getSelectedIngredients(state);
  const edited = getEdited(state);
  // const ingredients = {1:{name: 'foo', unit: 'kg', qty: 99}};
  return {
    edited,
    selectedRecipe,
    recipe
  };
};

export default connect(mapStateToProps, { toggleTitle, toggleServings, updateTitle })(EditRecipe);



