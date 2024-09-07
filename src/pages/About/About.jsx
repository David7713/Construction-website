import React, { useEffect } from 'react';
import './About.css';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import member1 from '../../assets/member1.jpg'
import member2 from '../../assets/member2.jpg'
import member3 from '../../assets/member3.jpg'
import member4 from '../../assets/member4.jpg'
import member5 from '../../assets/member5.jpg'
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
import { Link } from 'react-router-dom';






const About = () => {
  useEffect(() => {
    const counters = document.querySelectorAll('.number');

    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 500; // Adjust for speed

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 1); // Adjust speed if needed
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });

    // Optional cleanup function if necessary
    return () => {
      // Cleanup logic here, if needed
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div>
      <NavigationBar />

      <div className='about-hero-section'>
        <h1 className='about-hero-section-header'>ABOUT</h1>
        <span className='about-hero-section-text'>
          DURING ALL THIS TIME WE STAYED TRUE TO ONE AND THE SAME PRINCIPLES OF<br />
          BUSINESS OPERATIONS.
        </span>
      </div>

      <div className='about-values-container'>
        <div className='about-value-part'>
          <div className='about-value-icon-part'>
            Icon
          </div>
          <div className='about-value-text-part'>
            <span>CORE VALUES</span>
            <p>Construction’s core values have been shaped over more than 10 years of delivering the finest construction services to our clients. They stood to the test of time and these principles remain our bedrock lynchpins. We never tried to cut on either quality, the pace of work or any other construction aspect. We stay true to our full promise of efficiency!</p>
          </div>
        </div>

        <div className='about-value-part'>
          <div className='about-value-icon-part'>
            Icon
          </div>
          <div className='about-value-text-part'>
            <span>PACE</span>
            <p>Our love for detailed, bullet-point preparations, as well as to open and clear project management and communication is what makes us faster than the competition. Recently we compared a technically similar 10-stories building that we built, and the other built by our main competitor. Their price and pace was 2 times lower than hours!</p>
          </div>
        </div>

        <div className='about-value-part'>
          <div className='about-value-icon-part'>
            Icon
          </div>
          <div className='about-value-text-part'>
            <span>QUALITY</span>
            <p>Quality is focal in every little aspect of the construction. The mindset of both our senior employees and all the way to our on-site contractors and construction workers centers on attention. It’s our attention to details that allows us to work on a multitude of projects simultaneously, while staying on schedule!</p>
          </div>
        </div>

        <div className='about-value-part'>
          <div className='about-value-icon-part'>
            Icon
          </div>
          <div className='about-value-text-part'>
            <span>ENVIRONMENT FRIENDLINESS</span>
            <p>Besides valuing your time, your money and your vision for the project, we also value the Mother Nature as well…It cannot be denied anymore, that even the small construction implements the nature in a bad way… That’s why we’re leading the effort to use only eco-friendly materials and comply with keeping the environment unpolluted by the work we do!</p>
          </div>
        </div>
      </div>

      <div className='background-container'>
        <div className='stats-container'>
          <div className='stat'>
            <div className='number' data-target='250'>0</div>
            <div className='label'>ENVIRONMENT FRIENDL</div>
          </div>
          <div className='stat'>
            <div className='number' data-target='302'>0</div>
            <div className='label'>STAFF MEMBERS</div>
          </div>
          <div className='stat'>
            <div className='number' data-target='15'>0</div>
            <div className='label'>MILLION MAN-HOURS</div>
          </div>
          <div className='stat'>
            <div className='number' data-target='99'>0</div>
            <div className='label'>AWARDS WON</div>
          </div>
        </div>
      </div>






        






   <div className='members-part'>
    <h2>EXECUTIVE MANAGERS</h2>

    <div className='members-container'>
        <div className='member-element'>
            <img src={member1}></img>
            <span>CALVIN FITZGERALD</span>
            <p>Calvin Fitzgerald is an established and well-respected expert in the construction industry. With more than 35 years of practical experience in the business, Calvin has built his career on bringing the most outlandish conceptual visions from blueprints to a street next to yours... His leadership skills cemented Construction's dominating positions</p>

        </div>


        <div className='member-element'>
            <img src={member2}></img>
            <span>TAYLOR WILSON</span>
            <p>Taylor's been involved in the construction business since the 1970's... His profound experience in building miscellaneous types of projects and his innovative mindset makes him the leading force in our company. The BIM and Db methods that he implemented are now the lynchpins of our business operations with all of</p>

        </div>


        <div className='member-element'>
            <img src={member3}></img>
            <span>JOSH WAGNE </span>
            <p>Josh leads our creative team of designers and engineers...His proven ability to manage the most complex projects and bring the craziest concepts to life is what makes him as efficient as he is. Together, this creative team can be the launchpad of any project, giving it a head start at</p>

        </div>

        <div className='member-element'>
            <img src={member2}></img>
            <span>TAYLOR WILSON</span>
            <p>Taylor's been involved in the construction business since the 1970's... His profound experience in building miscellaneous types of projects and his innovative mindset makes him the leading force in our company. The BIM and Db methods that he implemented are now the lynchpins of our business operations with all of</p>

        </div>
        <div className='member-element'>
            <img src={member1}></img>
            <span>CALVIN FITZGERALD</span>
            <p>Calvin Fitzgerald is an established and well-respected expert in the construction industry. With more than 35 years of practical experience in the business, Calvin has built his career on bringing the most outlandish conceptual visions from blueprints to a street next to yours... His leadership skills cemented Construction's dominating positions</p>

        </div>
        
        <div className='member-element'>
            <img src={member3}></img>
            <span>JOSH WAGNE </span>
            <p>Josh leads our creative team of designers and engineers...His proven ability to manage the most complex projects and bring the craziest concepts to life is what makes him as efficient as he is. Together, this creative team can be the launchpad of any project, giving it a head start at</p>

        </div>
    </div>
    
   </div>


   <div className='about-images'>
   <img src={image1}></img>
    <img src={image2}></img>
    <img src={image3}></img>
    <img src={image4}></img>
    <img src={image10}></img>
    <img src={image6}></img>
    <img src={image9}></img>
    <img src={image10}></img>
  
  
    </div>


    <div className='about-review-container'>
     
    <div className='about-review-part'>
            <p>As an official fro North Dakota’s state government, I want to thank Our construction company. On behalf of the citizens of the state, we’re so grateful for this new, innovative building! This allows North Dakota to hold its legislative operations in a contemporary, progressive architectural environment!</p>

            <div className='about-review-user-part'>
                <img src={member4}></img>
                <span>Deborah Quagmire</span>
            </div>
        </div>




        <div className='about-review-part'>
            <p>This bridge project was funded by small and medium business of Rhode Island, as well as by its private citizens. After the hurricane hit our shores recently, we all were concerned for the Okaloppo river not having a proper landline connection. But now, after Construction company finished the project, the county can enjoy its new, beautiful infrastructure!</p>

            <div>
                <img src={member5}></img>
                <span>Benedict Arnold</span>
            </div>
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
  );
};

export default About;
