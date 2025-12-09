import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resume from '../../assets/resume.pdf'


const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile} alt="" style={{ borderRadius:"50%" }}/>
        <h1> <span>I'm Israel Mutua,</span> <br/> Software Engineer,<br/> Based in Kenya.</h1>
        <p>I'm a fullstack software engineer from Kenya, passionate about building web applications that solve real problems. I work with Python, JavaScript, and modern frameworks to create elegant, scalable solutions that users love.</p>
        <div className='hero-action'>
            <div className='hero-connect'>
                <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
            </div>
            <div className='hero-resume'>
                <a href={resume} download="resume.pdf" style={{textDecoration:"none"}}>
                  My Resume
                </a>
            </div>
        </div>

    </div>
  )
}

export default Hero