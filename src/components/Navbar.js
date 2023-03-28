import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';
import Dropdown from './Dropdown';
import { BsFillPeopleFill } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';
import { MdRestaurantMenu } from 'react-icons/md';
import { MdPhoneInTalk } from 'react-icons/md';

function Navbar() {

    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [colorChange, setColorchange] = useState(false);

    const changeNavbarColor = () =>{
        if(window.scrollY >= 80) {
        setColorchange(true);
        }
        else{
        setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    }

    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(false)
        }
    }

    return (
        <>
            <nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
                <Link to='/' className='navbar-logo'>
                    <div className='logo'></div>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            <FaHome />
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                            <BsFillPeopleFill />
                            About Us
                        </Link>
                    </li>
                    <li className='nav-item' 
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link to='/menu' className='nav-links' onClick={closeMobileMenu}>
                            <i className='fas fa-caret-down' /> 
                            <MdRestaurantMenu />
                            Menu
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className='nav-item'>
                        <Link to='/contactus' className='nav-links' onClick={closeMobileMenu}>
                            <MdPhoneInTalk />
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar

