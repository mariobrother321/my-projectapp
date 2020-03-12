import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import classes from './OurServicesDatas.module.css';
import DesktopWindowsTwoToneIcon from '@material-ui/icons/DesktopWindowsTwoTone';
import TabletMacTwoToneIcon from '@material-ui/icons/TabletMacTwoTone';
import InsertChartTwoToneIcon from '@material-ui/icons/InsertChartTwoTone';
import BrushTwoToneIcon from '@material-ui/icons/BrushTwoTone';


const ourServicesData = (props) => (
 
 <Aux>
  <section id='services' className={classes.Services}>
        <div id="container-fluid" className={classes.ContainerServices}>
          <h1>Our Services</h1>
          <div className="row services">
            <div className="col-md-3 text-center">
              <div className={classes.Icon}>
              <DesktopWindowsTwoToneIcon style={{paddingBottom: '30px',paddingRight: '35px' ,fontSize: '70px' }} />
              </div>
              <h3>Web Development</h3>
              <p>jdgfhwegfu hewfhwebfhw dbfwggdghv vgvhevg 
                MKCKNDKSL KDFN DKNLMD DLKKK F ,VCNDIOFNFE,NN.</p>
            </div>
            <div className="col-md-3 text-center">
              <div className={classes.Icon}>
              <TabletMacTwoToneIcon style={{paddingBottom: '33px',paddingRight: '32px' ,fontSize: '70px' }}/>
              </div>
              <h3>App Development</h3>
              <p>jdgfhwegfuh ewfhwebfhw dbfwggdg hvvgvhevg
                mWNDJE EM,BF S,MVN MLNMS.,V LKKN;LMVF.</p>
            </div>
            <div className="col-md-3 text-center">
              <div className={classes.Icon}>
              <InsertChartTwoToneIcon style={{paddingBottom: '33px',paddingRight: '32px' ,fontSize: '70px' }}/>
              </div>
              <h3>Digital Marketing</h3>
              <p>jdgfhwegfu hewfhwebfhwd bfwggdghvv gvhevg
                nsdkljelkgj kwknlknr  lkegfnlkngnms,lk. </p>
            </div>
            <div className="col-md-3 text-center">
              <div className={classes.Icon}>
              <BrushTwoToneIcon style={{paddingBottom: '33px',paddingRight: '32px' ,fontSize: '70px' }}/>
              </div>
              <h3>Graphics Design</h3>
              <p>jdgfhwe gfuhewfhweb fhwdbfwggdg hvvgvhevg
                hdjhfhweh jwdhqwolh qwjkgdkjuhfdlili,</p> 
            </div>
          </div>
        </div>
      </section>

 </Aux>

);


export default ourServicesData;