import React from 'react';
import SignatureImage from '../../assets/images/signature.png';
// import Navbar from './navbar';

function Header() {

    return (
        <div className='header'>
            <img src={SignatureImage} alt='Logo' height='100px' style={{ "background-color": 'black' }} />
            <h1>Alexander Perry - My Portfolio</h1>
        </div>
    )

}

export default Header;