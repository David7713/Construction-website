import React from 'react'
import './Home.css'
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import img3 from '../../assets/img3.jpeg'
import img4 from '../../assets/img4.jpeg'
import img1 from '../../assets/img1.jpeg'
import img2 from '../../assets/img2.jpeg'
import img5 from '../../assets/img5.jpeg'
import img6 from '../../assets/img6.jpeg'
import img7 from '../../assets/img7.jpeg'
import img8 from '../../assets/img8.jpeg'
import img9 from '../../assets/img9.jpeg'
import { Link } from 'react-router-dom';

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
            Icon
          </div>
          <div className='services-text-part'>
          <span>BUILDING INFORMATION <br></br>MODELING</span>
          <p>Oftentimes physical and functional<br></br> essence of any <br></br>construction <br></br>project needs to be <br></br>represented digitally,<br></br> in a 3D model format. In...</p>
          </div>
         </div>


         
        <div className='services-part'>
          <div className='services-icon-part'>
            Icon
          </div>
          <div className='services-text-part'>
          <span>CONSTRUCTION SERVICES</span>
          <p>Our customers love the<br></br> pace/quality tempo that we <br></br>construction <br></br>show during each of the <br></br>principal construction<br></br> processes! We're comfortable with any...</p>
          </div>
         </div>




         
        <div className='services-part'>
          <div className='services-icon-part'>
            Icon
          </div>
          <div className='services-text-part'>
          <span>PRE-CONSTRUCTION<br></br>SERVICES</span>
          <p>We take our time on initial<br></br> planning before any <br></br>construction begins, to<br></br>balance all the financial and<br></br>efficiency issues<br></br>beforehand.This..</p>
          </div>
         </div>







         
        <div className='services-part'>
          <div className='services-icon-part'>
            Icon
          </div>
          <div className='services-text-part'>
          <span>BUILDING INFORMATION <br></br>MODELING</span>
          <p>Oftentimes physical and functional<br></br> essence of any <br></br>construction <br></br>project needs to be <br></br>represented digitally,<br></br> in a 3D model format. In...</p>
          </div>
         </div>






         
        <div className='services-part'>
          <div className='services-icon-part'>
            Icon
          </div>
          <div className='services-text-part'>
          <span>BUILDING INFORMATION <br></br>MODELING</span>
          <p>Oftentimes physical and functional<br></br> essence of any <br></br>construction <br></br>project needs to be <br></br>represented digitally,<br></br> in a 3D model format. In...</p>
          </div>
         </div>






         
        <div className='services-part'>
          <div className='services-icon-part'>
            Icon
          </div>
          <div className='services-text-part'>
          <span>BUILDING INFORMATION <br></br>MODELING</span>
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


    <img src={img4}></img>

      </div>



    <div className='home-images'>
    <img src={img1}></img>
    <img src={img2}></img>
    <img src={img3}></img>
    <img src={img4}></img>
    <img src={img5}></img>
    <img src={img1}></img>
    <img src={img7}></img>
    <img src={img8}></img>
  
  
    </div>











    <h2 className='services-header'>OUR SERVICES </h2>
    <div className='services-section'>


    <div className='services-element'>
      <img src={img3}></img>
      <span>FUTURE PROOFING HOSPITALS</span>
      <p>By improving the physical layout of hospitals and medical facilities, we can enhance and increase safety mechanisms, improve care, and…</p>
    </div>


    <div className='services-element'>
      <img src={img4}></img>
      <span>FUTURE PROOFING HOSPITALS</span>
      <p>By improving the physical layout of hospitals and medical facilities, we can enhance and increase safety mechanisms, improve care, and…</p>
    </div>


    <div className='services-element'>
      <img src={img5}></img>
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
      <p>© 2019 year. Constractorlite | Multipurpose Theme design by TemplateMonster</p>
    </div>
    
    </div>
  )
}

export default Home