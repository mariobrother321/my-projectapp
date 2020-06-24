import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import classes from './OurTeamData.module.css';
//import teamMember from '../../../assets/images/teammember1.jpg'
import CompLocalSection from '../../CompSection/CompLocalSection/CompLocalSection';
import CompDiv from '../../CompSection/CompDiv/CompDiv';
import User from '../../../assets/images/teammember12.jpeg';
import User1 from '../../../assets/images/teammember11.jpeg';
import User2 from '../../../assets/images/teammember13.jfif';
import User3 from '../../../assets/images/teammember14.jfif';
import FacebookIcon from '@material-ui/icons/Facebook';
//import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const ourTeamData = (props) => (
  <Aux>
    <CompLocalSection>
      <CompDiv>
      
            <h1 className="text-white">Our Team </h1>
            <div className="row">
              <div className="col-md-auto profile-pic text-center">
                <div className={classes.ImageBox}>
                  <img src={User} className={classes.ImageResponsive} alt=""/>
                  <ul>
                   
                    <a href="http://www.facebook.com"><li><FacebookIcon style={{
                        height: '25px',
                        width: '25px',
                        color: '#007bff',
                        background: '#fff',
                        padding: '4px',
                        borderRadius:'50%'
                    }}  /></li></a>
                    <a href="http://www.twitter.com"><li><TwitterIcon style={{
                        height: '25px',
                        width: '25px',
                        color: '#007bff',
                        background: '#fff',
                        padding: '4px',
                        borderRadius:'50%'
                    }}  /></li></a>
                    <a href="http://www.instagram.com"><li><InstagramIcon style={{
                        height: '25px',
                        width: '25px',
                        color: '#007bff',
                        background: '#fff',
                        padding: '4px',
                        borderRadius:'50%'
                    }} /></li></a>                                                          
	                                                       
                  </ul>
                </div>
                <h2 className="text-white">Rita Roger</h2>
                <h3>Founder/ CEO</h3>
                <p> Proud to help our nation</p>
              </div>
              <div className="col-md-auto profile-pic text-center">
                <div className={classes.ImageBox}>
                  <img src={User1} className={classes.ImageResponsive} alt=""/>
                  <ul>
                   
                    <a href="http://www.facebook.com"><li><FacebookIcon style={{
                        height: '25px',
                        width: '25px',
                        color: '#007bff',
                        background: '#fff',
                        padding: '4px',
                        borderRadius:'50%'
                    }}  /></li></a>
                    <a href="http://www.twitter.com"><li><TwitterIcon style={{
                        height: '25px',
                        width: '25px',
                        color: '#007bff',
                        background: '#fff',
                        padding: '4px',
                        borderRadius:'50%'
                    }} /></li></a>
                    <a href="http://www.instagram.com"><li><InstagramIcon style={{
                        height: '25px',
                        width: '25px',
                        color: '#007bff',
                        background: '#fff',
                        padding: '4px',
                        borderRadius:'50%'
                    }}  /></li></a>                                                          	
	                                                                
                  </ul>
                </div>
                <h2 className="text-white">Mei Lee</h2>
                <h3>Graphic Designer</h3>
                <p> Proud to help our nation</p>
              </div>
              <div className="col-md-auto profile-pic text-center">
                <div className={classes.ImageBox}>
                  <img src={User2} className={classes.ImageResponsive} alt=""/>
                  <ul>
                   
                    <a href="http://www.facebook.com"><li><FacebookIcon style={{
                        height: '25px',
                        width: '25px',
                        color: '#007bff',
                        background: '#fff',
                        padding: '4px',
                        borderRadius:'50%'
                    }} /></li></a>
                    <a href="http://www.twitter.com"><li><TwitterIcon style={{
                        height: '25px',
                        width: '25px',
                        color: '#007bff',
                        background: '#fff',
                        padding: '4px',
                        borderRadius:'50%'
                    }} /></li></a>
                    <a href="http://www.instagram.com"><li><InstagramIcon style={{
                        height: '25px',
                        width: '25px',
                        color: '#007bff',
                        background: '#fff',
                        padding: '4px',
                        borderRadius:'50%'
                    }} /></li></a>                                                          
	                                                                
                  </ul>
                </div>
                <h2 className="text-white">Daven Crodence</h2>
                <h3>Human Resources</h3>
                <p> Proud to help our nation</p>
              </div>

              <div className="col-md-auto profile-pic text-center">
                <div className={classes.ImageBox}>
                  <img src={User3} className={classes.ImageResponsive} alt=""/>
                  <ul>
                   
                    <a href="http://www.facebook.com"><li><FacebookIcon style={{
                        height: '25px',
                        width: '25px',
                        color: '#007bff',
                        background: '#fff',
                        padding: '4px',
                        borderRadius:'50%'
                    }} /></li></a>
                    <a href="http://www.twitter.com"><li><TwitterIcon style={{
                        height: '25px',
                        width: '25px',
                        color: '#007bff',
                        background: '#fff',
                        padding: '4px',
                        borderRadius:'50%'
                    }} /></li></a>
                    <a href="http://www.instagram.com"><li><InstagramIcon style={{
                        height: '25px',
                        width: '25px',
                        color: '#007bff',
                        background: '#fff',
                        padding: '4px',
                        borderRadius:'50%'
                    }} /></li></a>                                                          
	                                                                
                  </ul>
                </div>
                <h2 className="text-white">Reno Valverde</h2>
                <h3>Human Resources</h3>
                <p> Proud to help our nation</p>
              </div>

             


              

            
              
            </div>
            
      </CompDiv>
    </CompLocalSection>
  </Aux>


);


export default ourTeamData;