import React ,{Component}from 'react';
import CompSection from '../CompSection/CompSection';
import CompDiv from '../CompSection/CompDiv/CompDiv';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import classes from './Contact.module.css';
import MapIcon from '@material-ui/icons/Map';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Form } from 'react-bootstrap';
//import axios from 'axios'

class Contact extends Component {
  constructor(props){
    super(props);
    this.state= {
      name: '',
      number: '',
      email: '',
      message: '',
    }
  }

  resetForm(){
    
    this.setState({name: '',number: '', email: '', message: ''})
 }


  render() {
    return (
        <Aux>

<CompSection>
     
        <CompDiv>
         
          <h1>Get in Touch</h1> 
          <div className="row">
            <div className="col-md">
        <Form id="contact-form" /*onSubmit={this.handleSubmit.bind(this)}*/ method="POST" action="send">
           <Form.Group  className={classes.FormInput}>
             <Form.Control 
               size="lg"
               type="text" 
               placeholder="*Name"
               name="name" 
             
               value={this.state.name} 
               onChange={this.onNameChange.bind(this)}
               required 
               className={classes.FormControl}/> 
          </Form.Group>
               
          <Form.Group  className={classes.FormInput}>
             <Form.Control 
               size="lg"
               type="number"
               placeholder="*Phone No."
               name="number" 
               value={this.state.number} 
               onChange={this.onNumberChange.bind(this)}
               required 
               className={classes.FormControl}/> 
          </Form.Group>
                
          <Form.Group  className={classes.FormInput}>
             <Form.Control 
               size="lg"
               type="email" 
               
               placeholder="*Email"
               aria-describedby="emailHelp"
               name="email" 
               value={this.state.email} 
               onChange={this.onEmailChange.bind(this)}
               required 
               className={classes.FormControl}/> 
          </Form.Group>
               
          <Form.Group controlId="ControlTextarea" className={classes.FormInput}>
             <Form.Control 
             as="textarea" 
               name="message"
               cols="30"
               rows="5"
              
               placeholder="Your Message"
               value={this.state.message} 
               onChange={this.onMessageChange.bind(this)}
               className={classes.FormControl}/> 
          </Form.Group>
               
                <button type="submit" className="btn btn-dark my-1">Send Message</button>
              </Form> 
            </div>
            <div className="col-md contact-info">
              <div className="follow"><b>Address:</b><br></br><MapIcon/>Bdv Bucuresti,CJ, ROMANIA</div>
              <br></br>
              <div className="follow"><b>Phone:</b><br></br><PhoneIcon />0040264121212</div>
              <br></br>
              <div className="follow"><b>Email:</b><br></br><EmailIcon />wbss@office.com</div>
              <br></br>
              <div className="follow"><label><b>Get Social:</b></label><br/>
                <a href="http://www.facebook.com"><FacebookIcon color="primary" style={{fontSize:'30px'}}/></a>{' '}
                <a href="http://www.youtube.com"><YouTubeIcon color="secondary" style={{fontSize:'30px'}}/></a>{' '}
                <a href="http://www.twitter.com"><TwitterIcon color="primary" style={{fontSize:'30px'}}/></a>{' '}
                <a href="http://www.instagram.com"><InstagramIcon color="secondary"  style={{fontSize:'30px'}}/>  </a>
              </div>
            </div>
          </div>
          
        </CompDiv>
      
      </CompSection>
            
        </Aux>
    );
   }
   onNameChange(event) {
    this.setState({name: event.target.value})
    }
    onNumberChange(event){
      this.setState({number: event.target.value})
    }
    onEmailChange(event) {
    this.setState({email: event.target.value})
    }
   
    onMessageChange(event) {
    this.setState({message: event.target.value})
    }
  
  
 }


export default Contact