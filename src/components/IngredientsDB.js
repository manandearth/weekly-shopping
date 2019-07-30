import React from 'react';
import { getProducts } from '../redux/selectors';
import { connect } from 'react-redux';
import './IngredientsDB.css';
import _ from 'lodash';

class IngredientsDB extends React.Component {
  render() {
    const products = this.props.products;
    return (
      <div className='ingredients-head'>
        <h2 className='ingredients-list-title'>Stored Ingredients:</h2>
        <li>
        {_.keys(products).map(
          product => <p className='product'>{
            product +
            ', available formats: ' +
            products[product].map(fmt => fmt.qty + ' ' + fmt.unit + '. ')} </p>) 
        }
      </li>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const products = getProducts(state);
  return {
    products
  };
};

export default connect(mapStateToProps)(IngredientsDB);
