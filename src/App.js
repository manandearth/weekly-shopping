import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewRecipe from './components/NewRecipe';
import RecipeList from './components/RecipeList';
import EditRecipe from './components/EditRecipe';
import IngredientsDB from './components/IngredientsDB';
import WeeklyView from './components/WeeklyView';
function ColorBtn() {
  return (
    <button>cook</button>
  );

} ;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <ColorBtn /> */}
        <h2 className='App-title'>Weekly shopping</h2>
      </header>
      
      <div className='controls'>
        <div>
        <div className='recipes-panel'>
          <NewRecipe />
          <RecipeList />
          <EditRecipe />
        </div>
       
     
      <div className='ingredientsDB'>
        <WeeklyView />
      </div>
        </div>
       <IngredientsDB />
      </div>
    </div>
    
  );
}

export default App;
