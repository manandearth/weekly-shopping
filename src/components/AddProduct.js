import React from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../redux/actions';
import { unitSet } from '../constants/shared';
import './AddProduct.css';
class AddProduct extends React.Component {

	constructor(props){
		super(props);
		this.state = {
      editable: false,
      editableTitle: true,
			title: '',
			formats: []
		};
	}

  handleEdit = () => {
    this.setState({editable: !this.state.editable});
  }

  handleUpdateTitle = (e) => {
    const value = e.target.value;
    this.setState({title: value});

  }

  handleToggle = () => {
    this.setState({editableTitle: !this.editableTitle});
  }

  handleTitleEnterKey = (e) => {
    const keyCode = e.keyCode || e.which;
    if (keyCode === 13) {
      this.setState({editableTitle: !this.state.editableTitle});
    }}
  
  
	render(){
  return(<div>
           {!this.state.editable ?
             <h2 onClick={this.handleEdit}
             >add a product</h2> :
             <div className='add-product-box'>
               <h2>adding a product</h2>
               {this.state.editableTitle ?
                 <div>
                 <label>product name</label>
                   <input
                     value={this.state.title}
                     onChange={(e) => this.handleUpdateTitle(e)}
                     onKeyDown={(e) =>this.handleTitleEnterKey(e)}
                 ></input>
                 </div>
                 :
                 <div><h2 onClick={this.handleToggle}>{this.state.title}</h2></div>}
               <div>
               <label>format:</label><input type='number' min={0}></input>
             <select>{unitSet.map(unit => <option>{unit}</option> )}</select>
               </div>
               <button className='button'>Submit</button>
             </div>}
         </div>);
	};
}


export default connect(null, { addProduct })(AddProduct);
