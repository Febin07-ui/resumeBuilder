import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'

function Footer() {
  return (
    <div style={{height:'300px',backgroundColor:'purple',color:'white'}} className='d-flex justify-content-center align-items-center flex-column'>
        <h3>Contact Us</h3>
        <h5 className='fw-bolder'>resumebuilder@gmail.com</h5>
        <h5 className='fw-bloder'>9876479865</h5>
        <h4>Connect With Us</h4>
        <div className='d-flex justify-content-center fs-4 my-3'>
          <FaWhatsapp className='me-3'/>
          <FaInstagram className='me-3'/>
          <FaFacebookF/>
        </div>
        <p>Designed a abulid with using react</p>
    </div>
  )
}

export default Footer