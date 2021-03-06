import React from 'react';
import PropTypes from 'prop-types';
import { units } from '../constants/shared';
import { getProducts } from '../redux/selectors';
import { connect } from 'react-redux';
import _ from 'lodash';

class RecipeIngredientsTable extends React.Component {
	
  render(props) {
    const ingredients = this.props.ingredients;

    return(
      <div>
        <div> <input className='button'
                     type='submit'
                     value='Add ingredient'
                     onClick={this.props.onAddIngredient}
              />
        </div>
        <table className='new-ingredients-table'>
          <tbody>
            <tr>
              <th>ingredient</th>
              <th>Qty.</th>
              <th>Unit</th>
            </tr>
            {Object.keys(ingredients).map((k) => (
              <tr key={'ingredient-row-' + k}>
                {ingredients[k].editable === 'name' ?
                  <td><input
                        className='name'
                        id={k}
                        list='pantry'
                        value={ingredients[k].name}
                        onChange={e => this.props.onTableChange(e)}
                        onKeyDown={this.props.onTableEnterKey}
                        onBlur={this.props.onTableBlur}
                        onFocus={e => e.target.select()}
                        autoFocus />
                    <datalist id='pantry'>
                      {_.keys(this.props.pantry).map(
                        product => <option>{product}</option>)}
                    </datalist>
                 </td> :
                  <td
                    id={k}
                    className='name'
                    onClick={this.props.onTableClick}
                  >{ingredients[k].name}</td> }
                
                <td>
                  {ingredients[k].editable === 'qty' ?
                    <input
                      className='qty'
                      id={k}
                      type='number'
                      min='0'
                      value={ingredients[k].qty}
                      onChange={e => this.props.onTableChange(e)}
                      onKeyDown={this.props.onTableEnterKey}
                      onBlur={this.props.onTableBlur}
                      onFocus={e => e.target.select()}
                      autoFocus
                      required></input> :
                    <span
                      id={k}
                      className='qty'
                      onClick={this.props.onTableClick}
                    >{ingredients[k].qty}</span> }
                </td>
                <td
                  
                >{ingredients[k].editable === 'unit' ?
                  <select
                    type='list'
                    name='unit'
                    className='unit'
                    id={k}
                    onChange={this.props.onTableChange}
                    onBlur={this.props.onTableBlur}>
                    {units.map((u) => (<option key={'unit-list-item-' + u} >{u}</option>))}
                  </select>
                  :
                  <span
                    id={k}
                    className='unit'
                    onClick={this.props.onTableClick}
                  >{ingredients[k].unit}</span> }</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>);
  }
}

RecipeIngredientsTable.propTypes = {
  qty: PropTypes.number,
  unit: PropTypes.string,
  name: PropTypes.string
  
};

const mapToProps = state => {
  const pantry = getProducts(state);
  return {
pantry
  };
};

export default connect(mapToProps)(RecipeIngredientsTable);
