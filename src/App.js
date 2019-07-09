import React from 'react';
import logo from './logo.svg';
import './App.css';
import { addRecipe } from './redux/reducers/index.js';

function ColorBtn() {
    return (
<button>cook</button>
    );

} ;

class NewRecipe extends React.Component {

    constructor (props) {
        super(props);
    }
    render() {
        return (
            <div className='new-recipe'>
              <h2>Add a new recipe</h2>
              <p>Title -&gt; <input></input></p>
              <input className='ingredients-input'></input>
              <div className='ingredient-list'>here comes list</div>              
            </div>
        );
    }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ColorBtn />
        <h2 className='App-title'>Weekly shopping</h2>
      </header>
      <NewRecipe />
    </div>
  );
}

export default App;
