
import React, { Component } from 'react';
import Item from './Item';
import { connect } from 'react-redux';
import CompSection from '../CompSection/CompSection';
 
class Cart extends Component
{
    render() {
 
        let total = 0;
 
        this.props.cart.map(item => total += item.product.price * item.quantity);
 
        const cart  = this.props.cart.length > 0?(
            <CompSection>
            <div>
                <div className="panel-body">
                    {
                        this.props.cart.map(item => {
                            return (
                                <div key={item.product.id}>
                                    <Item item={item} />
                                    <hr />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="panel-footer">
                    <div className="row text-center">
                        <div className="col-xs-11">
                            <h4 className="text-right">Total <strong>£ {total.toFixed(3)} per/month</strong></h4>
                        </div>
 
                    </div>
                </div>
            </div>
            </CompSection>
 
        ) : (
            <div className="panel-body">
                <p>Cart is empty</p>
            </div>
        )
 
        return (
            <CompSection>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-xs-12">
                            <div className="panel panel-info">
                                <div className="panel-heading">
                                    <div className="panel-title">
                                        <div className="row">
                                            <div className="col-xs-6">
                                                <h5><span className="glyphicon glyphicon-shopping-cart"></span> My Shopping Cart</h5>
                                            </div>
 
                                        </div>
                                    </div>
                                </div>
 
                                { cart }
 
                            </div>
                        </div>
                    </div>
                </div>
                </CompSection>
        )
    }
}
 
const mapStateToProps = (state) => {
 
  return {
      cart: state.cartReducer.cart
  }
};
 
export default connect(mapStateToProps)(Cart);