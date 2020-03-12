import React, { Component } from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
//import NavBar from '../../components/NavBar/NavBar' ; 
import Aux from '../../hoc/Auxiliary/Auxiliary';

class RegisterCont extends Component {
     
   // signedInHandller=() => {
         //alert("you are signed in") 
        // console.log("asta vine din register")
         //this.props.history.push('/')
        
   // }

    render() {
        return(
        <Aux>
            <RegisterForm signedIn={this.signedInHandller}/>
         </Aux>
        );
    }
}


export default RegisterCont;