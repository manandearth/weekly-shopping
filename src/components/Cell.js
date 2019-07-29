import React from 'react';
import './Cell.css';
import { getRecipesState } from '../redux/selectors';
import { addCell } from '../redux/actions';
import { connect } from 'react-redux';
import _ from 'lodash';

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

  handleUpdateInput = e => {
    const value = e.target.value;
    const field = e.target.name;
  this.setState({[field]: value});
  }
  
  handleEnterKey = (e) => {
    const keyCode = e.keyCode || e.which;
    const field = 'editable' + this.titleCase(e.target.name);
    if (keyCode === 13) {
      this.setState({[field]: !this.state[field]});
    }
  }

  handleBlur = (e) => {
    const field = 'editable' + this.titleCase(e.target.name);
    this.setState({[field]: !this.state[field]});
  }

  render () {
    const cellID = this.props.cellID;
		return(
      <div className='cell'>
        {this.state.editable === false
          ? 
          <p
            className='plus'
            onClick=
              {() => this.props.addCell(cellID , "kaboom!") }
              /* {this.handleAddMeal} */
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
              <div><input
                     type='text'
                     name='dish'
                     onKeyDown={this.handleEnterKey}
                     onChange={e => this.handleUpdateInput(e)}
                     onBlur={this.handleBlur}
                     list='dishes'
                     value={this.state.dish}
                   autoFocus/>
                 <datalist id='dishes'>
                   {_.keys(this.props.recipes).map(recipe => (
                     <option value={recipe} />))}
                </datalist>
              </div>
              }
          {this.state.editableServings === false ?
            <h2
              onClick={() => this.handleToggleEdit('editableServings')}
            >{'Servings:' + this.state.servings}</h2>
            :
            <input
              name='servings'
              type='number'
              value={this.state.servings}
              min='1'
              step='1'
              onKeyDown={this.handleEnterKey}
              onChange={e => this.handleUpdateInput(e)}
              onFocus={e => e.target.select()}
              onBlur={this.handleBlur}
              autoFocus
            ></input>}
          </div>
        }
      </div>
    );
  }
}
	
const mapStateToProps = state => {
  const recipes = getRecipesState(state);
  return {
    recipes};

};


export default connect(mapStateToProps, { addCell })(Cell);
