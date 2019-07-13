import React from 'react';
import NewRecipeTopLevel from './NewRecipeTopLevel';
import NewRecipeIngredientsTable from './NewRecipeIngredientsTable';
// import { addRecipe } from '../redux/reducers/index.js';


class SubmitRecipe extends React.Component {
    render() {
        return(
            <div>
              <input type='submit'></input>
            </div>);
    }
}


export default class NewRecipe extends React.Component {

    constructor (props) {
        super(props);
        this.handleAddIngredient = this.handleAddIngredient.bind(this);
        this.handleTableClick = this.handleTableClick.bind(this);
        this.handleTableChange = this.handleTableChange.bind(this);
        this.handleTableEnterKey = this.handleTableEnterKey.bind(this);
        this.handleTableBlur = this.handleTableBlur.bind(this);
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
        this.setState({ingredients: {...this.state.ingredients, [id]: { name: 'new ingredient', qty: 1, unit: 'Kg', editable: null}}});
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

    handleTableEnterKey(event) {
        const  ingredients = this.state.ingredients;
        const target = event.target;
        let idx = parseInt(target.id);
        // const className = event.target.className;
        // const value = target.value;
        const keyCode = event.keyCode || event.which;
        if (keyCode === 13) {
            this.setState({ingredients:
                {...ingredients, [idx]: {...ingredients[idx] , editable: null}}});
        }
    }

    handleTableBlur(event) {
        const  ingredients = this.state.ingredients;
        const target = event.target;
        let idx = parseInt(target.id);
            this.setState({ingredients:
                {...ingredients, [idx]: {...ingredients[idx] , editable: null}}});
    }
    
    handleTableChange(event) {
        const ingredients = this.state.ingredients;
        const target = event.target;
        const value = target.value; 
        const idx = parseInt(target.id);
        const className = target.className;
        this.setState({ingredients:
            {...ingredients, [idx]: {...ingredients[idx] , [className]: value}}});
        console.log(className);
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


              <NewRecipeIngredientsTable
                onAddIngredient={this.handleAddIngredient}
                ingredients={this.state.ingredients}
                onTableChange={this.handleTableChange}
                onTableClick={this.handleTableClick}
                onTableEnterKey={this.handleTableEnterKey}
                onTableBlur={this.handleTableBlur}
              />
              <div>
                <SubmitRecipe />
              </div>
            </div>
        );
    }
   
}
