import React from 'react'
import './Home.css'
import NavigationBar from '../../components/NavigationBar/NavigationBar'

import { Link } from 'react-router-dom';


import image1 from '../../assets/images1.jpeg'
import image2 from '../../assets/images2.jpeg'
import image3 from '../../assets/images3.jpeg'
import image4 from '../../assets/images4.jpeg'
import image5 from '../../assets/images5.jpeg'
import image6 from '../../assets/images6.jpg'
import image7 from '../../assets/images7.jpg'
import image9 from '../../assets/images9.jpeg'
import image10 from '../../assets/image10.jpg'
import image11 from '../../assets/image11.jpg'






import { FaHome } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { FaCalculator } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";

const Home = () => {
  return (
    <div>


        <NavigationBar></NavigationBar>

        <div className='home-hero-section'>
          <h1 className='home-hero-section-header'>CONSTRUCTION</h1>
          <span className='home-hero-section-text'>See how a 10-stories tower’s being built, in a time-lapse!</span>
        <Link to="/about"><button className='home-hero-section-button'>See Our Recent Project</button> </Link>
        </div>


         <h2 className='services-header'>OUR SERVICES </h2>
        <div className='services'>

    
        <div className='services-part'>
          <div className='services-icon-part'>
          <FaHome></FaHome>
          </div>
          <div className='services-text-part'>
          <span>BUILDING INFORMATION <br></br>MODELING</span>
          <p>Oftentimes physical and functional<br></br> essence of any <br></br>construction <br></br>project needs to be <br></br>represented digitally,<br></br> in a 3D model format. In...</p>
          </div>
         </div>


         
        <div className='services-part'>
          <div className='services-icon-part'>
          <GrServices></GrServices>
          </div>
          <div className='services-text-part'>
          <span>CONSTRUCTION SERVICES</span>
          <p>Our customers love the<br></br> pace/quality tempo that we <br></br>construction <br></br>show during each of the <br></br>principal construction<br></br> processes! We're comfortable with any...</p>
          </div>
         </div>




         
        <div className='services-part'>
          <div className='services-icon-part'>
         <FaCalculator></FaCalculator>
          </div>
          <div className='services-text-part'>
          <span>PRE-CONSTRUCTION<br></br>SERVICES</span>
          <p>We take our time on initial<br></br> planning before any <br></br>construction begins, to<br></br>balance all the financial and<br></br>efficiency issues<br></br>beforehand.This..</p>
          </div>
         </div>







         
        <div className='services-part'>
          <div className='services-icon-part'>
         <FaPencil></FaPencil>
          </div>
          <div className='services-text-part'>
          <span>DESIGN-BUILD <br></br>MODELING</span>
          <p>Oftentimes physical and functional<br></br> essence of any <br></br>construction <br></br>project needs to be <br></br>represented digitally,<br></br> in a 3D model format. In...</p>
          </div>
         </div>






         
        <div className='services-part'>
          <div className='services-icon-part'>
        <FaBuilding></FaBuilding>
          </div>
          <div className='services-text-part'>
          <span>CONSTRUCTION MANAGEMENT </span>
          <p>Oftentimes physical and functional<br></br> essence of any <br></br>construction <br></br>project needs to be <br></br>represented digitally,<br></br> in a 3D model format. In...</p>
          </div>
         </div>






         
        <div className='services-part'>
          <div className='services-icon-part'>
         <MdPeopleAlt></MdPeopleAlt>
          </div>
          <div className='services-text-part'>
          <span>GENERAL CONTRACTING</span>
          <p>Oftentimes physical and functional<br></br> essence of any <br></br>construction <br></br>project needs to be <br></br>represented digitally,<br></br> in a 3D model format. In...</p>
          </div>
         </div>
        </div>

        <div className='our-services-container'>
    <div className='our-services-container-text-part'>
    <div></div>
      <h2>OUR SERVICES</h2>
      <span>Our construction company has been founded 10 years <br></br>
      ago, at the very peak of the building frenzy in the US…</span>


      <p>Since then we’ve built hundreds of commercial, government and private buildings and facilities. It may not sound like a lot, but if you estimate the manpower, working hours, <br></br>materials, planning and correlating that were all involved in completing each separate project, then our productivity is immense!</p>
     
      <Link to="/about"> <button>READ MORE</button> </Link>
    </div>


    <img src={image6}></img>

      </div>



    <div className='home-images'>
    <img src={image1}></img>
    <img src={image2}></img>
    <img src={image3}></img>
    <img src={image4}></img>
    <img src={image10}></img>
    <img src={image6}></img>
    <img src={image9}></img>
    <img src={image10}></img>

  
  
    </div>











    <h2 className='services-header'>OUR SERVICES </h2>
    <div className='services-section'>


    <div className='services-element'>
      <img src={image3}></img>
      <span>FUTURE PROOFING HOSPITALS</span>
      <p>By improving the physical layout of hospitals and medical facilities, we can enhance and increase safety mechanisms, improve care, and…</p>
    </div>


    <div className='services-element'>
      <img src={image4}></img>
      <span>FUTURE PROOFING HOSPITALS</span>
      <p>By improving the physical layout of hospitals and medical facilities, we can enhance and increase safety mechanisms, improve care, and…</p>
    </div>


    <div className='services-element'>
      <img src={image5}></img>
      <span>FUTURE PROOFING HOSPITALS</span>
      <p>By improving the physical layout of hospitals and medical facilities, we can enhance and increase safety mechanisms, improve care, and…</p>
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
      <p>© 2024 Davit. All rights reserved.</p>
    </div>
    
    </div>
  )
}

export default Home