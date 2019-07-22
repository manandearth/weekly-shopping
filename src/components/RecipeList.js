import React from 'react';
import './RecipeList.css';
import { connect } from 'react-redux';
import _ from 'lodash';
import { editRecipe, selectRecipe } from '../redux/actions';
import { getSelectedToEdit } from '../redux/selectors';
class  RecipeList extends React.Component {

  handleClick = (recipe) => {
    setTimeout(() => {
    this.props.selectRecipe(recipe);
      this.props.editRecipe(this.props.selected);}, 1000);
  }
  
  render (){
    const recipes = this.props.recipes;

		return(
			<div className='recipe-list'>
        <h2 className='title'>The recipes</h2>
        <div className='recipe-list-block'>
          {_.keys(this.props.recipes).map((id) =>
            <button className='recipe-list-item'
                    key={'recipe-' + id}
                    onClick={() => this.handleClick(id)}
            >{id}</button>)}  
        </div>
      </div>
    );
	}
}


//REACT_REDUX BIT:

function mapStateToProps(state) {
  return {
    recipes: state.recipes,
    selected: getSelectedToEdit(state)
  };
}

export default connect(mapStateToProps, { editRecipe, selectRecipe })(RecipeList);
