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
        this.props.onSubmitIngredient(id, name, qty, unit);
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
   


export default class NewRecipe extends React.Component {

    constructor (props) {
        super(props);
        this.handleSubmitIngredient = this.handleSubmitIngredient.bind(this);
        this.state = {
            editableTitle: false,
            title: '',
            editableServings: false,
            servings: 1,
            ingredients: [],
            list: []
        };
    }

    handleSubmitIngredient = (id, name, qty, unit) => 
    this.setState(
        {ingredients: [
            ...this.state.ingredients,
            {id: id, name: name, qty: qty, unit: unit
        }]});
    
    
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

    handleRemoveIngredient = (id) =>
        {};

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

              <div>
                <table className='new-ingredients-table'>
                  <tr>
                    <th>ingredient</th>
                    <th>Qty.</th>
                    <th>Unit</th>
                  </tr>
            {this.state.ingredients.map((ingredient) =>
                (
                   
                     <tr className={'ingredient-row--' + ingredient.name}>
                       <td>{ingredient.name}</td>
                       <td>{ingredient.qty}</td>
                       <td>{ingredient.unit}</td>
                       <td onClick={this.handleRemoveIngredient(ingredient.id)}>remove</td>
                     </tr>
                 
                ))}
            </table>
              </div>
            </div>
        );
    }
   
}
