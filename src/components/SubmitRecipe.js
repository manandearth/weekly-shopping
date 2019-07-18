import React from 'react';
import { connect } from 'react-redux';
import { addRecipe } from '../redux/actions.js';

class SubmitRecipe extends React.Component {
  
  handleSubmit = (props) => {
    const title = this.props.title;
    const servings = this.props.servings;
    const ingredients = this.props.ingredients;
    //check that title has a value
    if (title === '')
    { alert('Please supply a recipe name'); }
    //check that ingredient object is not empty and `name` property was given a value.
    else if ( Object.values(ingredients).filter((v) => (v.name === 'new ingredient')).length > 0 || (Object.entries(ingredients).length === 0 && ingredients.constructor === Object))

    { alert ( 'Please supply an ingredient name' );
    } else 
    {
      this.props.addRecipe(
        title, {
          title: title,
          servings: servings,
          ingredients: ingredients});
      console.log(title);
      this.props.onSubmitReset();
    }
  }
  
  render() {
    return(
      <div>
        <button
          className='button'
      /* onClick={this.handleSubmit} */
          onClick={this.handleSubmit}
        >submit</button>
      </div>);
  }
}




export default connect(null, { addRecipe })(SubmitRecipe);
