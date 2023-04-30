import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { HeroImage2 } from '../components/HeroImage2'
import Work from '../components/Work'


const Project = () => {
  return (
    <>
    <Navbar />
    <HeroImage2 heading= "MY PROJECTS" text='Some of my most recent works' />
    <Work />
    <Footer />
    </>
  )
}

export default Project