import React from 'react';
import { connect } from 'react-redux';
import { addRecipe } from '../redux/actions.js';
class SubmitRecipe extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(props) {
    const title = this.props.title;
    const servings = this.props.servings;
    const ingredients = this.props.ingredients;
    this.props.addRecipe(
      title, {
        title: title,
        servings: servings,
        ingredients: ingredients});
    console.log(title);
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
