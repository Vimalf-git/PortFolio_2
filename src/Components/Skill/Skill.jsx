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
        }, {
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
            name: 'GitHub',
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
        <section className='skillCom'>
            <h4 style={{ fontSize: '2rem' }}>Skills</h4>
            <div className='techSec'>
                {skillsTech.map((e, i) => {
                    return <div className='teckStack'>
                        <h3 style={{ color: 'rgb(50, 50, 50)' }}>{e.name}</h3>
                        <img className='teckImg' src={e.logo} />
                    </div>
                })}
            </div>
        </section>
    )
}

export default Skill