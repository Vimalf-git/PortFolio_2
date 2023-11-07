import React from 'react'
import './Contact.css'
function Contact() {
    return (
        <section id='contactPage'>
                <h1 className="contactPageTittle">Contact Me</h1>
                <span className="contactDesc">For any quires contact me</span>
                <form className='contactForm'>
                    <input type="text" className="email" placeholder='your mail'/>
                    <input type="text" className="name" placeholder='your subject ' />
                    <textarea name="message" className='msg' style={{resize:'none'}} rows="5" placeholder='your message'></textarea>
                    <button type='submit' className='submitBtn'>Send</button>
                </form>
        </section>
    )
}

export default Contact