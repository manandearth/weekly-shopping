import React from 'react';
import { addRecipe } from '../redux/reducers/index.js';


export default class NewRecipe extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            editableTitle: false,
            title: '',
            editableServings: false,
            servings: 1,
            ingridients: []
        };
    }

    handleTitleClick = () => 
        this.setState({editableTitle: !this.state.editableTitle});

    handleTitleEnterKey = (e) => {
        const keyCode = e.keyCode || e.which;
        if (keyCode === 13) {
            this.setState({editableTitle: !this.state.editableTitle});
        }
    }

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
        }
    }

        handleServingsBlur = () => 
        this.state.editableServings ?
            this.setState({editableServings: !this.state.editableServings}) : null;

    updateServings = servings => {
        this.setState({ servings });
    }

    render() {
        return (
            <div className='new-recipe'>
              <h2 className='new-recipe-title'>Add a new recipe</h2>
              {this.state.editableTitle ?
                  <input
                    className="rename-list"
                    onChange={e => this.updateTitle(e.target.value)}
                    onKeyDown={this.handleTitleEnterKey}
                    onBlur={this.handleTitleBlur}
                    value={this.state.title}
                    autoFocus>
                  </input>
                  :
                  <div>
                    <h2>
                      <span onClick={this.handleTitleClick}
                            className="recipe-title"
                      >{this.state.title === '' ?
                          'click here to name this recipe':
                          this.state.title}
                      </span>
                    </h2>
                  </div>}

              <div 
                className='servings'>
                {this.state.editableServings ?
                    <input onChange={e => this.updateServings(e.target.value)}
                           onKeyDown={this.handleServingsEnterKey}
                           onBlur={this.handleServingsBlur}
                           value={this.state.servings}
                           autoFocus></input>
                    :
                    <h2 onClick={this.handleServingsClick}> Serves: {this.state.servings}</h2>}
              </div>
              {/* <input className='ingredients-input'></input> */}
              <div className='ingredient-list'>here comes list</div>
            </div>
        );
    }
}
