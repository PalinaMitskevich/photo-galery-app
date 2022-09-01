import React from 'react';
import { IoLogoInstagram, IoLogoPinterest, IoLogoFacebook } from "react-icons/io";
import './index.css'
import {Link} from "react-router-dom";

const Header = () => {

    return (
        <div className='header'>
            <div>
                <Link to='/' className='logo'>PhotoGallery</Link>
            </div>
            <div className='icon-container'>
                <a href='https://www.instagram.com/'>
                    <IoLogoInstagram className='icon'/>
                </a>
                <a href='https://www.pinterest.com/'>
                    <IoLogoPinterest className='icon'/>
                </a>
                <a href='https://www.facebook.com/'>
                    <IoLogoFacebook className='icon'/>
                </a>
            </div>
        </div>
    );
};

export default Header;