import React from 'react';
import { getProducts } from '../redux/selectors';
import { connect } from 'react-redux';
import { addFormat, removeProduct } from '../redux/actions';
import { unitSet } from '../constants/shared';
import './Product.css';

class Product extends React.Component {

  constructor(props) {
    super(props);
    this.state = {qty: 0, unit: 'kg',
      editable: false};
    }

  handleToggleEdit = () => {
    this.setState({editable: !this.state.editable});
  }

  handleUpdateInput = ( key, e ) => {
    const value = e.target.value;
    this.setState({[key]: value});
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
  
  render() {
    const product = this.props.product;
    const fmts = this.props.fmts;
		return (
      <div>
        <p className='remove-button'
              onClick= {this.handleRemoveProduct}
          >X</p>
        <h2 onClick={() => console.log(product)}>{product}</h2>
        <p>Available formats:</p>
        {fmts.map(fmt => <li>{fmt.qty + ' ' + fmt.unit}</li>)}
      {!this.state.editable ?
        <h3 onClick={this.handleToggleEdit}
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
          {unitSet.map((u) => (<option key={'unit-list-item-' + u} >{u}</option>))}
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

export default connect(mapStateToProps, { addFormat, removeProduct })(Product);
