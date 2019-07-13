import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewRecipe from './components/NewRecipe';
import RecipeList from './components/RecipeList';

function ColorBtn() {
    return (
<button>cook</button>
    );

} ;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ColorBtn />
        <h2 className='App-title'>Weekly shopping</h2>
      </header>
      <div className='recipes-panel'>
      <NewRecipe />
      <RecipeList />
      </div>
    </div>
      
  );
}

export default App;
