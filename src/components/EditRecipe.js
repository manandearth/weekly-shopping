import React from 'react';
import { connect } from 'react-redux';
import _ from  'lodash';
import RecipeTopLevel from './RecipeTopLevel.js';
import { getSelectedRecipe } from '../redux/selectors';

class EditRecipe extends React.Component {

	render() {
		return (
        <div className='edit-recipe'>
         
          <RecipeTopLevel
            topBar={'Edit recipe'}
            title={toString(this.props.recipes)}
          />
        </div>
      );
	
}
}
//REACT-REDUX

function mapStateToProps (state) {
  return {
    recipes: state.recipes,
    selectedRecipe: getSelectedRecipe
  };
}

export default connect(mapStateToProps)(EditRecipe);



