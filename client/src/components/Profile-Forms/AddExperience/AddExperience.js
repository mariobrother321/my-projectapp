import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { addExperience } from '../../../action/profile';
import { Link, withRouter } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import classes from './AddExperience.module.css';
import CompDiv from '../../CompSection/CompDiv/CompDiv';
import CompSection from '../../CompSection/CompSection';
import Alert from '../../Layout/Alert';


const AddExperience = ({addExperience, history}) => {

    const [formData, setFormaData] = useState({
         company: '',
         title: '',
         location: '',
         from: '',
         to: '',
         current: false,
         description: ''
    });

    const [toDateDisabled, toggleDisabled] = useState(false);

    const {company, title, location, to, from, current, description}= formData;

    const onChange = e => setFormaData({ ...formData, [e.target.name]: e.target.value});

    return (

      <CompSection>
        <CompDiv>
          <Fragment >

              <h1 className="large" style={{color:'white'}}>
       Add Experience
      </h1>
      <p className="lead">
        <i className="fas fa-code-branch"></i> Add any developer/programming
        positions that you have had in the past
      </p>
      <small>* = required field</small>

      <Form onSubmit={e =>{
          e.preventDefault();
          addExperience(formData, history);
      } }>
          
          <Form.Group controlId="formPlainText" className={classes.FormInput}>
             <Form.Control 
               size="lg"
               type="text" 
               placeholder="*Job Title"
               name="title" 
               value={title} 
               onChange={e => onChange(e)}
               required 
               className={classes.FormControl}/> 
          </Form.Group>

          <Form.Group controlId="formPlainText" className={classes.FormInput}>
             <Form.Control 
               size="lg"
               type="text" 
               placeholder="*Company"
               name="company" 
               value={company} 
               onChange={e => onChange(e)} 
               required
               className={classes.FormControl}/> 
          </Form.Group>

          <Form.Group controlId="formPlainText" className={classes.FormInput}>
             <Form.Control 
               size="lg"
               type="text" 
               placeholder="Location"
               name="location" 
               value={location} 
               onChange={e => onChange(e)}
               className={classes.FormControl}/> 
          </Form.Group>
          
          <Form.Group controlId="" className={classes.FormInput}>
             <Form.Control 
               size="lg"
               type="date" 
               name="from" 
               value={from} 
               onChange={e => onChange(e)}
               className={classes.FormControl}/> 
          </Form.Group>

          <Form.Group controlId="formInPuts" className={classes.FormInput}>
          
          <Form.Check 
               size="lg"
               label="Current Job"
               as='input'
               type="checkbox" 
               name="current" 
               checked={current}
               value={current} 
               onChange={e => {
                setFormaData({...formData, current: !current });
                toggleDisabled(!toDateDisabled);
                }}
                className={classes.FormControl}/> 
          </Form.Group>
        
          <Form.Group controlId="formInPuts" className={classes.FormInput}>
             <Form.Control 
               size="lg"
               type="date" 
               name="to" 
               value={to} 
               onChange={e => onChange(e)}
               disabled={ toDateDisabled ? 'disabled' : ''}
               className={classes.FormControl}/> 
          </Form.Group>
          
          <Form.Group controlId="ControlTextarea" className={classes.FormInput}>
             <Form.Control as="textarea" 
               name="description"
               cols="30"
               rows="5"
               placeholder="Job Description"
               value={description} 
               onChange={e => onChange(e)}
               className={classes.FormControl}/> 
          </Form.Group>
          
      
        <input type="submit" className="btn btn-dark my-1" />{' '}
        <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>

         </Form>
      </Fragment>
    </CompDiv>
    <Alert/>
  </CompSection>
      
        
  )
}

AddExperience.propTypes = {
   addExperience: PropTypes.func.isRequired
}

export default connect(null, {addExperience})(withRouter(AddExperience));
