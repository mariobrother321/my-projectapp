import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary'
import classes from './AboutUsIngredients.module.css';



    

const aboutUsIngredients = (props) => {
    
      return (
      
<Aux>
    
<section className={classes.Section} id="about">
        <div className="container-fluid" style={{backgroundColor: 'white'}}>
          <div className="row">
            <div className="col-md-6">
              <h2 className={classes.Header}>About Us</h2> 
              <div className={classes.AboutUsContent}>
Web Business Solutions provides end-to-end hardware, IT and business process services to clients across EU, 
utilizing a highly customized, cost efficient delivery model that combines on-site and off-site operations; 
Web Business Solutions empowers product innovation and decision-making through technology that optimizes the analysis, 
management and visualization of business and Engineering information.
Privately held since 1992 and employs more than 20 employees, many of them contractual professionals specialized in engineering applications.
With a 20-year-plus track record for product innovation and enabling new engineering products, 
Web Business Solutions consistently delivers a competitive advantage to its clients in the aerospace and consumer products.
Our mission is to help our clients with hardware and professional services of outstanding quality,
competence and objectivity, delivering the best solutions to fully satisfy client objectives in information technology, 
business processes and management. 
In all we do, we foster a culture of partnership, entrepreneurship and integrity, building a world class IT company
              </div >
             
            </div>
            <div className="col-md-6 skills-bar">
              <p className={classes.Para}>Adobe Photoshop</p>
              <div className={classes.Progress}>
                <div className="progress-bar" style={{width: '80%', justifyContent: 'center',borderRadius: '20px'}}>80% loading......
                </div>
              </div>
              <p className={classes.Para1}>Ui Design</p>
              <div className={classes.Progress}>
                <div className="progress-bar" style={{width: '85%', justifyContent: 'center',borderRadius: '20px'}}>85% loading......
                </div>
              </div>
              <p className={classes.Para2}>Word Press</p>
              <div className={classes.Progress}>
                <div className="progress-bar" style={{width: '75%',justifyContent: 'center',borderRadius: '20px'}}>75% loading......
                </div>
              </div>
              <p className={classes.Para3}>Graphic Design</p>
              <div className={classes.Progress}>
                <div className="progress-bar" style={{width: '50%', justifyContent: 'center',borderRadius: '20px'}}>50% loading......
                </div>
              </div>
            </div>
          </div>
          
        </div>
       
      </section>

        
        

    </Aux>
       
      );
    }


export default aboutUsIngredients ;