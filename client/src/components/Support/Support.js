import React from 'react';
import CompSection from '../CompSection/CompSection';
import CompDiv  from '../CompSection/CompDiv/CompDiv';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import {Link, withRouter} from 'react-router-dom'

const Support = (props) => {
    return (
        <Aux>
        <div>
            <CompSection>
                <CompDiv>
                  <div className="container">
                      <h2 className="text-white">What is a 24/7 customer support service?</h2>
                       <p>What is a 24/7 customer support service?
                          Each product or service sold on the market is supposed to be backed up by a 
                          customer service as a part of its quality guarantee. 
                          In the field of Internet and web hosting services, customer support is one of the most prioritized plan features. An ISP may offer the fastest Internet connection or a host may provide the most stable server configuration in their region. However, without a customer support option included the quality of their services may drop significantly, 
                          making them less attractive to the clientele.
                          </p><br></br>
                   <h2 className="text-white">24/7 Phone and Email Support</h2>
                     <p>When hosting your website on the web you will need to make sure that the company providing 
                       the server environment and the related hosting services will also offer customer support round the clock. 
                       This way you will receive technical assistance anytime you need to avoid any possible downtime for your websites.
                       To get in touch with us, speak directly with our team, <Link  to="/login">Login</Link> and tell us your query.
                      
                     </p><br></br>
                       <h3 className="text-white">Why a 24/7 customer support service?</h3>
                     <p>
                       The Internet and hosting services are delivered to the customer in real time on a continuous basis and 
                       the slightest problem with their quality will be immediately noticed by the customer. That’s why ISPs and hosts must ensure a 24/7/365 customer support team working to quickly resolve any eventual problem the customer might experiences with the received services. The faster and more diverse the support service is, 
                       the better the chances are for the company to keep their customers.
                    </p>
                   <Link to="/contact" className="btn btn-dark">Contact Us</Link>
                   </div>
                </CompDiv>

            </CompSection>
            
        </div>
        </Aux>
    )
}

export default withRouter(Support);
