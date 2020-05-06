import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Moment from 'react-moment';
import classes from './Experience.module.css';
import {Table} from 'react-bootstrap';
import {deleteExperience} from '../../../action/profile';

const Experience = ({ experience, deleteExperience }) => {

const experiences = experience.map(exp => (
    
    <tr key={exp._id}>
        <td  className={classes.Table}>{exp.company}</td>
        <td  className={classes.Table}>{exp.title}</td>
        <td  className={classes.Table}>
          <Moment format='YYYY/MM/DD'>
              {exp.from}</Moment> - {' '}
                 { exp.to === null ? ('Now') : (<Moment format='YYYY/MM/DD'>
                  {exp.to}</Moment>)
              }
        </td>
        <td>
            <button onClick = {() => deleteExperience(exp._id) 
             } className="btn btn-danger">Delete </button>
        </td>
    </tr>
    
))

    return (
        <Fragment>
            <h2 className={classes.My2}>Experience Credentials</h2>
              <Table>
                  <thead>
                      <tr>
                          <th className={classes.Border}>Company</th>
                          <th className={classes.hideSm}>Title</th>
                          <th className={classes.hideSm}>Years</th>
                          <th className={classes.Border}/>
                      </tr>
                  </thead>
                  <tbody>{experiences}</tbody>

              </Table>
        </Fragment>
    )
}

Experience.propTypes = {
     experience: PropTypes.array.isRequired,
     deleteExperience: PropTypes.func.isRequired
    }

 
 
export default connect(null, {deleteExperience})(Experience);