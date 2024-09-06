import React from 'react'
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import './Contacts.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Contacts = () => {
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission
        console.log('Form submitted!'); // Log message to the console
        // You can also capture form data here if needed
      };
  return (
    <div>

        <NavigationBar></NavigationBar>

        <div className='map'>
  <div className="mapouter">
    <div className="gmap_canvas">
      <iframe
        className="gmap_iframe"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://maps.google.com/maps?width=1600&amp;height=700&amp;hl=en&amp;q=republi%20square&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </div>
  </div>
</div>


<div className='contact-container'>

    <div className='contact-part'>
        <h2>CONTACTS</h2>
        <span>ADDRESS: <span id='address'>4578 Marmora Road, Glasgow, D04 89GR</span></span>
        <span id>Phone: <span id='phoneNumber'>(800) 123-0045; (800) 123-0046</span></span>
        <p>WE ARE OPEN:<span id='workingHours'> Mn-Fr: 10 am-8 pm</span>
        </p>

        <ul>
           <a href='#'> <li><FaFacebook className='icon'></FaFacebook></li></a>
           <a href='#'> <li><FaInstagramSquare  className='icon'></FaInstagramSquare></li></a>
           <a href='#'><li><FaLinkedin  className='icon'></FaLinkedin></li></a>
          
        </ul>
    </div>


    <div className='form-part'>

        <h2>LET’S GET IN TOUCH</h2>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='YOUR NAME'></input>
            <input type='email' placeholder='EMAIL ADDRESS'></input>
            <input  id='textarea' ></input>
            <button type='submit'>SEND</button>
        </form>
    </div>
</div>

<div className='home-footer'>
    <div>
    <h1>CONSTRUCTION</h1>
    <p>THIS YEAR WE TOOK MORE CONPLEX CONSTRUCTIONS THAN EVER BEFORE ...</p>
    <Link to="/about"> <button>VIEW NOW!</button> </Link>
    </div>
    </div>


    <div className='allRights-part'>
      <p>© 2019 year. Constractorlite | Multipurpose Theme design by TemplateMonster</p>
    </div>
    

    </div>
  )
}

export default Contacts