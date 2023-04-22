import React from 'react';
import "./HeroImgStyle.css";
import IntroImg from "../assets/IntroImg.jpg";

function HeroImg() {
  return (
   <div className='hero'>
    <div className='mask'>
    <img className='intro-img' src={IntroImg} alt='IntroImg'/>
    </div>
   </div>
  )
}

export default HeroImg;