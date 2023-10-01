import React from 'react';
import Navbar from './Navbar';
import '../../styles/_Header.scss';
function Header(props) {
    return (
        <header id='Header'>
            <Navbar></Navbar>
        </header>
    );
}

export default Header;