import React from 'react';
import './RecipeList.css';
import { connect } from 'react-redux';
import _ from 'lodash';
import { selectRecipe } from '../redux/actions';

class  RecipeList extends React.Component {

  handleClick = (recipe) => this.props.selectRecipe(recipe);
  
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
    recipes: state.recipes
  };
}

export default connect(mapStateToProps, { selectRecipe })(RecipeList);
