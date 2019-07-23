import  React  from 'react';
import { connect } from 'react-redux';
import _ from  'lodash';
import RecipeTopLevel from './RecipeTopLevel.js';
import RecipeIngredientsTable from './RecipeIngredientsTable';
import { toggleTitle, toggleServings, updateTitle, updateServings, toggleTable } from '../redux/actions';
import { getEdited } from '../redux/selectors';
import { editRecipeTitlePH } from '../constants/placeholders';
import { inputParsers } from '../utilities/parsers';
class EditRecipe extends React.Component {

  handleGetIngredients = ( ingredients ) =>
    ingredients ?
    ingredients  :
    {};

  handleGetServings = ( servings ) =>
    servings ?
    servings : 0;

  handleGetTitle = ( title ) =>
    title || title === '' ?
    title :
    editRecipeTitlePH;
  
  handleTitleClick = (e) =>
    e.target.innerHTML !== editRecipeTitlePH ?
    this.props.toggleTitle(e.target.innerHTML) :
    null;

  handleUpdateTitle = ( title ) => {
    this.props.updateTitle( title );
  }
 
  handleTitleEnterKey = (e) => {
    const keyCode = e.keyCode || e.which;
    if (keyCode === 13) {
      this.props.toggleTitle();
    }}

    handleTitleBlur = () =>
    this.props.edited.editableTitle ?
    this.props.toggleTitle() : null;

  
  handleServingsEnterKey = (e) => {
    const keyCode = e.keyCode || e.which;
    if (keyCode === 13) {
      this.props.toggleServings();
    }}

  
  handleServingsClick = ( servings ) =>
    servings !== 0 ?
    this.props.toggleServings() :
    null;

  handleUpdateServings =  servings  =>
    this.props.updateServings( inputParsers.integer(servings) );

  handleServingsBlur = () =>
    this.props.edited.editableServings ?
    this.props.toggleServings() : null;

  handleTableClick  = (event) => {
    const ingredients = this.props.edited.ingredients;
    const target = event.target;
    const className = target.className;
    let idx = parseInt(target.id);
    this.props.toggleTable( idx, className );
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
            onTitleEnterKey={this.handleTitleEnterKey}
            onTitleBlur={this.handleTitleBlur}
            onUpdateTitle={this.handleUpdateTitle}
            onServingsClick={() => this.handleServingsClick(this.props.edited.servings)}
            onUpdateServings={this.handleUpdateServings}
            onServingsEnterKey={this.handleServingsEnterKey}
            onServingsBlur={this.handleServingsBlur}
          />
          <EditRecipeIngredientsTable
            key={'ingredients-' + this.props.edited.title}
            ingredients={this.handleGetIngredients(this.props.edited.ingredients)}
            onTableClick={this.handleTableClick}
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
          onTableClick={this.props.onTableClick}
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

export default connect(mapStateToProps, { toggleTitle, toggleServings, updateTitle, updateServings, toggleTable })(EditRecipe);



