import React from 'react';
import NewRecipeTopLevel from './NewRecipeTopLevel';
import { addRecipe } from '../redux/reducers/index.js';

const unitSet = ['Kg', 'gr', 'ml', 'litre', 'teaspoon', 'tablespoon', 'cup', 'lbs', 'Oz' ];

class IngredientsForm extends React.Component {

    constructor(props){
        super(props);
        this.nextid = 0;  //for the counter to work the let must be defined outside of the handler  
        this.state = {
            id: 0,
            name: '',
            qty: 0,
            unit: 'kg'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]: value});
    }

    handleSubmit(props) {
        let id = ++this.nextid;
        const name = this.state.name;
        const qty = this.state.qty;
        const unit = this.state.unit;
        const editable = null;
        this.props.onSubmitIngredient(id, name, qty, unit, editable);
    }
    
    render(props) {
        return (
    <div>
      <table className='ingredients-form'>
        <tr> <td>Ingredient:</td>
          <td><input className='ingredients-input'
                 name='name'
                 onChange={this.handleChange}/>
        </td></tr>
        <tr><td> Qty:</td>
         <td><input className='ingredients-Qty-input'
                 name='qty'
                 onChange={this.handleChange}/>
         <select
           type='list'
           name='unit'
           onChange={this.handleChange}>
           {unitSet.map((u) => (<option key={'unit-list-item-' + u} >{u}</option>))}
         </select>
         </td>
        </tr>
        <tr>
           <input className='button' type='submit' value='add ingredient'
                  onClick={this.handleSubmit}/>
         </tr>
      </table>
      {/* <div className='ingredient-list'>{this.props.ingredients}</div> */}
    </div>
        );
    }
}
   
class NewRecipeIngredientsTable extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(props) {
        const ingredients = this.props.ingredients;
        return(
            <div>
             <div> <input className='button'
                     type='submit'
                     value='Add ingredient'
                     onClick={this.props.onAddIngredient}/>
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
                        id={k}
                        value={ingredients[k].name}
                        onChange={this.props.onTableChange}
                       ></input> :
                       <td
                           id={k}
                           className='name'
                           onClick={this.props.onTableClick}
                       >{ingredients[k].name}</td> }
                      
                       <td
                        
                       >{ingredients[k].qty}</td>
                       <td
                        
                       >{ingredients[k].unit}</td>
                     </tr>
                        ))}
            </table>
        </div>);
    }
}

export default class NewRecipe extends React.Component {

    constructor (props) {
        super(props);
        this.handleSubmitIngredient = this.handleSubmitIngredient.bind(this);
        this.handleAddIngredient = this.handleAddIngredient.bind(this);
        this.handleTableClick = this.handleTableClick.bind(this);
        this.handleTableChange = this.handleTableChange.bind(this);
        this.nextid = 0;  //for the counter to work the let must be defined outside of the handler  
        this.state = {
            editableTitle: false,
            title: '',
            editableServings: false,
            servings: 1,
            ingredients: {},
            list: []
        };
    }

    handleSubmitIngredient = (id, name, qty, unit) => 
    this.setState(
        {ingredients: {
            ...this.state.ingredients, [id]: {
                editable: null,
                name: name,
                qty: qty,
                unit: unit
            }}});
    
    
    handleTitleClick = () => 
        this.setState({editableTitle: !this.state.editableTitle});

    handleTitleEnterKey = (e) => {
        const keyCode = e.keyCode || e.which;
        if (keyCode === 13) {
            this.setState({editableTitle: !this.state.editableTitle});
        }}

    handleTitleBlur = () => 
        this.state.editableTitle ?
            this.setState({editableTitle: !this.state.editableTitle}) : null;

    updateTitle = title => {
        this.setState({ title });
    }
 
    handleServingsClick = () => {
        this.setState({editableServings: !this.state.editableServings});
    }

    handleServingsEnterKey = (e) => {
        const keyCode = e.keyCode || e.which;
        if (keyCode === 13) {
            this.setState({editableServings: !this.state.editableServings});
        }}

    handleServingsBlur = () => 
        this.state.editableServings ?
        this.setState({editableServings: !this.state.editableServings}) : null;

    updateServings = servings => {
        this.setState({ servings });
    }

    handleAddIngredient() {
        let id = ++this.nextid;
        this.setState({ingredients: {...this.state.ingredients, [id]: { name: 'new ingredient', qty: 1, unit: 'gr', editable: null}}});
    }

    handleTableClick(event) {
        const  ingredients = this.state.ingredients;
        const target = event.target;
        const className = target.className;
        let idx = parseInt(target.id);
        this.setState({ingredients:
            {...ingredients, [idx]: {...ingredients[idx] , editable: className}}});
        console.log({...ingredients[idx], editable: className});
}

    handleTableChange(event) {
        const target = event.target;
        const value = target.value; 
        const idx = parseInt(target.id);
        const className = target.className;
        const ingredientToEdit = this.state.ingredients.filter(i =>(i.id === idx))[0];
        this.setState({ingredients:
            [...this.state.ingredients,
            {...ingredientToEdit, [className]: value}]});
        console.log(idx);
    }


    
    render() {
        return (
            <div className='new-recipe'>
              <NewRecipeTopLevel
                editableTitle={this.state.editableTitle}
                editableServings={this.state.editableServings}
                title={this.state.title}
                onTitleClick={this.handleTitleClick}
                onTitleEnterKey={this.handleTitleEnterKey}
                onTitleBlur={this.handleTitleBlur}
                onUpdateTitle={this.updateTitle}
                servings={this.state.servings}
                onServingsClick={this.handleServingsClick}
                onServingsEnterKey={this.handleServingsEnterKey}
                onServingsBlur={this.handleServingsBlur}
                onUpdateServings={this.updateServings}/>

              <IngredientsForm
                onSubmitIngredient={this.handleSubmitIngredient}/>

              <NewRecipeIngredientsTable
                onAddIngredient={this.handleAddIngredient}
                ingredients={this.state.ingredients}
                onTableChange={this.handleTableChange}
                onTableClick={this.handleTableClick}
              />
              <div>
            
              </div>
            </div>
        );
    }
   
}
