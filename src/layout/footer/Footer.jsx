import React from 'react';
import FooterTop from './FooterTop';
import FooterActionList from './FooterActionList';
import FooterEnd from './FooterEnd';
function Footer(props) {
    return (
        <footer id='Footer'>
            <FooterTop></FooterTop>
            <FooterActionList></FooterActionList>
            <FooterEnd></FooterEnd>
        </footer>
    );
}

export default Footer;