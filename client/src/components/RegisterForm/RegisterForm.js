import React, {useState, Fragment} from 'react';
import classes from './RegisterForm.module.css';
import {connect} from 'react-redux';
import {setAlert} from '../../action/alert';
import {register} from '../../action/auth';
import PropTypes from 'prop-types';
import Alert from '../Layout/Alert';
import {Redirect} from 'react-router-dom'
import { Link} from 'react-router-dom';
import CompSection from '../CompSection/CompSection';

//import CompDiv from '../CompSection/CompDiv/CompDiv';

//import axios from 'axios';
//import Aux from '../../hoc/Auxiliary/Auxiliary';

const RegisterForm = ({setAlert, register, isAuthenticated, history})=> {

  //const [formData, setFormData] = useState({
    //userImage: '',
    //name: '', 
   // email: '',
    //password: '',
    //password2: ''
  //});
const [name, setName] = useState();
const [email, setEmail] = useState();
const [password, setPassword] = useState();
const [password2, setPassword2] = useState();
const [userImage, setuserImage] = useState();

//const {userImage, name, email, password, password2}= formData;

//const onChange = e => setFormData({...formData, [e.target.name]: e.target.value,});




const onSubmit = async e =>{
  e.preventDefault();
  if(password !== password2) {

      setAlert('Passwords do not match', 'danger');
  }else {
    console.log('merge')
      register({userImage, name, email, password });

    
  }
}

if (isAuthenticated) {
   return <Redirect to="/" />;
}



return(
    <Fragment>
      <CompSection>
        
       <Alert/>

      <div className={classes.SignUp}>
        <form className='form' onSubmit={e => onSubmit(e)}>
          <h2 style={{color: '#fff'}}>Sign Up</h2>
           <input type="file" 
           id="userImage" 
           accept=".jpg, .jpeg, .png"
           onChange = {event => {
            const userImage = event.target.files[0];
            setuserImage(userImage);
           }}
           required/>
          <input 
           type="text"
           placeholder="Name" 
           id="name"  
           onChange = {event => {
            const{ value} = event.target;
            setName(value);
           }}
           required/><br /><br />
          <input 
           type="password"
           placeholder="Password" 
           id="password"  
           onChange = {event => {
            const{ value} = event.target;
            setPassword(value);
           }}
           required/><br /><br />
          <input 
           type="password" 
           name="password2" 
           placeholder="Confirm Password" 
           id="password2"  
           onChange = {event => {
            const{ value} = event.target;
            setPassword2(value);
           }}
           minLength='6'/><br /><br />
          <input 
           type="text" 
           name="email"
           placeholder="Email address" 
           id="email"  
           onChange = {event => {
            const{ value} = event.target;
            setEmail(value);
           }}
           required/><br /><br />
          <input type="submit" className='btn btn-dark' defaultValue="Sign up" /><br /><br />
        <Link to="/dashboard"> <input type="cancel" className='btn btn-light' defaultValue="Cancel"  /></Link> <br /><br />
        </form>
       
      </div>
       
      </CompSection>
    </Fragment>
      );

}
 




RegisterForm.propTypes ={
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect( mapStateToProps , { setAlert, register })(RegisterForm);






/*const newUser = {
      name,
      email,
      password
    }

    try{
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      const body = JSON.stringify(newUser);
      const res = await axios.post('/api/users',body, config);
      console.log(res.data);

    } catch(err) {
      console.error(err.response.data);
    }*/