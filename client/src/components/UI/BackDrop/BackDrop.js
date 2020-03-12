import React from 'react';
import cleasses from './BackDrop.module.css';


const backdrop = (props) => (
    props.show ? <div className={cleasses.Backdrop}></div> : null
);

export default backdrop;