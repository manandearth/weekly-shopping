import React from 'react'  ;

export default class NewRecipeTopLevel extends React.Component {
    render() {
        return(
            <div className='new-recipe'>
              <h2 className='new-recipe-title'>Add a new recipe</h2>
              {this.props.editableTitle ?
                  <input
                    className="rename-list"
                    onChange={e => this.props.onUpdateTitle(e.target.value)}
                    onKeyDown={this.props.onTitleEnterKey}
                    onBlur={this.props.onTitleBlur}
                    value={this.props.title}
                    onFocus={e => e.target.select()}
                    autoFocus>
                  </input>
                  :
                  <div>
                    <h2>
                      <span onClick={this.props.onTitleClick}
                            className="recipe-title"
                      >{this.props.title === '' ?
                          '<Recipe-Name>':
                          this.props.title}
                      </span>
                    </h2>
                  </div>}

              <div 
                className='servings'>
                {this.props.editableServings ?
                    <input onChange={e => this.props.onUpdateServings(e.target.value)}
                           onKeyDown={this.props.onServingsEnterKey}
                           onBlur={this.props.onServingsBlur}
                           value={this.props.servings}
                           onFocus={e => e.target.select()}
                           autoFocus></input>
                    :
                    <h2 className='servings' onClick={this.props.onServingsClick}> Serves: .... {this.props.servings}</h2>}
              </div>
            </div>);
    }
}
