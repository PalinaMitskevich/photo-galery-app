import React from 'react';
import { IoLogoInstagram, IoLogoPinterest, IoLogoFacebook } from "react-icons/io";
import { Link } from "react-router-dom";
import { routes } from "../../constants";
import './index.css'

type SocialLink = {
    href: string
    component: React.ReactNode
}

const socilLinks: Array<SocialLink> = [
    {
        href: 'https://www.instagram.com/',
        component: <IoLogoInstagram className='icon'/>
    },
    {
        href: 'https://www.pinterest.com/',
        component: <IoLogoPinterest className='icon'/>
    },
    {
        href: 'https://www.facebook.com/',
        component: <IoLogoFacebook className='icon'/>
    },
]

const Header: React.FC = () => {

    return (
        <div className='header'>
            <div>
                <Link to={routes.home} className='logo'>PhotoGallery</Link>
            </div>
            <div className='icon-container'>
                {socilLinks.map(({ href, component }, index) => (
                    <a href={href} key={index}>{component}</a>
                ))}
            </div>
        </div>
    );
};

export default Header;