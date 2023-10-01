import React from 'react';
import HeaderSmall from '../../layout/header/HeaderSmall';
import ApplyLoanQualify from './ApplyLoanQualify';
function Apply(props) {
    return (
        <React.Fragment>
            <div className="container_wrapper container_padding">
                <HeaderSmall></HeaderSmall>
                <ApplyLoanQualify></ApplyLoanQualify>
            </div>
        </React.Fragment>
    );
}

export default Apply;