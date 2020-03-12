import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Carousel from 'react-bootstrap/Carousel';
import ItCompany from '../../assets/images/itcompany10.jpg';
import AmbientPhoto from '../../assets/images/itcompany9.jpg';
import Back from '../../assets/images/itcompany8.jpg';
import classes from './Carousel.module.css';

const carousel = (props) => {

    return(
     <Aux>
<Carousel>
  <Carousel.Item>
    <div className={classes.Slider}>
    <img
      className="d-block w-100"
      src={ItCompany}
      alt="First slide"
    />
     
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
    </div>
  </Carousel.Item>
  <Carousel.Item>
  <div className={classes.Slider}>
    <img
      className="d-block w-100"
      src={AmbientPhoto}
      alt="Third slide"
    />
    
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
    </div>
  </Carousel.Item>
  <Carousel.Item>
  <div className={classes.Slider}>
    <img
      className="d-block w-100"
      src={Back}
      alt="Third slide"
    />
     
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </div>
  </Carousel.Item>
</Carousel>
     </Aux>

    );
}


export default carousel;