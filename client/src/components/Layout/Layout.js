import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliary/Auxiliary';
import NavBar from '../NavBar/NavBar';
//import Modal from '../UI/Modal/Modal';
//import LoginPage from '../LoginPage/LoginPage';
import classes from './Layout.module.css';
import { withRouter } from 'react-router';
//import {Redirect} from 'react-router-dom';
//import Registerform from '../RegisterForm/RegisterForm';
//import RegisterCont from '../../containers/Register/Register';

class Layout extends Component {

 

  render() {
    return(
    <Aux>
      <div className={classes.Content}>
      <NavBar/>
           
         <main>
           {this.props.children}
         </main>
        
      </div>
  </Aux>
    )
  }
} 

export default withRouter(Layout);


// state = {
 //   login: false,
  //  signup: false
//};



//signedInHandller=()=>{
 //alert("you are signed in") 
// this.setState({signup:false})
//}

//signUpHandller=() => {

//console.log("asta vine din layout")
//this.setState({login:false});
//this.setState({signup:true});


//}

//loginHandller =() => {
//alert('You are logged in')
//this.setState({login:false});
//this.props.history.push('/dashboard');
//console.log("asta vine din layout1")

//}

//loginModalHandller= () => {
//console.log("asta vine din layout2")
//this.setState({login:true});


//}

//modalCancelHandler= () => {
//console.log("asta vine din layout3")
//this.setState({login:false});
//this.setState({signup:false});
//this.props.history.push('/')
//}

  ////{/*modal condition *
             //{this.state.login ?
            //<Modal  show={this.state.login}>
            
             //<LoginPage 
             // logedIn={this.loginHandller}
             // cancelModal={this.modalCancelHandler}
             // signup={this.signUpHandller}/>

            //</Modal> : null}
              
        
           //{this.state.signup ? 
           //<Modal 
            //show={this.state.signup}>
              
              //<Registerform  
             // cancelModal={this.modalCancelHandler}/>

           //</Modal> : null}*/}

                
      //open={this.loginModalHandller}
      //logedIn={this.props.logedIn}
            