import React from 'react';
import CompSection from '../../CompSection/CompSection';
import CompDiv from '../../CompSection/CompDiv/CompDiv';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import { Link} from 'react-router-dom';



 const ContactMsg = () => {
    return (
        <Aux>
            <CompSection>
                <CompDiv>
                    <p>
                        Your Request has been sent succesfully!!!
                    </p>
                    <Link to='/contact' color='white'>Go Back</Link>
                </CompDiv>
            </CompSection>
            
        </Aux>
    )
}
export default ContactMsg;
