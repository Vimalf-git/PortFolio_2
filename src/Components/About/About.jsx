import React from 'react'
import './About.css'
function About() {
    const skillContent = [
        {
            tittle: 'Web Developer',
            content: `I'm responsible to develop more responsive design with re-usable component
            and maintain the state without re-render `
        }, {
            tittle: 'Backend Developer',
            content: `Application able to develope for any CURD operation with asynchronous 
            non-blocking end points with authentication using JWT`
        }
    ]
 
    return (
        <>
        <section id='about'>
            <span className='skillTittle'>What I do</span>
            <p className='skillDesc'>A passionate software developer To Design and Develop innovative solutions using the latest technologies
                that solve real life challenges and problems  </p>
            <div className='skillBars'>
                {skillContent.map((e, i) => {
                    return <div className="skillBar" key={i}>
                        <div className="skillBarText">
                            <h1>{e.tittle}</h1>
                            <p>{e.content}</p>
                        </div>
                    </div>
                })}
            </div>
            </section>
        </>
    )
}

export default About