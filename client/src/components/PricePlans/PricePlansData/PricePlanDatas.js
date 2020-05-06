import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import classes from './PricePlansDatas.module.css';
import {withRouter} from 'react-router-dom';
import CompLocalSection from '../../CompSection/CompLocalSection/CompLocalSection';
import CompDiv from '../../CompSection/CompDiv/CompDiv';

const pricePlansDatas = (props) => {
    

    return(
<Aux>
  <CompLocalSection>
    <CompDiv>

          <h1>Price Plans</h1>
          <div className="row">
            <div className="col-md-auto">
              <div className={classes.SinglePrice1}>
                <div className={classes.PriceHead}>
                  <h2>Free</h2>
                  <p>£0/<span>month</span></p>
                </div>
                <div className={classes.PriceContent}>
                  <ul>
                    <li><i className="fa fa-check-circle"style={{color: ' rgb(63, 248, 7)',
                                                                	margin: '5px',
	                                                                fontSize:'15px'}} > </i>5GB Space</li>
                    <li><i className="fa fa-check-circle"style={{color: ' rgb(63, 248, 7)',
                                                                	margin: '5px',
	                                                                fontSize:'15px'}}> </i>10GB Bandwith</li>
                    <li><i className="fa fa-times-circle" style={{color: 'red',
	                                                                 margin: '5px',
	                                                                 fontSize: '15px'}} />15 Email Accounts</li>
                    <li><i className="fa fa-times-circle" style={{color: 'red',
	                                                                 margin: '5px',
	                                                                 fontSize: '15px'}} />Unlimited Domain</li>
                    <li ><i className="fa fa-times-circle" style={{color: 'red',
	                                                                 margin: '5px',
	                                                                 fontSize: '15px'}} 
                                                                   />Unlimited Support</li>
                  </ul>
                </div>
                <div className={classes.PriceButton}>
                <a href="/buymore"
                style={{textDecoration: 'none', float: 'right'}}>
                  <input 
                  type="button" 
                  name="more-btn" 
                  defaultValue="Buy" /></a><br />
               
                </div>
              </div>
            </div>
            <div className="col-md-auto">
              <div className={classes.SinglePrice}>
                <div className={classes.PriceHead}>
                  <h2>Start Up</h2>
                  <p>£10/<span>month</span></p>
                </div>
                <div className={classes.PriceContent}>
                  <ul>
                    <li><i className="fa fa-check-circle"style={{color: ' rgb(63, 248, 7)',
                                                                	margin: '5px',
	                                                                fontSize:'15px'}}> </i>10GB Space</li>
                    <li><i className="fa fa-check-circle"style={{color: ' rgb(63, 248, 7)',
                                                                	margin: '5px',
	                                                                fontSize:'15px'}}> </i>100GB Bandwith</li>
                    <li><i className="fa fa-check-circle"style={{color: ' rgb(63, 248, 7)',
                                                                	margin: '5px',
	                                                                fontSize:'15px'}} />15 Email Accounts</li>
                    <li><i className="fa fa-times-circle" style={{color: 'red',
	                                                                 margin: '5px',
	                                                                 fontSize: '15px'}} />Unlimited Domain</li>
                    <li><i className="fa fa-times-circle" style={{color: 'red',
	                                                                 margin: '5px',
	                                                                 fontSize: '15px'}}  />Unlimited Support</li>
                  </ul>
                </div>
                <div className={classes.PriceButton}>
                <a href="/buymore"
                style={{textDecoration: 'none', float: 'right'}}>
                  <input 
                  type="button" 
                  name="more-btn" 
                  defaultValue="Buy" /></a><br />
                </div>
              </div>
            </div>
            <div className="col-md-auto">
              <div className={classes.SinglePrice}>
                <div className={classes.PriceHead}>
                  <h2>Business </h2>
                  <p>£50/<span>month</span></p>
                </div>
                <div className={classes.PriceContent}>
                  <ul>
                    <li><i className="fa fa-check-circle"style={{color: ' rgb(63, 248, 7)',
                                                                	margin: '5px',
	                                                                fontSize:'15px'}}> </i>20GB Space</li>
                    <li><i className="fa fa-check-circle"style={{color: ' rgb(63, 248, 7)',
                                                                	margin: '5px',
	                                                                fontSize:'15px'}}> </i>200GB Bandwith</li>
                    <li><i className="fa fa-check-circle"style={{color: ' rgb(63, 248, 7)',
                                                                	margin: '5px',
	                                                                fontSize:'15px'}}/>50 Email Accounts</li>
                    <li><i className="fa fa-check-circle"style={{color: ' rgb(63, 248, 7)',
                                                                	margin: '5px',
	                                                                fontSize:'15px'}}/>Unlimited Domain</li>
                    <li><i className="fa fa-times-circle" style={{color: 'red',
	                                                                 margin: '5px',
	                                                                 fontSize: '15px'}}  />Unlimited Support</li>
                  </ul>
                </div>
                <div className={classes.PriceButton}>
                <a href="/buymore"
                style={{textDecoration: 'none', float: 'right'}}>
                  <input 
                  type="button" 
                  name="more-btn" 
                  defaultValue="Buy" /></a><br /> 
                </div>
              </div>
            </div>
            <div className="col-md-auto">
              <div className={classes.SinglePrice4}>
                <div className={classes.PriceHead}>
                  <h2>Advanced</h2>
                  <p>£110/<span>month</span></p>
                </div>
                <div className={classes.PriceContent}>
                  <ul>
                    <li><i className="fa fa-check-circle" style={{color: ' rgb(63, 248, 7)',
                                                                	margin: '5px',
	                                                                fontSize:'15px'}}/>50GB Space</li>
                    <li><i className="fa fa-check-circle" style={{color: ' rgb(63, 248, 7)',
                                                                	margin: '5px',
	                                                                fontSize:'15px'}}/>500GB Bandwith</li>
                    <li><i className="fa fa-check-circle" style={{color: 'rgb(63, 248, 7)',
                                                                	margin: '5px',
	                                                                fontSize:'15px'}}/>Accounts</li>
                    <li><i className="fa fa-check-circle"style={{color: ' rgb(63, 248, 7)',
                                                                	margin: '5px',
	                                                                fontSize:'15px'}} />Unlimited Domain</li>
                    <li><i className="fa fa-check-circle" style={{color: ' rgb(63, 248, 7)',
                                                                	margin: '5px',
	                                                                fontSize:'15px'}}/>Unlimited Support</li>
                  </ul>
                </div>
                <div className={classes.PriceButton}>
                <a href="/buymore"
                style={{textDecoration: 'none', float: 'right'}}>
                  <input 
                  type="button" 
                  name="more-btn" 
                  defaultValue="Buy" /></a><br /> 
                </div>
              </div>
            </div>
          </div>
          <div className={classes.More}>
            <a href="/morepage" style={{textDecoration: 'none', float: 'right'}}><input type="button" name="more-btn" defaultValue="More" /></a><br /><br />
          </div>
     </CompDiv>
  </CompLocalSection>
</Aux>
    );

    }

export default withRouter(pricePlansDatas);