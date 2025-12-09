import React, { useState } from 'react'
import './Contact.css'
import theme from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "953e031a-9b59-4942-9c4b-54496fd1db74");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();
        setResult(data.success ? alert('Email Sent Successfully') : alert('Error sending email') );
    };
  return (
    <div id='contact' className='contact'>
        <div className='contact-title'>
            <h1>Get In Touch</h1>
            <img src={theme} alt=''/>
        </div>
        <div className='contact-section'>
            <div className='contact-left'>
                <h1>Lets Talk</h1>
                <p>I'm currently available for freelance projects and full-time opportunities. Let's connect to discuss how I can help bring your ideas to life.</p>
                <div className='contact-details'>
                    <div className='contact-detail'>
                        <img src={mail_icon} alt=''/> <p><a href='mailto:engineermutua1@gmail.com?subject=Project Inquiry&body=Hi Israel, I would like to discuss a project with you.' target='__blank'>engineermutua1@gmail.com</a></p>
                    </div>
                    <div className='contact-detail'>
                        <img src={call_icon} alt=''/> <p> <a href="https://wa.me/254705309453?text=Hi%20Israel,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you." target='__blank'>+254(742)169-773</a></p>
                    </div>
                    <div className='contact-detail'>
                        <img src={location_icon} alt=''/> <p>Nairobi,Kenya</p>
                    </div>
                </div>
            </div>
            <form className='contact-right' onSubmit={onSubmit}>
                <label htmlFor=''>Your Name</label>
                <input type='text' placeholder='Enter your name' name='name' id='name' required/>
                <label htmlFor=''>Your Email</label>
                <input type='email' placeholder='Enter your Email' name='email' id='email' required/>
                <label htmlFor=''>Write Your Message here</label>
                <textarea name='message' id='message' rows="8" placeholder='Enter your message'></textarea>
                <button type='submit' className='contact-submit'>Submit now</button>
                <p>{result}</p>
            </form>
        </div>
        
    </div>
  )
}

export default Contact