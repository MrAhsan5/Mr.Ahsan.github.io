import React from 'react'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Heroimg2 from '../components/Heroimg2'
import Navbar from '../components/Navbar'

const Contact = () => {
  return (
<>
<Navbar/>
<Heroimg2 heading='Contact Us.' text='Lets have a chats.'/>
<Form/>
<Footer/>
</>
    )
}

export default Contact