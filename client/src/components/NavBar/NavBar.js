import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import NavBarItems from './NaBarItems/NavBarItems';

const navBar = (props) => {
    
  
  return(
    <Aux>
      
      <NavBarItems 
      open={props.open}
   />
     
    </Aux>
  )
}

export default navBar;