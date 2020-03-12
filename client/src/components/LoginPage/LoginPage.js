import React, {Fragment, useState} from 'react';
import classes from './LoginPage.module.css';
import {Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login} from '../../action/auth';
import Alert from '../Layout/Alert';

const LoginPage =(props)=> {

  const [formData, setFormData] = useState({
     
    email: '',
    password: ''
    
  }, []);

  const { email, password }= formData;
  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

  const onSubmit = async e => {
    e.preventDefault();
     props.login(email, password);
    
   
     };
    
  // redirect if logged in

  if (props.isAuthenticated ) { 
     console.log("mergeeee")
    return(
    <Redirect to="/dashboard" />)
  } 

  

 

   return(
<Fragment> 
  <Alert />

  <div className={classes.SignIn} id="signin">
      <form className={classes.InputForm} onSubmit={e => onSubmit(e)}>
         <h2 style={{color: 'white'}}>Log In</h2>
         <input  
         type="email" 
         placeholder="Email Address" 
         autoComplete="username"
         name="email" 
         value={email}
         onChange={e => onChange(e)}
         required/>
         <input  
         type="password" 
         name="password"
         autoComplete="password"
         placeholder="Password" 
         value={password}
         onChange={e => onChange(e)}
         minlenght='6'
         /> <br /><br />
         <input type="submit" 
         className='btn btn-primary'
         defaultValue="Login"
         
         /><br /><br />
        <Link to="/"> <input 
         className='btn btn-primary' 
         defaultValue="Cancel" 
         /></Link><br /><br />
         <div id="container">
           <a href="reset.html" style={{marginRight: '0px', fontSize: '13px', fontFamily: 'Tahoma, Geneva, sans-serif'}}>Reset password</a>
           <a href="forgetpg" style={{marginLeft: '30px', fontSize: '13px', fontFamily: 'Tahoma, Geneva, sans-serif'}}>Forgot password</a>
         </div><br />
                Don't have an account? <Link className={classes.Link} to="/register" onClick={props.signup}>&nbsp;Sign Up</Link>
       </form>
    </div>

</Fragment> 

     );
    
  }

  LoginPage.propTypes = {
       login: PropTypes.func.isRequired,
       isAuthenticated: PropTypes.bool
  };

  const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });
          


export default connect( mapStateToProps , {login })(LoginPage);