import React from 'react';
import './RecipeList.css';
import { connect } from 'react-redux';


class RecipeList extends React.Component {
	render (){
		return(
			<div className='recipe-list'>
        <h2 className='title'>The recipes</h2>
        <div className='recipe-list-block'>
          {Object.keys(this.props.recipes).map((id) =>
            <button className='button' key={'recipe-' + id}>{id}</button>)}  
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

export default connect(mapStateToProps)(RecipeList);
