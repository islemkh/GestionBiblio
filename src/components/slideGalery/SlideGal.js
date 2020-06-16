import React from 'react';
import { Slide } from 'react-slideshow-image';
import './SlideGal.css'
import mag from '../../assets/i3.jpg'
import mag2 from '../../assets/mag2.jpg'
import mag3 from '../../assets/im.jpg'
const slideImages = [
  mag,
  mag2,
  mag3
];
 
const properties = {

  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
 

 export const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`,'backgroundSize':'1350px 400px' }}>
              <span id="span1">Join us and dive in the magic of  our library</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]}) `,'backgroundSize':'1350px 400px' }}>
              <span> Join us and dive in the magic of  our library</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`,'backgroundSize':'1350px 400px'}}>
              <span id="span2" >Join us and dive in the magic of  our library</span>
            </div>
          </div>
        </Slide>
      </div>
    )
}