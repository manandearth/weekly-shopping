import React from 'react';
import './Cell.css';
import { getRecipes, getWeek } from '../redux/selectors';
import { addCell, removeCell, toggleField, updateCell } from '../redux/actions';
import { connect } from 'react-redux';
import _ from 'lodash';

class Cell extends React.Component {
 
  //helper to capitalize the name property where necessary
  titleCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  
  // handleAddMeal = () => {
  //   this.setState({editable: !this.state.editable});
  // }

  handleRemoveMeal = ( id ) => {
    this.props.removeCell( id );
  }

  handleToggleEdit = (cellID, field) =>
    this.props.toggleField(cellID, field);

  handleUpdateInput = ( e, cellID ) => {
    const value = e.target.value;
    const field = e.target.name;
    this.props.updateCell(cellID, field, value);
  }
  
  handleEnterKey = (e, cellID) => {
    const keyCode = e.keyCode || e.which;
    const field = 'editable' + this.titleCase(e.target.name);
    if (keyCode === 13) {
      this.props.toggleField(cellID, field);
    }
  }

  handleBlur = (e, cellID) => {
    const field = 'editable' + this.titleCase(e.target.name);
    this.props.toggleField(cellID, field);
  }

  render () {
    const cellID = this.props.cellID;
    
		return(
      <div className='cell'>
        {this.props.week[cellID] && this.props.week[cellID].editable === true
          ? 
          <div>
            <span
              className='cross'
              onClick={() => this.handleRemoveMeal(cellID)}
            >x</span>
            {this.props.week[cellID].editableDish === false ?
              <h2
                onClick={() => this.handleToggleEdit(cellID, 'editableDish')}
                 >
                {'Dish: ' + this.props.week[cellID].dish}</h2> :
              <div><input
                     type='text'
                     name='dish'
                     onKeyDown={(e) => this.handleEnterKey(e, cellID)}
                     onChange={e => this.handleUpdateInput(e, cellID)}
                     onBlur={(e) => this.handleBlur(e, cellID)}
                     list='dishes'
                     value={this.props.week.dish}
                   autoFocus/>
                 <datalist id='dishes'>
                   {_.keys(this.props.recipes).map(recipe => (
                     <option value={recipe} />))}
                </datalist>
              </div>
              }
          {this.props.week[cellID].editableServings === false ?
            <h2
              onClick={() => this.handleToggleEdit(cellID, 'editableServings')}
            >{'Servings:' + this.props.week[cellID].servings}</h2>
            :
            <input
              name='servings'
              type='number'
              value={this.props.week[cellID].servings}
              min='1'
              step='1'
              onKeyDown={(e) => this.handleEnterKey(e, cellID)}
              onChange={e => this.handleUpdateInput(e, cellID)}
              onFocus={e => e.target.select()}
              onBlur={(e) => this.handleBlur(e, cellID)}
              autoFocus
            ></input>}
          </div>
          :
          <p
            className='plus'
            onClick=
              {() => this.props.addCell( cellID ) }
              /* {this.handleAddMeal} */
          >+</p>
        }
      </div>
    );
  }
}
	
const mapStateToProps = state => {
  const recipes = getRecipes(state);
  const week = getWeek(state);
  return {
    recipes,
    week
  };
  
};


export default connect(mapStateToProps, { addCell, removeCell, toggleField, updateCell })(Cell);
