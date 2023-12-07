import React, { useState } from 'react'
import './Contact.css'
import axios from 'axios'
import { toast } from 'react-toastify';
function Contact() {
    const [emailId, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [content, setcontent] = useState("");
    const emailSend = async () => {
        if (emailId !== '' && subject !== '' & content !== '') {
            try {
                const res = await axios.post('http://localhost:8000/mailsend',
                    {
                        emailId,
                        subject,
                        content
                    }
                )
                if (res.status == 200) {
                    toast.success('success')
                }
            } catch (error) {
                toast.error(error.response.data.message)
            }

        } else {
            toast.error('please fill the feild')
        }

    }
    return (
        <section id='contactPage'>
            <h1 className="contactPageTittle">Contact Me</h1>
            <span className="contactDesc">For any quires contact me</span>
            <div className='contactForm'>
                <input type="text" className="email" placeholder='your mail'
                    style={{ color: 'white' }}
                    onChange={(e) => setEmail(e.target.value)} />
                <input type="text" className="name" placeholder='your subject '
                    style={{ color: 'white' }}
                    onChange={(e) => setSubject(e.target.value)} />
                <textarea name="message" className='msg'
                    style={{ color: 'white', resize: 'none' }} rows="5" placeholder='your message'
                    onChange={(e) => setcontent(e.target.value)}
                ></textarea>
                <button className='submitBtn' style={{ cursor: 'pointer' }}
                    onClick={() => emailSend()}
                >Send</button>
            </div>
        </section>
    )
}

export default Contact