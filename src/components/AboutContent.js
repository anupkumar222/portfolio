import { Link } from "react-router-dom";
import "./AboutContentStyle.css";
import blogProject from "../assets/blogProject.png";
import shoppingCart from "../assets/ShoppingCart.png";

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I</h1>
            <p>Im a Mern Stack Developer. I create responsive secure website for my clients</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={blogProject} className="img" alt=""/>
                </div>
                <div className="img-stack bottom">
                    <img src={shoppingCart} className="img" alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent