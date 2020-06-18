import React, {useState, Fragment,useEffect} from 'react';
import classes from './editUser.module.css';
import {connect} from 'react-redux';
import {setAlert} from '../../action/alert';
import {register} from '../../action/auth';
import PropTypes from 'prop-types';
import Alert from '../Layout/Alert';
import { withRouter} from 'react-router-dom'
import { Link} from 'react-router-dom';
import CompSection from '../CompSection/CompSection';
import {getCurrentUser } from '../../action/auth';

//import axios from 'axios';
//import Aux from '../../hoc/Auxiliary/Auxiliary';

const EditUserForm = ({setAlert, 
    register, 
    isAuthenticated, 
    auth:{user, loading},
    getCurrentUser ,
    history})=> {

  //const [formData, setFormData] = useState({
    //userImage: '',
    //name: '', 
   // email: '',
    //password: '',
    //password2: ''
  //});
const [name, setName] = useState({name:''});
const [email, setEmail] = useState({email: ''});
const [password, setPassword] = useState({password: ''});
const [password2, setPassword2] = useState({ password2: ''});
const [userImage, setuserImage] = useState({userImage: ''});

useEffect(() => {
  getCurrentUser()
   
    setName({name: loading || !user.name ? '' : user.name});
    setEmail({email: loading || !user.email ? '' : user.email});
    setPassword({password: loading || !user.password ? '' : user.password});
    setPassword2({password2: loading || !user.password2 ? '' : user.password2});
    setuserImage({userImage: loading || !user.userImage ? '' : user.userImage})
   // eslint-disable-next-line
}, [loading,getCurrentUser ])

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




return(
    <Fragment>
      <CompSection>
       
        
       <Alert/>

      <div className={classes.SignUp}>
        <form className='form' onSubmit={e => onSubmit(e)}>
          <h2 style={{color: '#fff'}}>Update avatar and details</h2>
           <input type="file" 
           id="userImage" 
           accept=".jpg, .jpeg, .png"
           onChange = {event => {
            const userImage = event.target.files[0];
            setuserImage(userImage);
           }}/>
          <input 
           type="text"
           placeholder="Name" 
           id="name"  
           name="name"
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
        <Link to="/"> <input type="cancel" className='btn btn-light' defaultValue="Cancel"  /></Link> <br /><br />
        </form>
       
      </div>
     
      </CompSection>
    </Fragment>
      );

}
 




EditUserForm.propTypes ={
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth
});

export default connect( mapStateToProps , { setAlert, register,  getCurrentUser })(withRouter(EditUserForm));






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