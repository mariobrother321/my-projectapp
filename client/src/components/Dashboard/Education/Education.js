import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Moment from 'react-moment';
import classes from './Education.module.css';
import {Table} from 'react-bootstrap';
import {deleteEducation} from '../../../action/profile';

const Education = ({ education, deleteEducation }) => {

const educations = education.map(edu => (
    
    <tr key={edu._id}>
        <td className={classes.Table}>{edu.school}</td>
        <td  className={classes.Table}>{edu.degree}</td>
        <td  className={classes.Table}>
          <Moment format='YYYY/MM/DD'>
              {edu.from}</Moment> - {' '}
                 { edu.to === null ? ('Now') : (<Moment format='YYYY/MM/DD'>
                  {edu.to}</Moment>)
              }
        </td>
        <td>
            <button onClick = { () => deleteEducation(edu._id)} className="btn btn-danger">Delete </button>
        </td>
    </tr>
    
))

    return (
        <Fragment>
            <h2 className={classes.My2}>Education Credentials</h2>
              <Table>
                  <thead>
                      <tr>
                          <th className={classes.Border}>School</th>
                          <th className={classes.hideSm}>Degree</th>
                          <th className={classes.hideSm}>Years</th>
                          <th className={classes.Border}/>
                      </tr>
                  </thead>
                  <tbody>{educations}</tbody>

              </Table>
        </Fragment>
    )
}

Education.propTypes = {
     education: PropTypes.array.isRequired,
     deleteEducation: PropTypes.func.isRequired
}

export default connect(null, {deleteEducation})(Education);
