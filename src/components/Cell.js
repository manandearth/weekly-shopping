import React from 'react';
import './Cell.css';

class Cell extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      editable: false,
      editableDish: false,
      dish:'',
      editableServings: false,
      servings: 0
    };
    
  }
  
  handleAddMeal = () => {
    this.setState({editable: !this.state.editable});
  }

  handleRemoveMeal = () => {
    this.setState({editable: !this.state.editable});
  }

  handleToggleEdit = (field) =>
    this.setState({[field]: !this.state[field]});

  handleEnterKey = (e) => {
    const keyCode = e.keyCode || e.which;
    const field = e.target.name;
    if (keyCode === 13) {
      this.setState({[field]: !this.state[field]});
    }
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
            {this.state.editableDish === false ?
              <h2
                onClick={() => this.handleToggleEdit('editableDish')}
                 >
                Dish:</h2> :
              <input
                name='editableDish'
                 onKeyDown={this.handleEnterKey}
              ></input>}
          {this.state.editableServings === false ?
            <h2
              onClick={() => this.handleToggleEdit('editableServings')}
            >Servings:</h2>
            :
            <input></input>}
          </div>
          
        }
      </div>
    );
  }
}
	


export default Cell;
