import {combineReducers} from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post';
import cartReducer from './cartReducer'
import productReducer from './productReducer'



export default combineReducers({
    alert,
    auth,
    profile,
    post,
    cartReducer,
    productReducer,
   

});
