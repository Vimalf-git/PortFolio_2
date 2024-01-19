import React from 'react'
import './Work.css'
import Food from '../../assets/Food.jpg'
import Dice from '../../assets/Dice.jpg'
import API from '../../assets/API.png'
import DashBoardReact from '../../assets/ReusableReact.png'
import travel from '../../assets/travel.avif'
import inventory from '../../assets/projectimg/inventory.png'
import { Language } from '@mui/icons-material'
function Work() {
    const ProjectData = [
        {
            projectTittle: 'Inventory-app',
            img: inventory,
            desc: 'This application maintain store data and sale list .User can read and update their data',
            domain: "https://eco-inventoryapp.netlify.app/",
            action: 'Vist'
        }, {
            projectTittle: 'TravelBooking-UI',
            img: travel,
            desc: 'user can able to book their travel place Using Html&CSS',
            domain: "https://travelbookingapp.netlify.app/",
            action: 'Vist'
        }, {
            projectTittle: 'FoodOrder-UI',
            img: Food,
            desc: 'User able order fodd through On-line Using Html&CSS',
            domain: "https://restaurantfood-order.netlify.app/",
            action: 'Vist'
        }, {
            projectTittle: 'DiceGame',
            img: Dice,
            desc: 'On-line Dice game Using DOM manupulation',
            domain: "https://onlinedicegame.netlify.app/",
            action: 'Vist'
        }, {
            projectTittle: 'Fetch-API',
            img: API,
            desc: 'Data fetch from Api Using Async & Await',
            domain: "https://fetchdatausingasync-await.netlify.app/",
            action: 'Vist'
        }, {
            projectTittle: 'DashBoardDesign',
            img: DashBoardReact,
            desc: 'Using Reacts and Reuseable component',
            domain: "https://dashboardcomponent.netlify.app/",
            action: 'Vist'
        },
    ]
    return (
        <section id='works'>
            <h2 className='workTittle'>My Project</h2>
            <span className='workDesc'>Below attached my projects for your reference and please visit once...</span>
            <div className='worksImgs'>
                {ProjectData.map((e, i) => {
                    return <>
                        <div className='projectBox' key={i}>
                            <>
                                <img className='imgBox' src={e.img} />
                                <div className='styleCross'></div>
                            </>

                            <div className='conBox'>
                                <h3 className='projectTittle'>{e.projectTittle}</h3>
                                <p className='projectDesc'>{e.desc}</p>
                                <div className='cardBtn'>
                                    <a target='_blank' className='visitCom' style={{ textDecoration: 'none', color: 'black', fontSize: '1.5rem' }} href={e.domain}><Language /> VISIT</a>
                                </div>
                            </div>
                        </div>
                    </>
                })}
            </div>
        </section>
    )
}

export default Work