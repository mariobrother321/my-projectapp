import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import classes from './OurTeamData.module.css';
import teamMember from '../../../assets/images/teammember1.jpg'

const ourTeamData = (props) => (
   <Aux>
      <section className={classes.Team}>
          <div className="container">
            <h1 style={{fontWeight:'bold',color: 'black'}}>Our Team </h1>
            <div className="row">
              <div className="col-md-3 profile-pic text-center">
                <div className={classes.ImageBox}>
                  <img src={teamMember} className={classes.ImageResponsive} alt=""/>
                  <ul>
                   
                    <a href="facebookpgn.html"><li><i className="fa fa-facebook" style={{
                        height: '25px',
                        width: '25px',
                        color: '#007bff',
                        background: '#fff',
                        padding: '4px',
                        borderRadius:'50%'
                    }}  /></li></a>
                    <a href="twitterpgn.html"><li><i className="fa fa-twitter"style={{
                        height: '25px',
                        width: '25px',
                        color: '#007bff',
                        background: '#fff',
                        padding: '4px',
                        borderRadius:'50%'
                    }}  /></li></a>
                    <a href=">instagrampgn.html"><li><i className="fa fa-instagram" style={{
                        height: '25px',
                        width: '25px',
                        color: '#007bff',
                        background: '#fff',
                        padding: '4px',
                        borderRadius:'50%'
                    }} /></li></a>                                                          
	                                                       
                  </ul>
                </div>
                <h2>Anais M Dinca</h2>
                <h3>Founder/ CEO</h3>
                <p> Proud to help our nation</p>
              </div>
              <div className="col-md-3 profile-pic text-center">
                <div className={classes.ImageBox}>
                  <img src={teamMember} className={classes.ImageResponsive} alt=""/>
                  <ul>
                   
                    <a href="facebookpgn.html"><li><i className="fa fa-facebook" style={{
                        height: '25px',
                        width: '25px',
                        color: '#007bff',
                        background: '#fff',
                        padding: '4px',
                        borderRadius:'50%'
                    }}  /></li></a>
                    <a href="twitterpgn.html"><li><i className="fa fa-twitter" style={{
                        height: '25px',
                        width: '25px',
                        color: '#007bff',
                        background: '#fff',
                        padding: '4px',
                        borderRadius:'50%'
                    }} /></li></a>
                    <a href=">instagrampgn.html"><li><i className="fa fa-instagram" style={{
                        height: '25px',
                        width: '25px',
                        color: '#007bff',
                        background: '#fff',
                        padding: '4px',
                        borderRadius:'50%'
                    }}  /></li></a>                                                          	
	                                                                
                  </ul>
                </div>
                <h2>Raluca R Dinca</h2>
                <h3>Graphic Designer</h3>
                <p> Proud to help our nation</p>
              </div>
              <div className="col-md-3 profile-pic text-center">
                <div className={classes.ImageBox}>
                  <img src={teamMember} className={classes.ImageResponsive} alt=""/>
                  <ul>
                   
                    <a href="facebookpgn.html"><li><i className="fa fa-facebook" style={{
                        height: '25px',
                        width: '25px',
                        color: '#007bff',
                        background: '#fff',
                        padding: '4px',
                        borderRadius:'50%'
                    }} /></li></a>
                    <a href="twitterpgn.html"><li><i className="fa fa-twitter" style={{
                        height: '25px',
                        width: '25px',
                        color: '#007bff',
                        background: '#fff',
                        padding: '4px',
                        borderRadius:'50%'
                    }} /></li></a>
                    <a href=">instagrampgn.html"><li><i className="fa fa-instagram" style={{
                        height: '25px',
                        width: '25px',
                        color: '#007bff',
                        background: '#fff',
                        padding: '4px',
                        borderRadius:'50%'
                    }} /></li></a>                                                          
	                                                                
                  </ul>
                </div>
                <h2>Marian M Dinca</h2>
                <h3>Human Resources</h3>
                <p> Proud to help our nation</p>
              </div>
              <div className="col-md-3 profile-pic text-center">
                <div className={classes.ImageBox}>
                  <img src={teamMember} className={classes.ImageResponsive} alt=""/>
                  <ul>
                    <a href="facebookpgn.html"><li><i className="fa fa-facebook" style={{
                        height: '25px',
                        width: '25px',
                        color: '#007bff',
                        background: '#fff',
                        padding: '4px',
                        borderRadius:'50%'
                    }} /></li></a>
                    <a href="twitterpgn.html"><li><i className="fa fa-twitter" style={{
                        height: '25px',
                        width: '25px',
                        color: '#007bff',
                        background: '#fff',
                        padding: '4px',
                        borderRadius:'50%'
                    }} /></li></a>
                    <a href=">instagrampgn.html"><li><i className="fa fa-instagram" style={{
                        height: '25px',
                        width: '25px',
                        color: '#007bff',
                        background: '#fff',
                        padding: '4px',
                        borderRadius:'50%'
                    }} /></li></a>
                  </ul>
                </div>
                <h2>Marius M DINCA</h2>
                <h3>PR Consultant</h3>
                <p> Proud to help our nation</p>
              </div>
            </div>
          </div>
        </section>

   </Aux>


);


export default ourTeamData;