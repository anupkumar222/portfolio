import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { HeroImage2 } from '../components/HeroImage2'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <>
    <Navbar />
    <HeroImage2 heading='About' text="I am Mern Stack Developer. Passionate about 
implementing and launching new projects. Ability
to translate business requirements into technical
solutions." /> 
    <AboutContent />
    <Footer />
    </>
  )
}

export default About
