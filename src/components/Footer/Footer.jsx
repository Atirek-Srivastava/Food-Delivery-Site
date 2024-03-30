import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
    <div className="footer-content">
        <div className="footer-content-left">
            <img className='atirek' src={assets.logo} alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure hic, aspernatur, aliquam illo cum eos, quas ut delectus corporis obcaecati eveniet libero ducimus aperiam magni praesentium accusamus omnis eaque placeat.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-right">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
    
    <div className="footer-content-center">
        <h2>Get In Touch</h2>
        <ul>
            <li>+91-9315164281</li>
            <li>contact@atirek9315@gmail.com</li>
        </ul>
    </div>
    </div>
    <hr />
    <p className='footer-copyright'>
      Copyright 2024 © BiteFleet All rights reserved
    </p>
    </div>
  )
}

export default Footer