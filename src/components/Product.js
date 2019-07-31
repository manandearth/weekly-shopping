import React from 'react';
import { getProducts } from '../redux/selectors';
import { connect } from 'react-redux';

class Product extends React.Component {

	render() {
    const product = this.props.product;
    const fmts = this.props.fmts;
		return (
      <div>
         <h2>{product}</h2>
        <p>Available formats:</p>
        {fmts.map(fmt => <li>{fmt.qty + ' ' + fmt.unit}</li>)}
      </div>

		);
	}
}




export default connect()(Product);
