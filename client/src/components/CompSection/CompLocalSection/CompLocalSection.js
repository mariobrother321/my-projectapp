import React from 'react'
import Aux from '../../../hoc/Auxiliary/Auxiliary'
import classes from './LocalSection.module.css';
 const CompLocalSection = (props) => {
    return (
        <Aux>
    <div className={classes.CompLocalSection}>
        <div className={classes.CompLocalSection1}>
            <section className="container">
               {props.children}
            </section>
        </div>
    </div>
        </Aux>
    )
}


export default CompLocalSection;

