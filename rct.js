import React, { useEffect, useState } from 'react';
import DefaultLayout from '../../components/Layout/DefaultLayout';
import Hero from '../../components/Hero/Hero';
import AboutSec from '../../components/AboutSec/AboutSec';
import NicheSection from '../../components/NicheSection/NicheSection';
import ProcessSec from '../../components/ProcessSec/ProcessSec';
import FaqsSection from '../../components/FaqsSection/FaqsSection';
import ReachoutSec from '../../components/ReachoutSec/ReachoutSec';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './style.css';

const Home = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const box = document.querySelector('.gallery_box');

    // Function to check the position and update the active class
    const updateClass = () => {
      const computedStyle = window.getComputedStyle(box);
      setIsActive(computedStyle.position === 'fixed');
    };

    // Create the timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: box,
        start: "top center-=200px", // Trigger when top of .gallery_box is 200px above center
        end: "bottom+=3500px center-=200px", // Adjusted end trigger
        onUpdate: updateClass, // Call updateClass on scroll updates
        scrub: true,
        pin: true,
        // markers: true, // Uncomment for debugging
      }
    });

    // Set the animation properties
    tl.to('.gallery_box_outer', {
      duration: 5, // Duration for the animation in seconds
      rotateY: 360, // Rotate 360 degrees
      ease: "none", // Linear animation
    });

    // Initial check for position
    updateClass();

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Cleanup on component unmount
    };
  }, []);

  return (
    <DefaultLayout>
      <Hero />
      <AboutSec />
      <div className="sliderSection3D">
        <section className="work2">
          <div className={`gallery_box ${isActive ? 'active' : ''}`}>
            <div className="gallery_box_outer">

              <div className="gallery_box_in imageStyle">
                <img src="https://demo25.mystagingserver.site/stephanie/wp-content/uploads/2024/05/661567dd25f7bd4e0e62243d_image2-1024x677.jpeg" alt="Image 2" />
              </div>
              <div className="gallery_box_in imageStyle">
                <img src="https://demo25.mystagingserver.site/stephanie/wp-content/uploads/2024/05/grass-with-water.jpeg" alt="Grass with Water" />
              </div>
              <div className="gallery_box_in imageStyle">
                <img src="https://demo25.mystagingserver.site/stephanie/wp-content/uploads/2024/05/661567dd25f7bd4e0e62243d_image2-1024x677.jpeg" alt="Image 2" />
              </div>
              <div className="gallery_box_in imageStyle">
                <img src="https://demo25.mystagingserver.site/stephanie/wp-content/uploads/2024/05/661567dd25f7bd4e0e62243d_image2-1024x677.jpeg" alt="Image 2" />
              </div>
              <div className="gallery_box_in imageStyle">
                <img src="https://demo25.mystagingserver.site/stephanie/wp-content/uploads/2024/05/eroor-1024x677.jpeg" alt="Error" />
              </div>
              <div className="gallery_box_in imageStyle">
                <img src="https://demo25.mystagingserver.site/stephanie/wp-content/uploads/2024/05/Hand-1024x677.jpeg" alt="Hand" />
              </div>
              <div className="gallery_box_in imageStyle">
                <img src="https://demo25.mystagingserver.site/stephanie/wp-content/uploads/2024/05/grass-with-water-1024x677.jpeg" alt="Grass with Water" />
              </div>
            </div>
          </div>
        </section>
        <div className="headingSection">
          <div className="headBox">
            <h3>Explicabo</h3>
            <p><a href="#">View Case</a></p>
          </div>
          <div className="headBox">
            <h3>Neque Quasi Nulla Accusantium</h3>
            <p><a href="#">View Case</a></p>
          </div>
          <div className="headBox">
            <h3>Neque Quasi Nulla Accusantium</h3>
            <p><a href="#">View Case</a></p>
          </div>
          <div className="headBox">
            <h3>Explicabo</h3>
            <p><a href="#">View Case</a></p>
          </div>
          <div className="headBox">
            <h3>Error</h3>
            <p><a href="#">View Case</a></p>
          </div>
          <div className="headBox">
            <h3>Error</h3>
            <p><a href="#">View Case</a></p>
          </div>
          <div className="headBox">
            <h3>Molestiae Est</h3>
            <p><a href="#">View Case</a></p>
          </div>
        </div>
      </div>
      <NicheSection />
      <ProcessSec />
      <FaqsSection />
      <ReachoutSec />
    </DefaultLayout>
  );
};

export default Home;
