import React from 'react';
import './Cell.css';

class Cell extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      editable: false,
      dish:'',
      servings: 0
    };
    
  }
  
  handleAddMeal = () => {
    this.setState({editable: !this.state.editable});
  }

  handleRemoveMeal = () => {
    this.setState({editable: !this.state.editable});
  }
  
  render () {
		return(
      <div className='cell'>

        {this.state.editable === false
          ? 
          <p
            className='plus'
           onClick={this.handleAddMeal}
          >+</p>
          :
          <div>
            <span
              className='cross'
              onClick={this.handleRemoveMeal}
            >x</span>
            <h2>Dish:<input></input></h2>
            <h2>Servings:<input></input></h2></div>
          
        }
      </div>
    );
  }
}
	


export default Cell;
