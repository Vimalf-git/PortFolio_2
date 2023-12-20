import React from 'react'
import './Skill.css'
import html from '../../assets/skillIcons/html.png'
import css from '../../assets/skillIcons/css.png'
import JavaScript from '../../assets/skillIcons/JS.png'
import bootstrap from '../../assets/skillIcons/bootstrap.png'
import reactjs from '../../assets/skillIcons/react.png'
import redux from '../../assets/skillIcons/redux.png'
import nodejs from '../../assets/skillIcons/nodejs.png'
import express from '../../assets/skillIcons/Expressjs.png'
import springBoot from '../../assets/skillIcons/springboot.png'
import java from '../../assets/skillIcons/java.jpg'
import mui from '../../assets/skillIcons/MUI.png'
import git from '../../assets/skillIcons/git.png'
import postman from '../../assets/skillIcons/postman.png'
import sql from '../../assets/skillIcons/sql.png'
import mongodb from '../../assets/skillIcons/mongodb.png'
function Skill() {
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
    const skillsTech = [
        {
            name: 'HTML',
            logo: html
        }, {
            name: 'CSS',
            logo: css
        },
        {
            name: 'JavaScript',
            logo: JavaScript
        }, {
            name: 'BootStrap',
            logo: bootstrap
        }, {
            name: 'React JS',
            logo: reactjs
        },{
            name: 'Redux',
            logo: redux
        }, {
            name: 'Node JS',
            logo: nodejs
        }, {
            name: 'Express JS',
            logo: express
        },
        {
            name: 'Java',
            logo: java
        }, {
            name: 'SpringBoot',
            logo: springBoot
        }, {
            name: 'Material-UI',
            logo: mui
        }, {
            name: 'GIT',
            logo: git
        }, {
            name: 'Postman',
            logo: postman
        }, {
            name: 'MySQL',
            logo: sql
        }, {
            name: 'MongoDB',
            logo: mongodb
        },
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
            <section id='skill'>
            <h4 style={{ fontSize: '3rem' }}>Skills</h4>
            <div className='techSec'>
                {skillsTech.map((e, i) => {
                    return <div className='teckStack'>
                        <h3 style={{ color: 'rgb(50, 50, 50)' }}>{e.name}</h3>
                        <img className='teckImg' src={e.logo} />
                    </div>
                })}
            </div>
        </section>
        </>
    )
}

export default Skill