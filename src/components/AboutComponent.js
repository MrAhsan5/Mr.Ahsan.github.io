import './AboutComponentStyle.css';
import React from 'react'
import { Link } from 'react-router-dom';
import about1 from '../assests/about1.jpg';
import about2 from '../assests/about2.webp';

const AboutComponent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who Am I?</h1>
            <p>Im a react Front-End Developer. I create responsive secure websites for my clients.</p>
            <Link to='/contact'><button className='btn'>Contact</button></Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={about1} className='img' />
                </div>
                <div className='img-stack bottom'>
                    <img src={about2} className='img' />
                </div>

            </div>
        </div>
    </div>
  )
}

export default AboutComponent