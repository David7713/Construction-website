import React from 'react'
import './NavigationBar.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg'
const NavigationBar = () => {
    return (
        <div className='navbar-container'>


            <div className='logo-part'>
                <Link to="/">   <Link to="/">     <img className='logo-img' src={logo}></img></Link> </Link>

            </div>

            <div>
                <ul className='routes-part'>
                    <Link to="/">HOME</Link>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/contacts">CONTACTS</Link>
                </ul>
            </div>


        </div>
    )
}

export default NavigationBar