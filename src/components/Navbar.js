import React, {useState} from 'react'
import './Navbar.css'
import {Link, useHistory} from 'react-router-dom'
import { Button } from './Button'
import Dropdown from './Dropdown';

const Navbar = ({setTest}) => {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const handleClick = ()=>{
        setClick(!click);
    }    
    const closeMobileMenu = ()=>{        
        setClick(false)
    }
    const onMouseEnter = (e)=>{
        if(window.innerWidth < 760){
            setDropdown(false)
        }else{            
            setDropdown(true)
        }
    }
    const onMouseLeave = ()=>{        
        if(window.innerWidth < 760){
            setDropdown(false)
        }else{
            setDropdown(false)
        }
    }
    return (
        <>
          <nav className='navbar'>
            <Link to='/' className='navbar-logo'>
                EPIC
                <i className='fab fa-firstdraft'/>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times': 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active': 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <Link to='/services' className={dropdown ? 'nav-links showChild' : 'nav-links'} onClick={closeMobileMenu}>
                        Services   
                        <i className="fas fa-caret-down"></i>
                    </Link>
                    {dropdown && <Dropdown />}
                </li>
                <li className='nav-item'>
                    <Link to='/contactus' className='nav-links' onClick={closeMobileMenu}>
                        Contact Us
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/signup' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign Up
                    </Link>
                </li>
            </ul>
            <Button/>
          </nav>  
        </>
    )
};

export default Navbar
