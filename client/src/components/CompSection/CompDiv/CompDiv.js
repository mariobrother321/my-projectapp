import React from 'react'
import classes from './CompDiv.module.css';

 const CompDiv = (props) => {
    return (
        <div className={classes.CompDiv}>
                {props.children}
        </div>
    )
}

export default CompDiv;