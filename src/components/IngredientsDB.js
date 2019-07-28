import React from 'react';
import { getProducts } from '../redux/selectors';
import { connect } from 'react-redux';
import _ from 'lodash';

class IngredientsDB extends React.Component {
  render() {
    const products = this.props.products;
    return (
      <div>
        <h2>Stored Ingredients:</h2>
        <li>
        {_.keys(products).map(
          product => <p>{
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
