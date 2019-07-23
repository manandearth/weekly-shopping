import  React  from 'react';
import { connect } from 'react-redux';
import _ from  'lodash';
import RecipeTopLevel from './RecipeTopLevel.js';
import RecipeIngredientsTable from './RecipeIngredientsTable';
import { toggleTitle, toggleServings, updateTitle } from '../redux/actions';
import { getEdited } from '../redux/selectors';
import { editRecipeTitlePH } from '../constants/placeholders';

class EditRecipe extends React.Component {

  handleGetIngredients = ( ingredients ) =>
    ingredients ?
    ingredients  :
    {};

  handleGetServings = ( servings ) =>
    servings ?
    servings : 0;

  handleGetTitle = ( title ) =>
    title ?
    title :
    editRecipeTitlePH;
  
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
            title={this.handleGetTitle(this.props.edited.title)}
            editableTitle={this.props.edited.editableTitle}
            editableServings={this.props.edited.editableServings}
            servings={this.handleGetServings(this.props.edited.servings)}
            onTitleClick={this.handleTitleClick}
            onUpdateTitle={() => this.handleUpdateTitle}
            onServingsClick={() => this.handleServingsClick(this.props.recipe, this.props.servings)}
          />
          <EditRecipeIngredientsTable
            key={'ingredients-' + this.props.edited.title}
            onIngredients={this.handleGetIngredients(this.props.edited.ingredients)}
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
          ingredients={this.props.onIngredients}
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
  const edited = getEdited(state);
  // const ingredients = {1:{name: 'foo', unit: 'kg', qty: 99}};
  return {
    edited
  };
};

export default connect(mapStateToProps, { toggleTitle, toggleServings, updateTitle })(EditRecipe);



