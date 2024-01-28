import React from 'react'
import './Work.css'
import Food from '../../assets/projectimg/Food.jpg'
import Dice from '../../assets/projectimg/Dice.jpg'
import API from '../../assets/projectimg/API.png'
import DashBoardReact from '../../assets/projectimg/ReusableReact.png'
import travel from '../../assets/projectimg/travel.avif'
import inventory from '../../assets/projectimg/inventory.png'
import ScribleHere from '../../assets/projectimg/ScribleApp.png'
import Blog from '../../assets/projectimg/Blog.png'
import { GitHub, Language } from '@mui/icons-material'
function Work() {
    const ProjectData = [
        {
            projectTittle: 'Inventory-app',
            img: inventory,
            desc: 'This application maintain store data and sale list .User can read and update their data',
            domain: "https://eco-inventoryapp.netlify.app/",
            action: 'Vist',
            gitUrl:'https://github.com/Vimalf-git/inventoryApp_FE'
        },
        {
            projectTittle: 'Blog-app',
            img: Blog,
            desc: ' Blog is an important social networking tool included in a web application, to facilitate interaction and collaboration with the users',
            domain: 'https://logarram.netlify.app/login',
            action: 'Vist',
            gitUrl:'https://github.com/Vimalf-git/BlogAppFE'

        },
        {
            projectTittle: 'Scribe-Here',
            img: ScribleHere,
            desc: 'Scribble your thoughts here',
            domain: 'https://scribblehere.netlify.app/',
            action: 'Vist',
            gitUrl:'https://github.com/Vimalf-git/scribbleApp'

        },
        {
            projectTittle: 'TravelBooking-UI',
            img: travel,
            desc: 'user can able to book their travel place Using Html&CSS',
            domain: "https://travelbookingapp.netlify.app/",
            action: 'Vist',
            gitUrl:'https://github.com/Vimalf-git/TravelLanding'

        }, {
            projectTittle: 'FoodOrder-UI',
            img: Food,
            desc: 'User able order fodd through On-line Using Html&CSS',
            domain: "https://restaurantfood-order.netlify.app/",
            action: 'Vist',
            gitUrl:'https://github.com/Vimalf-git/Restaurant-landing'

        }, {
            projectTittle: 'DiceGame',
            img: Dice,
            desc: 'On-line Dice game Using DOM manupulation',
            domain: "https://onlinedicegame.netlify.app/",
            action: 'Vist',
            gitUrl:'https://github.com/Vimalf-git/DiceGame'

        }, {
            projectTittle: 'Fetch-API',
            img: API,
            desc: 'Data fetch from Api Using Async & Await',
            domain: "https://fetchdatausingasync-await.netlify.app/",
            action: 'Vist',
            gitUrl:'https://github.com/Vimalf-git/ApiFetch'

        }, {
            projectTittle: 'DashBoardDesign',
            img: DashBoardReact,
            desc: 'Using Reacts and Reuseable component',
            domain: "https://dashboardcomponent.netlify.app/",
            action: 'Vist',
            gitUrl:'https://github.com/Vimalf-git/DashBoard'

        },
    ]
    return (
        <section id='works'>
            <h2 className='workTittle'>My Project</h2>
            <span className='workDesc'>Below attached my projects for your reference and please visit once...</span>
            <div className='cardParent'>
                {ProjectData.map((e, i) => {
                    return <>
                        {/* <div className='projectBox' key={i}>
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
                        </div> */}
                        <div className='postCard' key={i} >
                            <div className='postImgCon' >
                                <img className='postImg' src={e.img} />
                            </div>
                            <div className='postTittle'>
                                <h4>{e.projectTittle}</h4>
                            </div>
                            <div className='postDes'>
                                <p>{e.desc}</p>
                            </div>
                            <div className='cardFooter'>
                            <a target='_blank' className='visitCom' style={{ textDecoration: 'none', color: 'black', fontSize: '1.5rem' }} href={e.domain}><Language /> Visit</a>
                            <a target='_blank' className='visitCom' style={{ textDecoration: 'none', color: 'black', fontSize: '1.5rem' }} href={e.gitUrl}><GitHub /> Source</a>

                                {/* <div className='footerProfile'>
                                    <div className='Feedscardpic'>
                                    </div>
                                    <div>
                                        <p className='postcreatedby'>{e.username}</p>
                                    </div>
                                </div> 

                                <div className='category'>
                                    <Link>{e.category ? e.category.length > 9 ? e.category.slice(0, 5) + '...' : e.category : ''}</Link>
                                </div> */}
                            </div>
                        </div>
                    </>})}
            </div>
        </section >
    )
}

export default Work