import React from 'react';
import { connect } from 'react-redux';
import _ from  'lodash';
import RecipeTopLevel from './RecipeTopLevel.js';

class EditRecipe extends React.Component {

	render() {
		return (
        <div className='edit-recipe'>
         
          <RecipeTopLevel
            topBar={'Edit recipe'}/>
        </div>
    );
	}
}

//REACT-REDUX

function mapStateToProps(state) {
  return {
    recipes: state.recipes
  };
}

export default connect(mapStateToProps)(EditRecipe);



