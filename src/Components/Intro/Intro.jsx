import React from 'react'
import './Intro.css'
import hackerimg from '../../assets/profilImg/vimalImg2.jpeg'
import resume from '../../assets/Resume/VimalRaj.pdf'
import { Typewriter } from 'react-simple-typewriter'
import { DownloadForOffline } from '@mui/icons-material'
function Intro() {
    const tech = ["FullStack Dev", "Web Dev", "ReactJS Dev", "NodeJS Dev", "Java Dev"]
    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm  &#160;
                    <span className="introName">Vimal</span><br />
                </span>
                <span>
                <Typewriter words={tech} loop={false}
                        cursor
                        cursorStyle='..'
                        typeSpeed={150}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        cursorBlinking={false} />
                </span>
                <p className="introPara">I am a skilled web designer with experience in
                    creating<br /> visual appealing and user friendly websites.</p>
                <a href={resume} target='_blank' download="Resume"
                    className='hireBtn'><DownloadForOffline className='dwnofLine'/>Resume</a>
                {/* <div className='uimg'>
                    <img src={hackerimg} className='hackerBg' />
                </div> */}
            </div>

        </section>
    )
}

export default Intro