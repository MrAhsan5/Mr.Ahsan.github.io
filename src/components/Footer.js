import './FooterStyle.css';
import React from 'react'
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:'#fff', marginRight:'2rem'}}/>
                    <div>
                        <p>Kaleem Shaheed Coloney no 2</p>
                        <p>Pakistan</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color:'#fff', marginRight:'2rem'}}/> 
                03011883221</h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color:'#fff', marginRight:'2rem'}}/> 
                AhsanIqbal@gmail.com</h4>
                </div>
            </div>
            <div className='right'>
                <h4>About the componey</h4>
                <p>This is me Fahimul kabir. CEO & Founder of Techzetc.
|                enjoy discussing new projects and design challange.
                 </p>
                 <div className='social'>
                 <FaFacebook size={30} style={{color:'#fff', marginRight:'1rem'}} className='footer-link'/>
                 <FaTwitter size={30} style={{color:'#fff', marginRight:'1rem'}} className='footer-link'/>
                 <FaLinkedin size={30} style={{color:'#fff', marginRight:'1rem'}} className='footer-link'/>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Footer