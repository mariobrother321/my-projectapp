
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
              <blockquote> This is the best company that I ever met on this more and more demanding market and blalal alllalla hssjlk kjshkjkjkj </blockquote>
              <h3>Marian M Dinca<span> Co-Founder at WBSS</span></h3>
            </div>
          </div>
          
          
              <div className="col-md-auto profile-pic text-center">
                <div className={classes.ImageBox}>
                  <img src={User1} className={classes.ImageResponsive} alt=""/>
              <blockquote> This is the best company that I ever met on this more and 
                more demanding market and blalal alllalla hssjlk kjshkjkjkj </blockquote>
              <h3>Marian M Dinca<span> Co-Founder at WBSS</span></h3>
            </div>
          </div>
          
          
              <div className="col-md-auto  profile-pic text-center">
                <div className={classes.ImageBox}>
                  <img src={User2} className={classes.ImageResponsive} alt=""/>
              <blockquote> This is the best company that I ever met on this more 
                and more demanding market and blalal alllalla hssjlk kjshkjkjkj </blockquote>
              <h3>Marian M Dinca<span> Co-Founder at WBSS</span></h3>
            </div>
          </div>
          
          
              <div className="col-md-auto profile-pic text-center">
                <div className={classes.ImageBox}>
                  <img src={User3} className={classes.ImageResponsive} alt=""/>
              <blockquote> This is the best company that I ever met on this more
                 and more demanding market and blalal alllalla hssjlk kjshkjkjkj </blockquote>
              <h3>Marian M Dinca<span> Co-Founder at WBSS</span></h3>
            </div>
          </div>
        </div>
                
              </CompDiv>
            </CompSection>
        </Aux>
    
);

export default Testimonials;
