import React from 'react';
import "./HeroImgStyle.css";
import IntroImg from "../assets/IntroImg.jpg";
import { Link } from 'react-router-dom';

function HeroImg() {
  return (
   <div className='hero'>
    <div className='mask'>
    <img className='intro-img' src={IntroImg} alt='IntroImg'/>
    </div>
    <div className='content'>
        <p>
        Hello, My name is Anup Kumar
        </p>
        <h1>
            MERN Stack Developer
        </h1>
        <div>
            <Link to="/project"
            className='btn'
            >
            Projects
            </Link>
            <Link to="/Contact"
            className='btn btn-light'
            >
            Contact
            </Link>
        </div>
    </div>
   </div>
  )
}

export default HeroImg;