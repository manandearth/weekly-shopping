import React from 'react';
import RecipeTopLevel from './RecipeTopLevel';
import NewRecipeIngredientsTable from './NewRecipeIngredientsTable';
import SubmitRecipe from './SubmitRecipe';
import { inputParsers }  from '../utilities/parsers';
// import { addRecipe } from '../redux/reducers/index.js';

export default class NewRecipe extends React.Component {

  constructor (props) {
    super(props);
    this.nextid = 0;  //for the counter to work the let must be defined outside of the handler  
    this.defaultState = {
      editableTitle: false,
      title: '',
      editableServings: false,
      servings: 1,
      ingredients: {},
      list: []
    };
    this.state = this.defaultState;
    
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
    this.setState({ servings: inputParsers.integer(servings) });
  }

  handleAddIngredient = () => {
    let id = ++this.nextid;
    this.setState({ingredients: {...this.state.ingredients, [id]: { name: 'new ingredient', qty: 1, unit: 'kg', editable: null}}});
  }

  handleTableClick  = (event) => {
    const ingredients = this.state.ingredients;
    const target = event.target;
    const className = target.className;
    let idx = parseInt(target.id);
    this.setState({ingredients:
      {...ingredients, [idx]: {...ingredients[idx] , editable: className}}});
	}

  handleTableEnterKey = (event) => {
    const  ingredients = this.state.ingredients;
    const target = event.target;
    let idx = parseInt(target.id);
    const keyCode = event.keyCode || event.which;
    if (keyCode === 13) {
      this.setState({ingredients:
        {...ingredients, [idx]: {...ingredients[idx] , editable: null}}});
    }
  }

  handleTableBlur = (event) => {
    const  ingredients = this.state.ingredients;
    const target = event.target;
    let idx = parseInt(target.id);
    this.setState({ingredients:
      {...ingredients, [idx]: {...ingredients[idx] , editable: null}}});
  }
	
  handleTableChange = (event) => {

    const target = event.target;
    const value = target.value;
    const idx = parseInt(target.id);
    const ingredients = this.state.ingredients;
    const className = target.className;    
		  switch (className) {
        case 'qty':
          this.setState({ingredients:
            {...ingredients, [idx]: {...ingredients[idx] ,
              [className]: inputParsers.float(value) }}});
				  break;
			  default:
				  this.setState({ingredients:
            {...ingredients, [idx]: {...ingredients[idx] ,
              [className]: value }}});
		  }
    }
  ;
  
  

  handleSubmitReset = () =>
    this.setState({...this.defaultState});
  
  
  render() {
    return (
      <div className='new-recipe'>
        <RecipeTopLevel
          topBar={'Add new recipe'}
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
          <SubmitRecipe
            title={this.state.title}
            servings={this.state.servings}
            ingredients={this.state.ingredients}
            onSubmitReset={this.handleSubmitReset}/>
        </div>
      </div>
    );
  }
  
}
