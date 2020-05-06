import React, { Component } from 'react';
import Product from './Product';
import { addToCart } from '../../../action/cartActions';
import CompSection from '../../CompSection/CompSection'
import { connect } from 'react-redux';

  
  
 class ProductList extends Component{
     

    addToCart = (product) => {
        this.props.addToCart(product);
    }

     render() {
        console.log(this.props.products)
         return (
             <CompSection>
             <div className="container">
                 <h2>Product List</h2>
                 <br/>
                 <div className="col-lg-auto">
                   {this.props.products && this.props.products.map(product => <Product
                   product={product} 
                   addToCart={this.addToCart} 
                   inCart={this.props.cart.length>0 && this.props.cart.filter(e => e.product.id === product.id).length > 0 } key={product.id} /> )}
                 </div>
             </div>
             </CompSection>
         )
     }
 };

 const mapStateToProps = (state) => {
 
    return {
        products: state.productReducer.products,
        cart: state.cartReducer.cart
    }
};
 
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => {
            dispatch(addToCart(product));
        }
    }
};
 
 
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

  
 