
import React from 'react';
import CompSection from '../CompSection/CompSection';
import CompDiv  from '../CompSection/CompDiv/CompDiv';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import User from '../../assets/images/testimonial1.jfif';
import User1 from '../../assets/images/testimonials2.jfif';
import User2 from '../../assets/images/testimonials3.jfif';
import User3 from '../../assets/images/testimonials4.jfif';
import classes from './Testimonials.module.css';


 const Testimonials = (props) => (
    
        <Aux>
           <CompSection>
               <CompDiv>
                 
                 <h1>Testimonials</h1>
                 <div className="row">
              <div className="col-md-auto profile-pic text-center">
                <div className={classes.ImageBox}>
                  <img src={User} className={classes.ImageResponsive} alt=""/>
              <blockquote> This company truly values its employees. 
                They provide professional and personal development. 
                They do truly believe in their mission statement, which is so impactful.I recommend to have a look! </blockquote>
              <h3>Veronica Granser<span> Founder at WBSS</span></h3>
            </div>
          </div>
          
          
              <div className="col-md-auto profile-pic text-center">
                <div className={classes.ImageBox}>
                  <img src={User1} className={classes.ImageResponsive} alt=""/>
              <blockquote> Company is having a very good result oriented team. 
                Colleagues at lower and middle level are very cooperative and helping. 
                Good team approach.This being said, the company it's the perfect place to start your career </blockquote>
              <h3>Walter Brown<span> Founder at WBSS</span></h3>
            </div>
          </div>
          
          
              <div className="col-md-auto  profile-pic text-center">
                <div className={classes.ImageBox}>
                  <img src={User2} className={classes.ImageResponsive} alt=""/>
              <blockquote>The company is open to innovation and readily adopts latest technology.
                 I love the fact that I am a part of a team that markets reliable, high-quality products and has a global client base. </blockquote>
              <h3>Ron Terry<span> Founder at WBSS</span></h3>
            </div>
          </div>
          
          
              <div className="col-md-auto profile-pic text-center">
                <div className={classes.ImageBox}>
                  <img src={User3} className={classes.ImageResponsive} alt=""/>
              <blockquote> This is the best company that I ever met on this more
                 and more demanding market. Amazing people to work with who really care about each other - they only hire for culture / personality.
                They believe in hiring the right people </blockquote>
              <h3>Bilal Wenall<span> Founder at WBSS</span></h3>
            </div>
          </div>
        </div>
                
              </CompDiv>
            </CompSection>
        </Aux>
    
);

export default Testimonials;
