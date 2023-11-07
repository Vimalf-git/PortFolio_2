import React from 'react'
import './Intro.css'
import hackerimg from '../../assets/hacker.jpeg'
import { Link } from 'react-scroll'
import resume from '../../assets/Resume/VIMALRAJ SELVAM.pdf'
import { Typewriter } from 'react-simple-typewriter'
function Intro() {
    const tech = ["Web Developer", "ReactJS Developer", "NodeJS Developer", "Java Developer"]
    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm  &#160;
                <span className="introName">Vimal</span><br/>
                    <Typewriter words={tech} loop={false}
                        cursor
                        cursorStyle='..'
                        typeSpeed={150}
                        deleteSpeed={50}
                        delaySpeed={1000} 
                        cursorBlinking={false}/>
                </span>
                <p className="introPara">I am a skilled web designer with experience in
                    creating<br /> visual appealing and user friendly websites.</p>
               <a href={resume} target='_blank' download="Resume"
                 className='hireBtn'>Hire-Me</a>
            </div>
            <img src={hackerimg} className='hackerBg' />
        </section>
    )
}

export default Intro