import React from 'react';
import { connect } from 'react-redux';
import _ from  'lodash';
import RecipeTopLevel from './RecipeTopLevel.js';
import { getSelectedRecipe, getSelectedServings } from '../redux/selectors';

class EditRecipe extends React.Component {

	render() {
		return (
        <div className='edit-recipe'>
         
          <RecipeTopLevel
            topBar={'Edit recipe'}
            title={this.props.recipe}
            servings={this.props.servings}
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
  return {
    recipe,
    servings
  };
};


export default connect(mapStateToProps)(EditRecipe);



