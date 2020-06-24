import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import classes from './OurServicesDatas.module.css';
import DesktopWindowsTwoToneIcon from '@material-ui/icons/DesktopWindowsTwoTone';
import TabletMacTwoToneIcon from '@material-ui/icons/TabletMacTwoTone';
import InsertChartTwoToneIcon from '@material-ui/icons/InsertChartTwoTone';
import BrushTwoToneIcon from '@material-ui/icons/BrushTwoTone';
import CompLocalSection from  '../../CompSection/CompLocalSection/CompLocalSection';
import CompDiv from  '../../CompSection/CompDiv/CompDiv';


const ourServicesData = (props) => (
 
 <Aux>
  <CompLocalSection>
    <CompDiv>
        <div >
          <h1>Our Services</h1>
          <div className="row">
            <div className="col-md-auto text-center">
              <div className={classes.Icon}>
              <DesktopWindowsTwoToneIcon style={{paddingBottom: '30px',paddingRight: '35px' ,fontSize: '70px' }} />
              </div>
              <h3>Web Development</h3>
              <p>Client-focused, customer-centric, creating website solutions that deliver tangible business results, 
                WBS's web developers helps brands the ever-changing digital landscape.</p>
            </div>
            <div className="col-md-auto text-center">
              <div className={classes.Icon}>
              <TabletMacTwoToneIcon style={{paddingBottom: '33px',paddingRight: '32px' ,fontSize: '70px' }}/>
              </div>
              <h3>App Development</h3>
              <p>We don’t build what you could call ”beautiful apps”.
                 We build robust mobile apps, tailored for the specific and complex requirements that your business has.</p>
            </div>
            <div className="col-md-auto text-center">
              <div className={classes.Icon}>
              <InsertChartTwoToneIcon style={{paddingBottom: '33px',paddingRight: '32px' ,fontSize: '70px' }}/>
              </div>
              <h3>Digital Marketing</h3>
              <p>Today, our clients like Pfizer, YETI and TCL are all reaching and engaging their customers in new and different ways across the digital landscape. 
                Get in touch now and let's explore together, possibilities for your brand. </p>
            </div>
            <div className="col-md-auto text-center">
              <div className={classes.Icon}>
              <BrushTwoToneIcon style={{paddingBottom: '33px',paddingRight: '32px' ,fontSize: '70px' }}/>
              </div>
              <h3>Graphics Design</h3>
              <p>Through design thinking, personalization, journey mapping and more,
                 WBS is uniquely able to provide assistance at every step of the process,
                  from strategy and experience design, to execution and support.</p> 
            </div>
          </div>
        </div>
        </CompDiv>
      </CompLocalSection>

 </Aux>

);


export default ourServicesData;