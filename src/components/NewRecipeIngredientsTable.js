import React from 'react';
import RecipeIngredientsTable from './RecipeIngredientsTable';

export default class NewRecipeIngredientsTable extends React.Component {


	render(props) {
    return(
      <div>
        <RecipeIngredientsTable
        onAddIngredient={this.props.onAddIngredient}
          ingredients={this.props.ingredients}
          onTableChange={this.props.onTableChange}
          onTableClick={this.props.onTableClick}
          onTableEnterKey={this.props.onTableEnterKey}
          onTableBlur={this.props.onTableBlur}/>
      </div>
	  );
  }
}
