import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';


const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='navbar-container'>
            <div className='logo-part'>
                <Link to="/">
                    
                    <h2>CONSTRUCTION</h2>
                </Link>
            </div>

            <button className='menu-toggle' onClick={toggleMenu}>
                {isOpen ? 'X' : '☰'}
            </button>

            <div className={`routes-part ${isOpen ? 'show' : ''}`}>
                <ul>
                    <li><Link to="/" onClick={toggleMenu}>HOME</Link></li>
                    <li><Link to="/about" onClick={toggleMenu}>ABOUT</Link></li>
                    <li><Link to="/contacts" onClick={toggleMenu}>CONTACT</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default NavigationBar;
