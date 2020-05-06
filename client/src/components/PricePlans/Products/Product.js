import React, { Component } from 'react';
import CompDiv from '../../CompSection/CompDiv/CompDiv';


 
class Product extends Component
{
    state = {
        inCart: this.props.inCart
    };
 
    addToCart = (e) => {
 
        e.preventDefault();
 
        this.props.addToCart(this.props.product)
 
        this.setState({
            inCart: true
        })
    }
 
    render() {
 
        const { product } = this.props;
 
        return (
            <CompDiv>
            <div className="col-lg">
                <figure className="card card-product">
                    <div className="img-wrap">
                        <img className="img-thumbnail" src={product.image} alt="loading....."/>
                    </div>
                    <figcaption className="info-wrap">
                        <h4 className="title">{product.title}</h4>
                        <p className="desc">{product.descriptionitem1}</p>
                        <p className="desc">{product.descriptionitem2}</p>
                        <p className="desc">{product.descriptionitem3}</p>
                        <p className="desc">{product.descriptionitem4}</p>
                        <p className="desc">{product.descriptionitem5}</p>
                    </figcaption>
                    <div className="bottom-wrap">
 
                        {
                            this.state.inCart?(
                                <span className="btn btn-success">Added to cart</span>
                            ) : (
                                <a href="/cart" onClick={this.addToCart} className="btn btn-sm btn-primary float-right">Add to cart</a>
                            )
                        }
 
                        <div className="price-wrap h5">
                            <span className="price-new"> Price: £ {product.price}per/month</span>
                        </div>
                    </div>
                </figure>
            </div>
            </CompDiv>
        )
    }
}
 
export default Product;