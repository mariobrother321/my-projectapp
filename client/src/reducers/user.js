import {
    
    UPDATE_USER,
    GET_USER,
    
  } from '../action/types';


  const initialState = {
    user: null,
    users: [],
    loading: true,
    error: {}
  };
  
  export default function(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
        case GET_USER:
            case UPDATE_USER:
              return{
                ...state,
                user: payload,
                loading: false
              }

              default:
        return state;
    }


}