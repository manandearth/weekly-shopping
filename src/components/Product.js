import React from 'react';
import { getProducts } from '../redux/selectors';
import { connect } from 'react-redux';
import { addFormat, removeProduct, updateProductTitle, removeFormat } from '../redux/actions';
import { units } from '../constants/shared';
import './Product.css';

class Product extends React.Component {

  constructor(props) {
    super(props);
    this.defaultState = {
      productTitle: this.props.product,
      qty: 0,
      unit: 'kg',
      editable: false,
      editableProductTitle: false};

    this.state = this.defaultState;
  }

  handleToggleEdit = (key) => {
    this.setState({[key]: !this.state.editable});
  }

  handleUpdateInput = ( key, e ) => {
    const value = e.target.value;
    this.setState({[key]: value});
  }

  handleOnEnter = (e) => {
    const product = this.props.product;
    const keyCode = e.keyCode || e.which;
    if (keyCode === 13) {
      //check that productTitle changed since `updateProductTitle` deletes the original product.
      if (product !== this.state.productTitle) {
        this.props.updateProductTitle( product, this.state.productTitle );}
      this.setState({editableProductTitle: !this.state.editableProductTitle});
    }
  }

  
  handleSubmit = () => {
    const product = this.props.product;
    const qty = this.state.qty;
    const unit = this.state.unit;
    this.props.addFormat(product, qty, unit);
    this.setState({editable: !this.state.editable});
  };

  handleRemoveProduct = () => {
    const conf = window.confirm('this will remove the product from the inventory. go a head?');
    return (conf ?
      this.props.removeProduct(this.props.product) :
      null);
  }

  handleRemoveFormat = (id) => {
    this.props.removeFormat(this.props.product, id);}
  
  render() {
    const product = this.props.product;
    const fmts = this.props.fmts;
		return (
      <div>
        <p className='remove-button'
              onClick= {this.handleRemoveProduct}
        >X</p>
        {!this.state.editableProductTitle ?
        <h2 onClick={() => this.handleToggleEdit('editableProductTitle')} //the key to be toggled
        >{product}</h2>
          : <input
              value={this.state.productTitle}
              onChange={e => this.handleUpdateInput('productTitle', e)}
              onKeyDown={(e) => this.handleOnEnter(e)}
            autoFocus></input>}
        <p>Available formats:</p>
        {fmts.map(fmt =>
          <div className='format-div'>
            <li>{fmt.qty + ' ' + fmt.unit}</li>
            {/* FIX: doesn't seem to work */}
            <p onClick={() => this.handleRemoveFormat(fmts.indexOf(fmt))}>x</p>
          </div>)}
      {!this.state.editable ?
        <h3 onClick={() => this.handleToggleEdit('editable')}//the key to be toggled
        >Add Format</h3>
        :
        <div>
        <input type='number' min={1} 
               className='qty'
               value={this.state.qty}
               onChange={e => this.handleUpdateInput('qty', e)}
               ></input>
          <select
            value={this.state.unit}
            onChange={e => this.handleUpdateInput('unit', e)}>
          {units.map((u) => (<option key={'unit-list-item-' + u} >{u}</option>))}
          </select>
          <button
            className='button'
            onClick = {this.handleSubmit}
          >submit</button>
        </div>}
      </div>

		);
	}
}

const mapStateToProps = state => {
  const products = getProducts(state);
return {
  products};
};

export default connect(mapStateToProps, { addFormat, removeProduct, updateProductTitle, removeFormat })(Product);
