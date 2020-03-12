import React from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
//import Alert from '../../Layout/Alert';

const modal = (props) => (

<Aux>

<div className={classes.Modal}>
       {props.children}
</div>

</Aux>

)

 export default modal;
