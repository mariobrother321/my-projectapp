import React, {Component, Fragment} from 'react';
import { Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../../action/auth';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
//import Icon from '@material-ui/core/Icon';
//import Avatar from 'react-avatar';

class NavBarItems extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
      //loginOpen: false
 
    };
    
  }

  

  toggleNavbar() {
    console.log("asta vine din navbaritems")
    this.setState({
      collapsed: !this.state.collapsed,
      
    });
   
   

  }

  render() {
    this.props.cartUpdated();
        let total = 0; 
    this.props.cart.map(item => total += item.product.price * item.quantity);
    
    const collapsed = this.state.collapsed;
    const classOne = collapsed ? 'collapse navbar-collapse ' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    
    const authLinks = (
      
      <ul className="navbar-nav ml-auto">
     
        
          <li className="nav-item active">
          <Link className="nav-link" to='/'>Home</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/dashboard">Profile</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to={{pathname: '/services'}} >Services</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/team">Team</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/priceplans">Products</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/support">24/7 Support</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/testimonials">Testimonials</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact Us</Link>
          </li>
          <li className="nav-item">
         <Link className="nav-link" to="/"  onClick={this.props.logout}>Logout</Link>
          </li>
          
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
            {
                this.props.cart.length > 0 ? (
                    <span className="label label-info">{ this.props.cart.length } items: (£ {total.toFixed(2)})</span>
                ) : null
            }
              My Cart <ShoppingCartOutlinedIcon/></Link>
          </li>
      </ul>
    
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
         
            
      <li className="nav-item active">
      <Link className="nav-link" to='/'>Home</Link>
      </li>
      
      <li className="nav-item">
      <Link className="nav-link" to={{pathname: '/services'}} >Services</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/team">Team</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/priceplans">Products</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/support">24/7 Support</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/testimonials">Testimonials</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/contact">Contact Us</Link>
      </li>
      <li className="nav-item">
     <Link className="nav-link" to="/login">Login</Link>
     </li>
     <li className="nav-item">
            <Link className="nav-link" to="/cart">
            {
                this.props.cart.length > 0 ? (
                    <span className="label label-info">{ this.props.cart.length } items: (£ {total.toFixed(2)})</span>
                ) : null
            }
              My Cart <ShoppingCartOutlinedIcon/> </Link>
          </li>

      
  </ul>
    );


    return (
      
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark transparent-nav">
    <div className="container-fluid">
      <a className="navbar-brand" href="capdepluta">Web Business Solutions</a>
      <button  onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`${classOne}`} id="navbarNavAltMarkup" onClick={this.toggleNavbar}>
    {!this.props.auth.loading && (<Fragment>{ this.props.auth.isAuthenticated ? authLinks : guestLinks}</Fragment>)}
        </div>
    </div>
  </nav>
    );
  }
}

NavBarItems.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
 
  return {
      auth: state.auth,
      cart: state.cartReducer.cart,
      cartUpdated: () => { return true },
  }
};




export default connect(mapStateToProps, {logout})(NavBarItems);