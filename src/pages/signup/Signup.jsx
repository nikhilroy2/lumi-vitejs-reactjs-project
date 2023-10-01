import React from 'react';
import HeaderSmall from '../../layout/header/HeaderSmall';
import SignupForm from './SignupForm';
function Signup(props) {
    return (
        <React.Fragment>
            <div className="container_wrapper container_padding">
                <HeaderSmall></HeaderSmall>
                <SignupForm></SignupForm>
            </div>
        </React.Fragment>
    );
}

export default Signup;