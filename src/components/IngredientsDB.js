import React from 'react';
import { getProducts } from '../redux/selectors';
import { connect } from 'react-redux';
import './IngredientsDB.css';
import _ from 'lodash';

class IngredientsDB extends React.Component {

  constructor(props) {
    super(props);
    const products = _.keys(this.props.products);
    this.initialState = _.zipObject(products, products.map(p => false));
    this.state = this.initialState;
  }
    
      
  handleHover = ( product ) => {
    this.setState({
      [product]: !this.state[product]
    });
  };

  render() {
    const products = this.props.products;
    return (
      <div className='ingredients-head'>
        <h2 className='ingredients-list-title'>Stored Ingredients:</h2>
        <li>
        {_.keys(products).map(
          product => <p className='product'
                        id={product}
                        onMouseEnter={(e) => this.handleHover(e.target.id)}
                        onMouseLeave={(e) => this.handleHover(e.target.id)}
                       
                     >{this.state[product] === true ?
            product +
            ', available formats: ' +
                       products[product].map(fmt => fmt.qty + ' ' + fmt.unit + '. ')
                       :
                       product       
                     } </p>) 

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
