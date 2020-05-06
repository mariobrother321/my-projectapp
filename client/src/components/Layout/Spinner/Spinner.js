import React, { Fragment } from 'react';
import spinner from '../../../assets/images/spinner.gif';
import classes from './Spinner.module.css';

export default () => (
    <Fragment>
        <div className={classes.SpinnerDiv}>
        <img className={classes.ImgSpinner}
        src={spinner}
        alt= 'Loading...'
        />
        </div>
    </Fragment>
);