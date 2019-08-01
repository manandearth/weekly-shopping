import React from 'react';
import { getProducts } from '../redux/selectors';
import { connect } from 'react-redux';
import Controller from './Controller';
import Select from './Select';
import Tooltip from './Tooltip';
import Product from './Product';
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
    const whiteRoundedStyle = {
      wrapper: {
        flexAlign: 'row',
        display: 'inline-block',
        cursor: 'pointer'
      },
      content: {
        backgroundColor: 'white',
        color: '#000',
        fontSize: '1.2rem',
        lineHeight: '150%'
      },
      tooltip: {
        backgroundColor: 'white',
        borderRadius: '10px',
        bottom: '40%',
        left: '100%',
        opacity: '0.7'
      },
      arrow: {
        borderLeft: 'solid white 5px'
      }
    };

    return (
      <div className='ingredients-head'>
        <h2 className='ingredients-list-title'>Stored Ingredients:</h2>
        
        {_.keys(products).map(
          product =>
            <Tooltip
              content={<div>

                         <Product
                           product={product}
                           fmts={products[product]}/>
                       </div>}
              styles={whiteRoundedStyle}
            >  <p className='product'
                  id={product}
                  /* title={'Available formats: ' + products[product].map(fmt => fmt.qty + ' ' + fmt.unit + '. ')} */
               >{product}</p>
            </Tooltip>
          
          
          
) 

}
        
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
