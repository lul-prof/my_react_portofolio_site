import React, { useState } from 'react'
import './Footer.css'
import theme from '../../assets/theme_pattern.svg'
import user_icon from '../../assets/user_icon.svg'
import logo from '../../assets/logo.png'


const Footer = () => {
    const handleSubscribe=()=>{
        email=document.getElementById('email').value;
        if (email===""){
            alert("Fill in the form first")
        }
        else{
            alert("You have subscribed successfully")
        }

    }

   
  return (
    <div className='footer'>
        <div className='footer-top'>
            <div className='footer-top-left'>
                {/* Add my Logo Later */}
                <img src={logo} alt='' style={{width:"200px"}}/>
                <p>Fullstack Software Engineer | Python • JavaScript • React | Building digital solutions in Nairobi, Kenya</p>
            </div>
            <div className='footer-top-right'>
                <div className='footer-email-input'>
                    <img src={user_icon} alt=''/>
                    <input type='email' id='email' placeholder='Enter your Email' name='subscribe'/>
                </div>
                <div type='button' className='footer-subscribe' onClick={handleSubscribe}>
                    Subscribe
                </div>
            </div> 
        </div>
        <hr/>
        <div className='footer-bottom'>
            <div className='footer-bottom-left'>
               <p> &copy; 2025 Israel Mutua. All rights reserved.</p>
            </div>
            <div className='footer-bottom-right'>
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
                <p>Connect With Me</p>
            </div>

        </div>

    </div>
  )
}

export default Footer