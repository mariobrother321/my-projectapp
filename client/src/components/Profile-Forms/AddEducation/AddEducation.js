import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { addEducation } from '../../../action/profile';
import { Link, withRouter} from 'react-router-dom';
import { Form } from 'react-bootstrap';
import CompSection from '../../CompSection/CompSection';
import CompDiv from '../../CompSection/CompDiv/CompDiv';
import classes from './AddEducation.module.css';
import Alert from '../../Layout/Alert';


const AddEducation = ({addEducation, history}) => {

    const [formData, setFormaData] = useState({
         school: '',
         degree: '',
         fieldofstudy: '',
         from: '',
         to: '',
         current: false,
         description: ''
    });

    const [toDateDisabled, toggleDisabled] = useState(false);

    const {school, degree, fieldofstudy, to, from, current, description}= formData;

    const onChange = e => setFormaData({ ...formData, [e.target.name]: e.target.value});

    return (

  <Fragment >
    <CompSection>
      <CompDiv>
     
        <h1>
       Add Your Education
      </h1>
      <p className="lead">
        <i className="fas fa-code-branch"></i> Add any school or courses that you took.
      </p>
      <small>* = required field</small>
<div className={classes.AddEducation}>
      <Form  className={classes.FormBasicInfo} onSubmit={e =>{
          e.preventDefault();
          addEducation(formData, history);
      } }>
          
          <Form.Group  className={classes.FormInput}>
             <Form.Control 
               size="lg"
               type="text" 
               placeholder="*School or Course"
               name="school" 
               value={school} 
               onChange={e => onChange(e)}
               required 
               className={classes.FormControl}/> 
          </Form.Group>

          <Form.Group className={classes.FormInput}>
             <Form.Control 
               size="lg"
               type="text" 
               placeholder="*Degree or Certificate"
               name="degree" 
               value={degree} 
               onChange={e => onChange(e)} 
               required
               className={classes.FormControl}/> 
          </Form.Group>

          <Form.Group className={classes.FormInput}>
             <Form.Control 
               size="lg"
               type="text" 
               placeholder="Field of Study"
               name="fieldofstudy" 
               value={fieldofstudy} 
               onChange={e => onChange(e)}
               className={classes.FormControl}/> 
          </Form.Group>
          
          <Form.Group  className={classes.FormInput}>
             <Form.Control 
               size="lg"
               type="date" 
               name="from" 
               value={from} 
               onChange={e => onChange(e)}
               className={classes.FormControl}/> 
          </Form.Group>

          <Form.Group className={classes.FormInput}>
          
          <Form.Check 
               size="lg"
               label="Current "
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
               placeholder="Program Description"
               value={description} 
               onChange={e => onChange(e)}
               className={classes.FormControl}/> 
          </Form.Group>
          
      
        <input type="submit" className="btn btn-dark my-1 " />{' '}
        <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>

        </Form>
        </div>
      </CompDiv>
      <Alert/>
    </CompSection>
  </Fragment>
    
      
        
    )
}

AddEducation.propTypes = {
   addEducation: PropTypes.func.isRequired
}

export default connect(null, {addEducation})(withRouter(AddEducation))
