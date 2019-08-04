import React from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../redux/actions';
import { unitSet } from '../constants/shared';
import './AddProduct.css';
class AddProduct extends React.Component {

	constructor(props){
		super(props);
		this.defaultState = {
      editable: false,
      editableTitle: true,
			title: '',
			qty: 0,
      unit: 'kg'
		};
    this.state = this.defaultState;
	}

  handleEdit = () => {
    this.setState({editable: !this.state.editable});
  }

  handleUpdate = (key, e) => {
    const value = e.target.value;
    this.setState({[key]: value});
  }

  handleToggle = () => {
    this.setState({editableTitle: !this.editableTitle});
  }

  handleTitleEnterKey = (e) => {
    const keyCode = e.keyCode || e.which;
    if (keyCode === 13) {
      this.setState({editableTitle: !this.state.editableTitle});
    }}

  handleSubmit = () => {
    this.props.addProduct(this.state.title, [{qty: this.state.qty, unit: this.state.unit}]);
    this.setState(this.defaultState);
  }
  
	render(){
  return(<div>
           {!this.state.editable ?
             <h2 onClick={this.handleEdit}
             >{'<add a product>'}</h2> :
             <div className='add-product-box'
               //closes the box when clicking outside:
                  // onBlur={this.handleEdit}
             > 
               <h2>adding a product</h2>
               {this.state.editableTitle ?
                 <div>
                 <label>product name</label>
                   <input
                     value={this.state.title}
                     onChange={(e) => this.handleUpdate('title', e)}
                     onKeyDown={(e) =>this.handleTitleEnterKey(e)}
                 ></input>
                 </div>
                 :
                 <div><h2 onClick={this.handleToggle}>{this.state.title}</h2></div>}
               <div>
                 <label>format:</label>
                 <input type='number'
                        min={0}
                        onChange={(e) => this.handleUpdate('qty', e)}></input>
                 <select
                   onChange={(e) => this.handleUpdate('unit' ,e)}
                 >{unitSet.map(unit => <option>{unit}</option> )}</select>
               </div>
               <button
                 className='button'
                 onClick={this.handleSubmit}
               >Submit</button>
             </div>}
         </div>);
	};
}

export default connect(null, { addProduct })(AddProduct);

