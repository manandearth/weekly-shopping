import React from 'react';

export default class NewRecipeIngredientsTable extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(props) {
        const ingredients = this.props.ingredients;
        const unitSet = ['kg', 'gr', 'ml', 'litre', 'tsp', 'tbsp', 'cup', 'lbs', 'oz' ];

        return(
            <div>
             <div> <input className='button'
                          type='submit'
                          value='Add ingredient'
                          onClick={this.props.onAddIngredient}
                          />
             </div>
                  <table className='new-ingredients-table'>
                  <tr>
                    <th>ingredient</th>
                    <th>Qty.</th>
                    <th>Unit</th>
                  </tr>
                    {Object.keys(ingredients).map((k) => (
                <tr>
                  {ingredients[k].editable === 'name' ?
                      <input
                        className='name'
                        id={k}
                        value={ingredients[k].name}
                        onChange={e => this.props.onTableChange(e)}
                        onKeyDown={this.props.onTableEnterKey}
                        onBlur={this.props.onTableBlur}
                        onFocus={e => e.target.select()}
                        autoFocus
                       ></input> :
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
                               value={ingredients[k].qty}
                             onChange={e => this.props.onTableChange(e)}
                        onKeyDown={this.props.onTableEnterKey}
                               onBlur={this.props.onTableBlur}
                               onFocus={e => e.target.select()}
                               autoFocus></input> :
                             <td
                               id={k}
                               className='qty'
                               onClick={this.props.onTableClick}
                             >{ingredients[k].qty}</td> }
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
                             {unitSet.map((u) => (<option key={'unit-list-item-' + u} >{u}</option>))}
                           </select>
                           :
                             <td
                               id={k}
                               className='unit'
                               onClick={this.props.onTableClick}
                             >{ingredients[k].unit}</td> }</td>
                     </tr>
                    ))}
                  </table>
        </div>);
    }
}
