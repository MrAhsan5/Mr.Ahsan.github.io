import React from 'react'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import Navbar from '../components/Navbar'
import PricingCard from '../components/PricingCard'
import Work from '../components/Work'


const Project = () => {
  return (
    <>
    <Navbar/>
    <Heroimg2 heading='PROJECTS.' text='Some of my most recent works.'/>
    <Work/>
    <PricingCard/>
    <Footer/>
    </>
  )
}

export default Project