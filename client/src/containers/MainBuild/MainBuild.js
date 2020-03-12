import React , {Component} from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import AboutUs from '../../components/AboutUs/AboutUs';
//import OurServices from '../../components/OurServices/OurServices';
//import PricePlans from '../../components/PricePlans/PricePlans';
//import OurTeam from '../../components/OurTeam/OurTeam';
import Carousel from '../../components/Carousel/Carousel';


class MainBuild extends Component {

    render() {
        return(
            <Aux>
                <Carousel />
                <AboutUs />
            
            </Aux>
        );
    }
}

export default MainBuild;