import React from 'react';
import OurServicesData from '../OurServices/OurServicesDatas/OurServicesDatas';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import {withRouter} from 'react-router-dom';

const ourServices = (props) => (

    <Aux>

        <OurServicesData />

    </Aux>
);


export default withRouter(ourServices);