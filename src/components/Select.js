import React from 'react';

class Select extends React.Component{
  static displayName = "Select"

	constructor(){
		super();
		this.selectedElement = React.createRef();
	}
	
  render(){
    const { children, open } = this.props;
    return React.cloneElement(children, {ref: this.selectedElement, onClick: open});
  }
}

export default Select;
