import React from 'react'
import AboutComponent from '../components/AboutComponent';
import Footer from '../components/Footer';
import Heroimg2 from '../components/Heroimg2';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <>
  <Navbar/>
  <Heroimg2 heading='About.' text='Im a friendly Front-End Developer.'/>
  <AboutComponent/>
  <Footer/>
  </>
  )
}

export default About