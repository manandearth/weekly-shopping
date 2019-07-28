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

  //helper to capitalize the name property where necessary
  titleCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  
  handleAddMeal = () => {
    this.setState({editable: !this.state.editable});
  }

  handleRemoveMeal = () => {
    this.setState({editable: !this.state.editable});
  }

  handleToggleEdit = (field) =>
    this.setState({[field]: !this.state[field]});

  handleUpdateInput = dish =>
  this.setState({dish: dish});
  
  handleEnterKey = (e) => {
    const keyCode = e.keyCode || e.which;
    const field = 'editable' + this.titleCase(e.target.name);
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
                {'Dish: ' + this.state.dish }</h2> :
              <input
                name='dish'
                onKeyDown={this.handleEnterKey}
                onChange={e => this.handleUpdateInput(e.target.value)}
                value={this.state.dish}
              ></input>}
          {this.state.editableServings === false ?
            <h2
              onClick={() => this.handleToggleEdit('editableServings')}
            >Servings:</h2>
            :
            <input
              name='Servings'
              onKeyDown={this.handleEnterKey}></input>}
          </div>
          
        }
      </div>
    );
  }
}
	


export default Cell;
