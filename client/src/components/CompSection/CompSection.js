import React from 'react'
import classes from './CompSection.module.css';

 const CompSection = (props) => {
    return (
        <div className={classes.CompSection}>
            <div className={classes.CompSection1}>
            <section className="container">
            {props.children}
            </section>
            </div>
        </div>
    )
}

export default CompSection;
