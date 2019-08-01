import React from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../redux/actions';
import { unitSet } from '../constants/shared';

class AddProduct extends React.Component {

	constructor(props){
		super(props);
		this.state = {
      editable: false,
			title: '',
			formats: {1: {qty: 0, unit: 'kg'}}
		};
	}

  handleEdit = () => {
    this.setState({editable: !this.state.editable});
  }

  
	render(){
  return(<div>
           {!this.state.editable ?
             <h2 onClick={this.handleEdit}
             >add a product</h2> :
             <div>
               <input></input>
               <select>{unitSet.map(unit => <option>{unit}</option> )}</select>
             </div>}
         </div>);
	};
}


export default connect(null, { addProduct })(AddProduct);
