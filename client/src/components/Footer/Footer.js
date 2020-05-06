import React from 'react';
import classes from './Footer.module.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';



const Footer = (props) => (
<Aux>
    <div className={classes.Footer}> 
    <div className="container text-center">
        <p><i className="fa fa-registered"></i> Made by Web Bussiness Solution </p>     
    </div>
    </div>
</Aux>    
  );
  
  
  export default Footer; 