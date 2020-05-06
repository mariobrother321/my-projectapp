import React from 'react';
import CompSection from '../../CompSection/CompSection';
import CompDiv from '../../CompSection/CompDiv/CompDiv';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import { Link} from 'react-router-dom';

const ContactMsgError = () => {
    return (
        <Aux>
            <CompSection>
                <CompDiv>
                    <p>
                        Message not sent , please try again later!
                    </p>
                    <Link to='/contact'> Go Back</Link>
                </CompDiv>
            </CompSection>
            
        </Aux>
    )
}
 
export default ContactMsgError;