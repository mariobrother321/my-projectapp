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
                djfbkwebfwajhbfwejbvwevwvbJHVKFLE
                WKNHEFJKAWEEBEFJAWFHWEBFKJWEebf
                kjbkjwebfjwejkweebfjkwebfwebfwe
                djfbkwebfwajhbfwejbvwevwvbJHVKFLE
                WKNHEFJKAWEEBEFJAWFHWEBFKJWEebf
                kjbkjwebfjwejkweebfjkwebfwebfwe
                djfbkwebfwajhbfwejbvwevwvbJHVKFLE
                WKNHEFJKAWEEBEFJAWFHWEBFKJWEebf
                kjbkjwebfjwejkweebfjkwebfwebfwe
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
        <div className={classes.ReadMoreBtn}>
          <a href= "readmorepgn.html"style={{textDecoration: 'none'}}><input type="button" name="readmore-btn" defaultValue= "More"/>
              </a>
              </div>
      </section>

        
        

    </Aux>
       
      );
    }


export default aboutUsIngredients ;