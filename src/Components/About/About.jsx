import React from 'react'
import './About.css'
import profile from '../../assets/profile.jpg'
import theme from '../../assets/theme_pattern.svg'

const About = () => {
  return (
    <div id='about' className='about' >
        <div className='about-title'>
            <h1>About Me</h1>
            <img src={theme} alt=''/>
        </div>
        <div className='about-section'>
            <div className='about-left'>
                <img src={profile} alt=''/>
            </div>
            <div className='about-right'>
                <div className='about-para'>
                    <p>I'm a fullstack software engineer with a strong foundation in both backend and frontend development. My expertise spans Python frameworks like Flask and Django, alongside modern JavaScript technologies including React and Node.js.</p>
                    <p>I'm passionate about writing clean, maintainable code and building applications that solve real-world problems. Whether it's architecting scalable backend systems or crafting intuitive user interfaces, I bring dedication and technical precision to every project.</p>
                </div>
                <div className='about-skills'>
                    <div className='about-skill'>
                        <p>Python & Flask/Django</p><hr style={{ width:"85%" }}/>
                    </div>
                    <div className='about-skill'>
                        <p>JavaScript & React</p><hr style={{ width:"80%" }}/>
                    </div>
                    <div className='about-skill'>
                        <p>Node.js & Express</p><hr style={{ width:"75%" }}/>
                    </div>
                    <div className='about-skill'>
                        <p>SQL & NoSQL Databases</p><hr style={{ width:"80%" }}/>
                    </div>
                    <div className='about-skill'>
                        <p>HTML & CSS</p><hr style={{ width:"90%" }}/>
                    </div>
                    <div className='about-skill'>
                        <p>Git & Version Control</p><hr style={{ width:"85%" }}/>
                    </div>


                </div>
                <div className='about-achievements'>
                <div className='about-achievement'>
                    <h1>2+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />

                <div className='about-achievement'>
                    <h1>90+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div> 
                <hr/>
                <div className='about-achievement'>
                    <h1>15+</h1>
                    <p>HAPPY CLIENTS</p>
                </div> 
                  
            </div>
            </div>
            
        </div>


    </div>
  )
}

export default About
