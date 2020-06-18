import axios from 'axios';
import {setAlert} from './alert';
import {
    REGISTER_SUCCESS, 
    REGISTER_FAIL, 
    USER_LOADED, 
    GET_USER,
    UPDATE_USER,
    AUTH_ERROR,
    USER_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_PROFILE
} from './types';
import setAuthToken from '../utils/sethAuthToken';

//Load User

export const loadUser = () => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token);
    }
    try {
       const res = await axios.get('/api/auth');

       dispatch({
           type: USER_LOADED,
           payload: res.data
       })

       

    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}

// Register User

export const register = ({ name, email, password, userImage ,  edit = false, history})=>  async dispatch => {

       const config = {
           headers: {
               
               'Content-Type': 'multipart/form-data',
               'Accept': 'application/json',
             
         }
       }
      
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("userImage", userImage);



    //const body = JSON.stringify({ userImage,name, email, password});
      
      
       
       try {
           console.log('merge1')
           
            const res = await axios.post('/api/users', formData,config);
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });

            //dispatch(setAlert(edit ? 'User Updated' : 'User Created', 'success'));

            //if(!edit) {
                //history.push('/dashboard');
            //}

          dispatch(loadUser())

       } catch (err) {
             const errors = err.response.data.errors;
             if (errors) {
                 errors.forEach(error => dispatch(setAlert(error.msg, `danger`)));
             }

            dispatch({
                type: REGISTER_FAIL
            });
       }
}

// Login User

export const login = ( email, password ) =>  async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ email, password});
    try {
        
         const res = await axios.post('/api/auth', body, config);
         dispatch({
             type: LOGIN_SUCCESS,
             payload: res.data
         });

         dispatch(loadUser());

    } catch (err) {
          const errors = err.response.data.errors;

          if (errors) {
              errors.forEach(error => dispatch(setAlert(error.msg, `danger`)));
          }

         dispatch({
             type: LOGIN_FAIL
         });
    }
}

//LOGOUT/Clear profile

export const logout = () => dispatch => {
    dispatch({ type: CLEAR_PROFILE });
    dispatch({ type: LOGOUT });
    
}

export const getCurrentUser = () => async dispatch => {
    
   

    try {
        const res = await axios.get(`/api/users/meuser`);

        dispatch({
           type: GET_USER,
           payload: res.data
        });
    } catch (err) {
        dispatch({
            type: USER_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status}
        });
    }
}