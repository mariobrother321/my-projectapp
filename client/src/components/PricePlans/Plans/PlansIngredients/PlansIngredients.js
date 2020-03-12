import React, { Component } from 'react';
import classes from './PlansIngredients.module.css';
import PropTypes from 'prop-types';


class PlanIngredient extends Component {
    render() {
        let ingredient = null;

   switch (this.props.type) {
       case ('bottom'): 
       ingredient =
       <div className={classes.Bottom}></div>;
       break;
       case ('top'):
        ingredient = 
        <div className={classes.Top}></div>;
        break;
        case ('meat'):
        ingredient = 
        <div className={classes.Meat}></div>;
        break;
        case ('cheese'):
        ingredient = 
        <div className={classes.Cheese}></div>;
        break;
        case ('bacon'):
        ingredient = 
        <div className={classes.Bacon}></div>;
        break;
        case ('salad'):
        ingredient = 
        <div className={classes.Salad}></div>;
        break;
        default:
            ingredient = null 
   }

   return ingredient;
    }
}

PlanIngredient.propTypes ={
    type:PropTypes.string.isRequired
}

export default PlanIngredient;