import './HeroimgStyle.css';
import React from 'react'
import heroimg from '../assests/heroimg.jpg';
import { Link } from 'react-router-dom';

const Heroimg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='into-img' src={heroimg}/>
        </div>
        <div className='content'>
            <p>HI, I,M A FREELANCER.</p>
            <h1>React Developor</h1>
             <div>
                <Link to='/project' className='btn'>PROJECTS</Link>
                <Link to='/contact' className='btn btn-light'>CONTACT</Link>
             </div>
        </div>
    </div>
  )
}

export default Heroimg